var getWordLengths = function(someWords) {
  var myArray = [];
  for (let i = 0; i < someWords.length; i++) {
    const word = someWords[i];
    myArray.push(word.length);
  }
  return myArray;
};

module.exports = getWordLengths;
