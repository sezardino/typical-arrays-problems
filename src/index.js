exports.min = function min(array) {
  if (array && array.length) {
    return Math.min(...array);
  } else {
    return 0;
  }
};

exports.max = function max(array) {
  if (array && array.length) {
    return Math.max(...array);
  } else {
    return 0;
  }
};

exports.avg = function avg(array) {
  if (array && array.length) {
    let sum = 0;
    array.map((item) => (sum += item));
    return (sum / array.length).toFixed(2);
  } else {
    return 0;
  }
};
