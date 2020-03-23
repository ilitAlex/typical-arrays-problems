
exports.min = function min (array) {
    if (array == undefined || array.length == 0) return 0;
    function getMinOfArray(numArray) {
        return Math.min.apply(null, numArray);
    }
    return getMinOfArray(array);
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) return 0;
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
  return getMaxOfArray(array);
}

exports.avg = function average(array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((a, b) => (a + b)) / array.length;
}

