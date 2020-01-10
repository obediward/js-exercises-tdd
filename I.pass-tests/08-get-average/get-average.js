// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = function getAverage(arr) {
  let sum = 0;
  let count = 0;
  let ave = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      count++;
      sum += arr[i];
    }

    ave = sum / count;
  }
  return ave;
};
