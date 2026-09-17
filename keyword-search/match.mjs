// Literal, case-insensitive phrase matching; punctuation such as C++ stays literal.
export function findMatches(entries, query) {
  const needle = query.trim().replace(/\s+/g, ' ').toLowerCase();
  if (!needle) return [];
  return entries.flatMap((entry, index) => {
    const haystack = entry.text.toLowerCase();
    const ranges = [];
    let offset = 0;
    while ((offset = haystack.indexOf(needle, offset)) !== -1) {
      ranges.push({ start: offset, end: offset + needle.length });
      offset += needle.length;
    }
    return ranges.length ? [{ entry, index, ranges }] : [];
  });
}

export function matchedWords(match) {
  return match.entry.words.filter(word => match.ranges.some(range => word.start < range.end && word.end > range.start));
}
