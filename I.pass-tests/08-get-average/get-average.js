
function getAverage(array) {
  let sum = 0;
  let count = 0;
  let ave = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      count++;
      sum += array[i];
    }

    ave = sum / count;
  }
  return ave;
};

module.exports =  getAverage