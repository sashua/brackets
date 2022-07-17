module.exports = function check(str, bracketsConfig) {
  const pairs = {};
  for (const [open, close] of bracketsConfig) {
    pairs[close] = open;
  }

  const opens = Object.values(pairs);
  const stack = [];

  for (b of str) {
    if (b === pairs[b] && b === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    if (opens.includes(b)) {
      stack.push(b);
      continue;
    }
    if (!(stack.pop() === pairs[b])) {
      return false;
    }
  }

  return !stack.length;
};
