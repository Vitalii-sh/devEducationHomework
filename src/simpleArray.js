// Найти минимальный элемент массива
// const arr = prompt("Введите массив чисел");
// let minElement = arr[0];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] < minElement) {
//     minElement = arr[i];
//   }
// }
// console.log(minElement);

// Найти максимальный элемент массива
// const arr = prompt("Введите массив чисел");
// let maxElement = arr[0];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] > maxElement) {
//     maxElement = arr[i];
//   }
// }
// console.log(maxElement);

// Найти индекс минимального элемента массива
// const arr = prompt("Введите массив чисел");
// let index = 0;
// let minValue = arr[0];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] < minValue) {
//     index = i;
//     minValue = arr[i];
//   }
// }
// console.log(index);

// Найти индекс максимального элемента массива
// const arr = prompt("Введите массив чисел");
// let index = 0,
//   maxValue = arr[0];
// for (i = 1; i < arr.length; i++) {
//   if (arr[i] > maxValue) {
//     index = i;
//     maxValue = arr[i];
//   }
// }
// console.log(index);

// Посчитать сумму элементов массива с нечетными индексами
// const userArr = [3, 3, 3, 3, 3, 3];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
//   if (i % 2 == 1) {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);

//Сделать реверс массива (массив в обратном направлении)
// const userArr = prompt("Введите массив");
// let reverseArr = [];
// numbers = new String(userArr);
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reverseArr += numbers[i];
// }
// console.log(reverseArr);

// Посчитать количество нечетных элементов массива

// const arr = [1, 2, 3, 4, 5, 6];
// let sumOdd = 0;
// let sumPar = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sumPar++;
//   } else {
//     sumOdd++;
//   }
// }
// console.log("Odd : " + sumOdd);
// console.log("Par : " + sumPar);

// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
// const arr = [1, 2, 3, 4];
// const half = arr.length / 2;
// const div = half + (arr.length % 2);
// for (i = 0; i < div; i++) {
//   let currentElement = arr[i];
//   arr[i] = arr[div + i];
//   arr[div + i] = currentElement;
// }
// console.log(arr);

// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// const arr = [1, 3, 5, 2, 4];
// {
//   for (lengthIn = arr.length; lengthIn > 0; lengthIn--) {
//     for (currSwap = 0; currSwap < lengthIn - 1; currSwap++) {
//       if (arr[currSwap] > arr[currSwap + 1]) {
//         let curElement = arr[currSwap];
//         arr[currSwap] = arr[currSwap + 1];
//         arr[currSwap + 1] = curElement;
//       }
//     }
//   }
//   console.log(arr);
// }

// const arr = [1, 4, 2, 5, 3];
// let min;
// for (OutIterations = 0; OutIterations < arr.length - 1; OutIterations++) {
//   min = OutIterations;
//   for (
//     CountInIterations = OutIterations;
//     CountInIterations < arr.length;
//     CountInIterations++
//   ) {
//     if (arr[CountInIterations] < arr[min]) {
//       min = CountInIterations;
//     }
//   }
//   let temp = arr[OutIterations];
//   arr[OutIterations] = arr[min];
//   arr[min] = temp;
// }
// console.log(arr);

// const arr = [1, 4, 2, 5, 3, 8];
// let j;
// let value;
// for (i = 1; i < arr.length; i++) {
//   value = arr[i];
//   for (j = i - 1; j >= 0 && arr[j] > value; j--) {
//     arr[j + 1] = arr[j];
//   }
//   arr[j + 1] = value;
// }
// console.log(arr);
