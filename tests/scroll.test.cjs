const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

test('startup and all command output scroll to the latest content', () => {
  const timers = [];
  const elements = new Map();
  const element = key => {
    if (!elements.has(key)) elements.set(key, {
      innerHTML: '', textContent: '>', value: '', style: {}, scrollTop: 0,
      href: 'https://drive.google.com/resume', handlers: {},
      get scrollHeight() { return 100 + element('output').innerHTML.length; },
      addEventListener(name, callback) { this.handlers[name] = callback; },
      classList: { toggle() {} }
    });
    return elements.get(key);
  };
  const context = vm.createContext({
    document: { getElementById: element, querySelector: element },
    window: { addEventListener() {} }, navigator: { userAgent: 'Chrome' },
    Audio: function () {}, setInterval() {}, setTimeout(callback) { timers.push(callback); }
  });
  for (const file of ['filesystem.js', 'script.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  context.updateCursorPosition = () => {};
  const finish = () => { while (timers.length) timers.shift()(); };
  const assertScrolled = () => {
    for (const key of ['output', '.terminal']) {
      assert.equal(element(key).scrollTop, element(key).scrollHeight, key);
    }
  };
  finish();
  assertScrolled();
  for (const command of ['ls', 'cd projects', 'pwd', 'cat aimtracer.txt', 'grep -ri python /projects', 'tree /', 'about', 'help', 'echo x', 'clear']) {
    element('.terminal').scrollTop = 0;
    element('commandInput').value = command;
    element('commandInput').handlers.keydown({ key: 'Enter' });
    finish();
    assertScrolled();
  }
  // A whole HTML block is emitted in fewer than three typewriter steps.
  context.typeWriter('<span>short response</span>', () => {});
  assertScrolled();
  finish();
  assertScrolled();
});
