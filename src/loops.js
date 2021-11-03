// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
// let sum = 0;
// let count = 0;
// for (i = 1; i < 99; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//     count++;
//   }
// }
// console.log(sum, count);

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

// const userNumber = parseInt(prompt("Введите число"));
// let num = "Это простое число";
// for (i = 2; i < userNumber; i++) {
//   if (userNumber % i == 0) {
//     num = "Это не простое число";
//   }
// }
// console.log(num);

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// const userNumber = parseInt(prompt("Введите число"));
// let isRoot = 1;
// while (isRoot * isRoot <= userNumber) {
//   isRoot++;
// }
// console.log(isRoot - 1);

// Метод бинарного поиска

// const userNumber = parseInt(prompt("Введите число"));
// let isRoot = userNumber;
// while (isRoot * isRoot > userNumber) {
//   isRoot /= 2;
// }
// while (isRoot * isRoot < userNumber) {
//   isRoot++;
// }
// console.log(isRoot);

// Вычислить факториал числа n. n! = 1*2*…*n-1*n;

// const userNumber = parseInt(prompt("Введите число"));
// let factorial = 1;
// if (userNumber > 1) {
//   for (i = 2; i <= userNumber; i++) {
//     factorial *= i;
//   }
// }
// console.log(factorial);

// Посчитать сумму цифр заданного числа

// let userNumber = prompt("Введите число");
// let sum = 0;
// let tmp;
// while (userNumber != 0) {
//   tmp = userNumber % 10;
//   userNumber = (userNumber - tmp) / 10;
//   sum += tmp;
// }
// console.log(sum);

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
// let userNumber = prompt("Введите число");
// numbers = new String(userNumber);
// reversNumber = new String();
// for (let i = numbers.length; i >= 0; i--) {
//   reversNumber += numbers.charAt(i);
// }
// console.log(reversNumber);

//Or
// console.log(userNumber.split("").reverse().join(""));
