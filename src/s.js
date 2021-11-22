// var getSum = function (a, b) {
//   if (b == 0) {
//     return a;
//   } else {
//     return console.log(getSum(a ^ b, (a & b) << 1));
//   }
// };

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
