function findNeedle(words, needle) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word == needle) {
      return i;
    }
  }
}

module.exports = findNeedle;
