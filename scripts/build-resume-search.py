"""Rebuild the resume preview and search index with Poppler (pdftotext/pdftoppm).
Run from any directory: python3 scripts/build-resume-search.py
The original PDF remains the source of truth; rebuild after replacing it.
"""
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parents[1]
source = root / 'resume(1).pdf'
target = root / 'keyword-search'
ns = {'h': 'http://www.w3.org/1999/xhtml'}
sections = {'Education', 'Skills Summary', 'Work Experience', 'Awards & Languages'}
with tempfile.TemporaryDirectory() as tmp:
    xml = Path(tmp) / 'resume.html'
    subprocess.run(['pdftotext', '-bbox-layout', str(source), str(xml)], check=True)
    doc = ET.parse(xml)
    pages, entries = [], []
    section, role = 'Resume', ''
    for number, page in enumerate(doc.findall('.//h:page', ns), 1):
        width, height = float(page.get('width')), float(page.get('height'))
        pages.append({'width': width, 'height': height, 'image': f'page-{number}.png'})
        for block in page.findall('.//h:block', ns):
            entry = None
            for line in block.findall('h:line', ns):
                words = line.findall('h:word', ns)
                text = ' '.join(w.text or '' for w in words)
                if text in sections:
                    section, role = text, ''
                if text.startswith('•') and section == 'Work Experience':
                    role = text.lstrip('• ')
                if entry is None or text.startswith(('•', '–')):
                    entry = {'text': '', 'words': [], 'section': section, 'role': role, 'page': number}
                    entries.append(entry)
                for word in words:
                    if entry['text']:
                        entry['text'] += ' '
                    start = len(entry['text'])
                    entry['text'] += word.text or ''
                    entry['words'].append({
                        'start': start, 'end': len(entry['text']),
                        'x': round(float(word.get('xMin')) / width * 100, 5),
                        'y': round(float(word.get('yMin')) / height * 100, 5),
                        'w': round((float(word.get('xMax')) - float(word.get('xMin'))) / width * 100, 5),
                        'h': round((float(word.get('yMax')) - float(word.get('yMin'))) / height * 100, 5),
                    })
        subprocess.run(['pdftoppm', '-f', str(number), '-l', str(number), '-singlefile',
                        '-scale-to', '1800', '-png', str(source), str(target / f'page-{number}')], check=True)
    data = {'pdf': '/resume(1).pdf', 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
            'pages': pages, 'entries': entries}
    (target / 'resume.json').write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n')
