//Если а – четное посчитать а*б, иначе а+б
//   const firsnNumber = parseInt(prompt("Введите число 1"));
//   const secondNumber = parseInt(prompt("Введите число 2"));
//   const result = firsnNumber % secondNumber == 0 ? console.log(firsnNumber * secondNumber) : console.log(firsnNumber + secondNumber);

//Определить какой четверти принадлежит точка с координатами (х,у)

// const x = parseInt(prompt("Введите x"));
// const y = parseInt(prompt("Введите y"));

// if ((x > 0) & (y > 0)) {
//   console.log("Первая четверть");
// }
// if ((x > 0) & (y < 0)) {
//   console.log("Вторая четверть");
// }
// if ((x < 0) & (y < 0)) {
//   console.log("Третья четверть");
// }
// if ((x < 0) & (y > 0)) {
//   console.log("Четвертая четверть");
// }
// if ((x == 0) & (y == 0)) {
//   console.log("Центр координат");
// }

// Найти суммы только положительных из трех чисел

// const firstNumber = parseInt(prompt("Введите число 1"));
// const secondNumber = parseInt(prompt("Введите число 2"));
// const thirdNumber = parseInt(prompt("Введите число 3"));
// let sum;
// if ((firstNumber >= 0) & (secondNumber >= 0) & (thirdNumber >= 0)) {
//   sum = firstNumber + secondNumber + thirdNumber;
// } else if ((firstNumber < 0) & (secondNumber >= 0) & (thirdNumber >= 0)) {
//   sum = secondNumber + thirdNumber;
// } else if ((firstNumber >= 0) & (secondNumber < 0) & (thirdNumber >= 0)) {
//   sum = firstNumber + thirdNumber;
// } else if ((firstNumber >= 0) & (secondNumber >= 0) & (thirdNumber < 0)) {
//   sum = firstNumber + secondNumber;
// }
// console.log(sum);

// Посчитать выражение (макс(а*б*с, а+б+с))+3

// const firstNumber = parseInt(prompt("Введите число 1", ""));
// const secondNumber = parseInt(prompt("Введите число 2", ""));
// const thirdNumber = parseInt(prompt("Введите число 3", ""));

// const sum = firstNumber + secondNumber + thirdNumber;
// const mult = firstNumber * secondNumber * thirdNumber;

// if (sum > mult) {
//   console.log(sum + 3);
// } else {
//   console.log(mult + 3);
// }

// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

// // const a = parseInt(prompt("Введите баллы", ""));
// if ((a >= 0) & (a <= 19)) {
//   console.log("F");
// }
// if ((a >= 20) & (a <= 39)) {
//   console.log("E");
// }
// if ((a >= 40) & (a <= 59)) {
//   console.log("D");
// }
// if ((a >= 60) & (a <= 74)) {
//   console.log("C");
// }
// if ((a >= 75) & (a <= 89)) {
//   console.log("B");
// }
// if ((a >= 90) & (a <= 100)) {
//   console.log("A");
// }
// if (a > 100) {
//   console.log(" Введите корректную сумму баллов.");
// }
