const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function terminal() {
  const elements = new Map();
  const element = key => {
    if (!elements.has(key)) elements.set(key, {
      textContent: '>', innerHTML: '', style: {}, value: '',
      href: 'https://drive.google.com/file/d/1K9Ebqrev4B4RC-X1HthmkwJVY--8kOQo/view?usp=sharing',
      addEventListener() {}, classList: { toggle() {} }
    });
    return elements.get(key);
  };
  const context = vm.createContext({
    document: { getElementById: element, querySelector: element },
    window: { addEventListener() {}, open() { throw new Error('Unexpected navigation'); } },
    navigator: { userAgent: 'Chrome' }, Audio: function () {},
    setTimeout() {}, setInterval() {}
  });
  for (const file of ['filesystem.js', 'script.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  return { run: command => context.handleCommand(command), element };
}

test('portfolio files reuse existing content without opening links', () => {
  const { run } = terminal();
  assert.match(run('ls'), /about\/.*projects\/.*contact\/.*resume\//s);
  assert.match(run('cat /about/bio.txt'), /Aerospace &amp; Defense/);
  assert.match(run('cat /resume/resume.txt'), /1K9Ebqrev4B4RC-X1HthmkwJVY--8kOQo/);
  assert.match(run('cat /projects/aimtracer.txt'), /OpenCV/);
  assert.match(run('tree'), /└── resume.txt/);
});

test('navigation handles relative, absolute, home, and previous paths', () => {
  const { run, element } = terminal();
  assert.equal(run('cd projects'), '');
  assert.equal(element('.prompt').textContent, '~/projects >');
  assert.match(run('pwd'), />\/projects</);
  assert.match(run('cat ./aimtracer.txt'), /OpenCV/);
  run('cd ../about');
  assert.match(run('cd -'), /\/projects/);
  run('cd ~/contact');
  assert.match(run('pwd'), /\/contact/);
  run('cd');
  run('cd ../../..');
  assert.equal(run('pwd'), '<span>/</span>');
});

test('grep supports quoted patterns, recursion, case, and line numbers', () => {
  const { run } = terminal();
  assert.match(run('grep -rin "PYTHON" /projects'), /aimtracer.txt:2:.*Python/);
  assert.match(run("grep 'Aerospace & Defense' /about/bio.txt"), /Aerospace &amp; Defense/);
  assert.match(run('grep -r OpenCV'), /aimtracer.txt/);
  assert.match(run('grep zzzzz /about/bio.txt'), /No matches/);
  assert.match(run('grep "[" /about/bio.txt'), /invalid regular expression/);
});

test('invalid paths and arguments leave navigation intact and render safely', () => {
  const { run } = terminal();
  assert.match(run('cd /missing'), /No such file/);
  assert.match(run('cd /about/bio.txt'), /Not a directory/);
  assert.match(run('cat /about'), /Is a directory/);
  assert.match(run('grep bio /about'), /Is a directory/);
  assert.match(run('ls --bogus'), /unsupported option/);
  assert.match(run('cat "unfinished'), /unclosed quote/);
  assert.match(run('cat "<img>"'), /&lt;img&gt;/);
  assert.equal(run('pwd'), '<span>/</span>');
});

test('help adds only the requested navigation entry', () => {
  const { run } = terminal();
  const help = run('help');
  assert.match(help, /ls\/cd\/grep\/\.\.\.<\/strong>\s+navigate and search portfolio files/);
  assert.doesNotMatch(help, /<strong>(ls|cd|cat|grep|pwd|tree|whoami)<\/strong>/);
  assert.match(run('about'), /aspiring Aerospace & Defense engineer/);
});
