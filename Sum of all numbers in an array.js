var numbers = [1, 2, 3, 4, 5];

var sum = (function(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
})(numbers);

console.log(sum);
