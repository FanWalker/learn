import add from './add.js';
export function say(name) {
  return `hello ${name}, 1 + 1 等于${add(1, 1)}`;
}
