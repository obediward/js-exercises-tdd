function secondLargest(Array) {
  let arraySort = Array.sort((a, b) => b - a);
  if (arraySort[1] == arraySort[0]) {
    return arraySort[2];
  } else {
    return arraySort[1];
  }
}
module.exports = secondLargest;

// (potato) => cucumber is the same than
//function xxx(potato) { return cucumber }

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
