module.exports = function(myArray) {
  var myNewArray = [];
  for (let i = 0; i < myArray.length; i++) {
    myNewArray.push(myArray[i] + 1);
  }
  return myNewArray;
};
