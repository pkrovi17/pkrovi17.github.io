// A read-only portfolio filesystem, built from the same content as the main commands.
let portfolioFiles;
let currentDirectory = '/';
let previousDirectory = '/';

function escapeTerminalText(text) {
  return String(text).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

function getPortfolioFiles() {
  if (portfolioFiles) return portfolioFiles;
  const plain = html => html.replace(/<[^>]*>/g, '');
  portfolioFiles = new Map([
    ['/', null], ['/about', null], ['/projects', null], ['/contact', null], ['/resume', null],
    ['/about/bio.txt', plain(handleCommand('about'))],
    ['/contact/links.txt', plain(handleCommand('contact'))],
    ['/resume/resume.txt', `Resume\n${document.querySelector('.dropdown-menu a[href*="drive.google.com"]').href}`],
    ['/README.txt', 'Welcome to Pranav Krovi’s portfolio.\nExplore about/, projects/, contact/, and resume/.\nTry: ls, cd projects, cat aimtracer.txt, grep -ri "python" /projects\nUse cd .. to go back, cd ~ to return home, and tree to see everything.']
  ]);
  for (const project of getProjectEntries()) {
    const text = plain(project);
    const name = text.split('\n')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-');
    portfolioFiles.set(`/projects/${name}.txt`, text);
  }
  return portfolioFiles;
}

function resolvePortfolioPath(path = '.') {
  if (path === '~' || path.startsWith('~/')) path = '/' + path.slice(2);
  const parts = path.startsWith('/') ? [] : currentDirectory.split('/').filter(Boolean);
  for (const part of path.split('/')) {
    if (part === '..') parts.pop();
    else if (part && part !== '.') parts.push(part);
  }
  return '/' + parts.join('/');
}

function runFileCommand(command) {
  const name = command.trim().split(/\s+/)[0].toLowerCase();
  if (!['ls', 'cd', 'pwd', 'cat', 'grep', 'tree', 'whoami'].includes(name)) return null;
  const result = text => `<span>${escapeTerminalText(text)}</span>`;
  // Support quoted arguments and escaped characters without executing shell code.
  const tokens = [];
  let token = '', quote = '', started = false;
  const input = command.trim();
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '\\' && quote !== "'") {
      if (++i === input.length) return result(`${name}: incomplete escape`);
      token += input[i];
      started = true;
    } else if (quote) {
      if (char === quote) quote = '';
      else token += char;
    } else if (char === '"' || char === "'") {
      quote = char;
      started = true;
    } else if (/\s/.test(char)) {
      if (started) tokens.push(token);
      token = '';
      started = false;
    } else {
      token += char;
      started = true;
    }
  }
  if (quote) return result(`${name}: unclosed quote`);
  if (started) tokens.push(token);
  const args = tokens.slice(1);
  const files = getPortfolioFiles();
  const children = path => [...files.keys()].filter(key => key !== '/' && key.slice(0, key.lastIndexOf('/')) === (path === '/' ? '' : path));
  const basename = path => path.split('/').pop();
  const error = path => !files.has(path) ? 'No such file or directory' : 'Is a directory';

  if (name === 'pwd' || name === 'whoami') {
    return result(args.length ? `${name}: too many arguments` : name === 'pwd' ? currentDirectory : 'pranav-krovi');
  }
  if (name === 'cd') {
    if (args.length > 1) return result('cd: too many arguments');
    const path = args[0] === '-' ? previousDirectory : resolvePortfolioPath(args[0] ?? '~');
    if (!files.has(path)) return result(`cd: ${args[0]}: No such file or directory`);
    if (files.get(path) !== null) return result(`cd: ${args[0]}: Not a directory`);
    previousDirectory = currentDirectory;
    currentDirectory = path;
    document.querySelector('.prompt').textContent = `${path === '/' ? '~' : '~' + path} >`;
    return args[0] === '-' ? result(path) : '';
  }
  if (name === 'cat') {
    if (!args.length) return result('Usage: cat <file> [file ...]');
    return result(args.map(arg => {
      const path = resolvePortfolioPath(arg);
      return typeof files.get(path) === 'string' ? files.get(path) : `cat: ${arg}: ${error(path)}`;
    }).join('\n'));
  }
  if (name === 'ls' || name === 'tree') {
    const flags = args.filter(arg => arg.startsWith('-'));
    if (flags.some(flag => !/^-[al]+$/.test(flag) || name === 'tree')) return result(`${name}: unsupported option`);
    const paths = args.filter(arg => !arg.startsWith('-'));
    if (!paths.length) paths.push('.');
    return result(paths.map(arg => {
      const path = resolvePortfolioPath(arg);
      if (!files.has(path)) return `${name}: ${arg}: No such file or directory`;
      if (files.get(path) !== null) return basename(path);
      if (name === 'ls') {
        const entries = children(path).map(key => {
          const directory = files.get(key) === null;
          return (flags.some(flag => flag.includes('l')) ? (directory ? 'dr-xr-xr-x  ' : '-r--r--r--  ') : '') + basename(key) + (directory ? '/' : '');
        });
        if (flags.some(flag => flag.includes('a'))) entries.unshift('./', '../');
        return entries.join('\n');
      }
      const lines = [arg];
      const walk = (parent, prefix) => children(parent).forEach((key, index, entries) => {
        const last = index === entries.length - 1;
        lines.push(prefix + (last ? '└── ' : '├── ') + basename(key) + (files.get(key) === null ? '/' : ''));
        if (files.get(key) === null) walk(key, prefix + (last ? '    ' : '│   '));
      });
      walk(path, '');
      return lines.join('\n');
    }).join('\n'));
  }
  const flags = new Set();
  while (args.length && args[0].startsWith('-') && args[0] !== '--') {
    const option = args.shift();
    if (!/^-[rin]+$/.test(option)) return result(`grep: unsupported option: ${option}`);
    for (const flag of option.slice(1)) flags.add(flag);
  }
  if (args[0] === '--') args.shift();
  if (!args.length) return result('Usage: grep [-rin] <pattern> <file or directory>');
  const pattern = args.shift();
  let expression;
  try { expression = new RegExp(pattern, flags.has('i') ? 'i' : ''); }
  catch { return result('grep: invalid regular expression'); }
  if (!args.length) {
    if (flags.has('r')) args.push('.');
    else return result('Usage: grep [-rin] <pattern> <file or directory>');
  }
  const lines = [];
  for (const arg of args) {
    const path = resolvePortfolioPath(arg);
    if (!files.has(path) || (files.get(path) === null && !flags.has('r'))) {
      lines.push(`grep: ${arg}: ${error(path)}`);
      continue;
    }
    const targets = files.get(path) === null
      ? [...files.keys()].filter(key => key.startsWith(path === '/' ? '/' : path + '/') && files.get(key) !== null)
      : [path];
    for (const target of targets) {
      files.get(target).split('\n').forEach((line, index) => {
        if (expression.test(line)) lines.push(`${target}:${flags.has('n') ? index + 1 + ':' : ''}${line}`);
      });
    }
  }
  return result(lines.join('\n') || 'No matches found.');
}
