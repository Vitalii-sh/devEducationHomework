//  Получить строковое название дня недели по номеру дня.
// const day = parseInt(prompt("Введите номер дня"));
// let result;
// switch (day) {
//   case 1:
//     result = "Понедельник";
//     break;
//   case 2:
//     result = "Вторник";
//     break;
//   case 3:
//     result = "Среда";
//     break;
//   case 4:
//     result = "Четверг";
//     break;
//   case 5:
//     result = "Пятница";
//     break;
//   case 6:
//     result = "Суббота";
//     break;
//   case 7:
//     result = "Воскресенье";
//     break;
//   default:
//     result = "Выберите от 1 до 7";
// }
// console.log(result);

//Вводим число (0-999), получаем строку с прописью числа.

// let arr = [
//   "ноль",
//   "один",
//   "два",
//   "три",
//   "четыре",
//   "пять",
//   "шесть",
//   "семь",
//   "восемь",
//   "девять",
//   "десять",
// ];
// let arr4 = [
//   "одиннадцать",
//   "двенадцать",
//   "тринадцать",
//   "четырнадцать",
//   "пятнадцать",
//   "шестнадцать",
//   "семнадцать",
//   "восемнадцать",
//   "девятнадцать",
// ];
// let arr2 = [
//   "двадцать",
//   "тридцать",
//   "сорок",
//   "пятьдесят",
//   "шестьдесят",
//   "семьдесят",
//   "восемьдесят",
//   "девяносто",
// ];

// let arr3 = [
//   "сто",
//   "двести",
//   "триста",
//   "четыреста",
//   "пятьсот",
//   "шестьсот",
//   "семьсот",
//   "восемьсот",
//   "девятьсот",
// ];

// const num = parseInt(prompt("Введите число от 0 до 999"));
// if (num < 0 || num > 999) {
//   console.log("Введено неправильное число!");
// } else {
//   let numberOutput = numPropis(num);
//   console.log("Пользователь ввёл: " + num + " - " + numberOutput + " ");
// }

// function numPropis(num) {
//   if (num < 11) return arr[num];
//   if ((num < 20) & (num > 10)) return arr4[(num % 10) - 1];
//   let res = arr2[Math.floor(num / 10) - 2];
//   if ((num > 20) & (num < 100)) return (res += " " + arr[num % 10]);
//   let res1 = arr3[Math.floor(num / 100) - 1];
//   if ((num > 100) & (num < 1000))
//     return (res =
//       " " +
//       res1 +
//       " " +
//       arr2[Math.floor((num % 100) / 10) - 2] +
//       " " +
//       arr[num % 10]);
// }

//  Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
// const number = "двести тридцать";
// let sepNum = "";
// let first = "";
// let second = "";
// let third = "";
// let finNum = "";
// let num = 0;

// sepNum = number.split(" ");
// first = sepNum[0];
// second = sepNum[1];
// third = sepNum[2];
// let firstArr = [
//   "ноль",
//   "один",
//   "два",
//   "три",
//   "четыре",
//   "пять",
//   "шесть",
//   "семь",
//   "восемь",
//   "девять",
//   "десять",
//   "одинадцать",
//   "двенадцать",
//   "тринадцать",
//   "четырнадцать",
//   "пятнадцать",
//   "шестнадцать",
//   "семнадцать",
//   "восемнадцать",
//   "девятнадцать",
// ];

// let secondArr = [
//   "",
//   "",
//   "двадцать",
//   "тридцать",
//   "сорок",
//   "пятьдесят",
//   "шестьдесят",
//   "семьдесят",
//   "восемьдесят",
//   "девяносто",
// ];
// let thirdArr = [
//   "",
//   "сто",
//   "двести",
//   "триста",
//   "четыреста",
//   "пятьсот",
//   "шестьсот",
//   "семьсот",
//   "восемьсот",
//   "девятьсот",
// ];

// let three = function () {
//   if (thirdArr.includes(first)) {
//     finNum += thirdArr.indexOf(first);
//   }
//   if (secondArr.includes(second)) {
//     finNum += secondArr.indexOf(second);
//   }
//   if (firstArr.includes(third)) {
//     finNum += firstArr.indexOf(third);
//   }
// };

// let two = function () {
//   if (secondArr.includes(first)) {
//     finNum += secondArr.indexOf(first);
//   }
//   if (thirdArr.includes(first)) {
//     finNum += thirdArr.indexOf(first);
//   }
//   if (secondArr.includes(second) && thirdArr.includes(first)) {
//     finNum += secondArr.indexOf(second) + "0";
//   }

//   if (
//     firstArr.includes(second) &&
//     firstArr.indexOf(second) < 10 &&
//     thirdArr.includes(first)
//   ) {
//     finNum += "0";
//     finNum += firstArr.indexOf(second);
//   } else if (firstArr.includes(second)) {
//     finNum += firstArr.indexOf(second);
//   }
// };

// let one = function () {
//   if (firstArr.includes(first)) {
//     finNum += firstArr.indexOf(first);
//     console.log(finNum);
//   }
//   if (thirdArr.includes(first)) {
//     finNum += thirdArr.indexOf(first);
//     finNum += "00";
//   }
//   if (secondArr.includes(first)) {
//     finNum += secondArr.indexOf(first);
//     finNum += "0";
//   }
// };

// switch (sepNum.length) {
//   case 3:
//     three();
//     break;
//   case 2:
//     two();
//     break;
//   case 1:
//     one();
//     break;
// }

// num = +finNum;
// console.log(num);
// Найти расстояние между двумя точками в двумерном декартовом пространстве.
// const distpoint = function (x, y, x1, y1) {
//   let dist = 0;
//   dist = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2));
//   console.log(dist);
// };
// distpoint(2, 38, 4, 11);
