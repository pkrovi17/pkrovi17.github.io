import { findMatches, matchedWords } from './match.mjs';

const form = document.getElementById('search-form');
const input = document.getElementById('keyword');
const status = document.getElementById('status');
const results = document.getElementById('results');
const pages = document.getElementById('resume-pages');
let resume;

function highlightedText(text, ranges) {
  const fragment = document.createDocumentFragment();
  let offset = 0;
  for (const range of ranges) {
    fragment.append(document.createTextNode(text.slice(offset, range.start)));
    const mark = document.createElement('mark');
    mark.textContent = text.slice(range.start, range.end);
    fragment.append(mark);
    offset = range.end;
  }
  fragment.append(document.createTextNode(text.slice(offset)));
  return fragment;
}

function jumpToMatch(index) {
  document.querySelectorAll('.highlight.active').forEach(node => node.classList.remove('active'));
  const highlights = document.querySelectorAll(`[data-match="${index}"]`);
  highlights.forEach(node => node.classList.add('active'));
  highlights[0]?.scrollIntoView({ block: 'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}

function search() {
  if (!resume) return;
  const query = input.value.trim().replace(/\s+/g, ' ');
  results.replaceChildren();
  document.querySelectorAll('.highlights').forEach(layer => layer.replaceChildren());
  if (!query) {
    status.textContent = 'Ready. Search a keyword or choose an example above.';
    return;
  }
  const matches = findMatches(resume.entries, query);
  const count = matches.reduce((total, match) => total + match.ranges.length, 0);
  status.textContent = count
    ? `${count} ${count === 1 ? 'match' : 'matches'} for “${query}” in ${matches.length} resume ${matches.length === 1 ? 'excerpt' : 'excerpts'}.`
    : `No matches for “${query}” in this resume. Try a shorter phrase or another skill.`;
  const groups = new Map();
  for (const match of matches) {
    const { entry, index, ranges } = match;
    const layer = document.getElementById(`highlights-${entry.page}`);
    for (const word of matchedWords(match)) {
      const box = document.createElement('span');
      box.className = 'highlight';
      box.dataset.match = index;
      box.style.left = `${word.x}%`;
      box.style.top = `${word.y}%`;
      box.style.width = `${word.w}%`;
      box.style.height = `${word.h}%`;
      layer.append(box);
    }
    const groupName = entry.role || entry.section;
    if (!groups.has(groupName)) {
      const group = document.createElement('section');
      group.className = 'result-group';
      const title = document.createElement('h2');
      title.textContent = groupName;
      const list = document.createElement('ul');
      group.append(title, list);
      results.append(group);
      groups.set(groupName, list);
    }
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'result';
    button.append(highlightedText(entry.text, ranges));
    const source = document.createElement('small');
    source.textContent = `Resume · page ${entry.page} · show match ↗`;
    button.append(source);
    button.addEventListener('click', () => jumpToMatch(index));
    item.append(button);
    groups.get(groupName).append(item);
  }
  // On mobile keep results in view; tapping a result takes the reader to the PDF.
  if (matches.length && matchMedia('(min-width: 761px)').matches) jumpToMatch(matches[0].index);
}

form.addEventListener('submit', event => { event.preventDefault(); search(); });
input.addEventListener('input', () => { if (!input.value.trim()) search(); });
document.querySelectorAll('[data-keyword]').forEach(button => {
  button.addEventListener('click', () => { input.value = button.dataset.keyword; search(); });
});

try {
  const response = await fetch('resume.json');
  if (!response.ok) throw new Error('Resume index unavailable');
  resume = await response.json();
  pages.replaceChildren();
  const images = resume.pages.map((page, index) => {
    const frame = document.createElement('div');
    frame.className = 'resume-page';
    const img = document.createElement('img');
    img.src = page.image;
    img.width = page.width;
    img.height = page.height;
    img.alt = `Pranav Krovi’s resume, page ${index + 1}. Use keyword search to read relevant excerpts, or open the original PDF above.`;
    const layer = document.createElement('div');
    layer.className = 'highlights';
    layer.id = `highlights-${index + 1}`;
    layer.setAttribute('aria-hidden', 'true');
    frame.append(img, layer);
    pages.append(frame);
    return img.decode();
  });
  await Promise.all(images);
  document.querySelectorAll('input, button').forEach(control => { control.disabled = false; });
  status.textContent = 'Ready. Search a keyword or choose an example above.';
} catch (error) {
  status.textContent = 'The searchable resume could not load. Reload to try again, or use “open PDF” above.';
  const notice = document.createElement('p');
  notice.textContent = 'Resume preview unavailable. The original PDF is available above.';
  pages.replaceChildren(notice);
  console.error(error);
}
