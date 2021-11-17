// Найти минимальный элемент массива
function minElementOfArr(value) {
  let minElement = value[0];
  for (i = 1; i < value.length; i++) {
    if (value[i] < minElement) {
      minElement = value[i];
    }
  }
  return minElement;
}

// Найти максимальный элемент

function maxElementOfArr(value) {
  let maxElement = value[0];
  for (i = 1; i < value.length; i++) {
    if (value[i] > maxElement) {
      maxElement = value[i];
    }
  }
  return maxElement;
}
// Найти индекс минимального элемента массива
function findMinIndexOfArr(value) {
  let index = 0;
  let minValue = value[0];
  for (i = 1; i < value.length; i++) {
    if (value[i] < minValue) {
      index = i;
      minValue = value[i];
    }
  }
  return index;
}
// Найти индекс максимального элемента массива
function findMaxIndexOfArr(value) {
  let index = 0,
    maxValue = value[0];
  for (i = 1; i < value.length; i++) {
    if (value[i] > maxValue) {
      index = i;
      maxValue = value[i];
    }
  }
  return index;
}
// Посчитать сумму элементов массива с нечетными индексами
function sumOfOddIndexes(value) {
  let sum = 0;
  for (let i = 0; i <= value.length; i++) {
    if (i % 2 == 1) {
      sum = sum + value[i];
    }
  }
  return sum;
}
//Сделать реверс массива (массив в обратном направлении)
function reverseArr(value) {
  let reverseArr = [];
  numbers = new String(value);
  for (let i = numbers.length - 1; i >= 0; i--) {
    reverseArr += numbers[i];
  }
  return reverseArr;
}
// Посчитать количество нечетных элементов массива
function numOfOddElements(value) {
  let sumOdd = 0;
  let sumPar = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  return sumOdd;
}
// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function swapElemOfArr(value) {
  const half = value.length / 2;
  const div = half + (value.length % 2);
  for (i = 0; i < div; i++) {
    let currentElement = value[i];
    value[i] = value[div + i];
    value[div + i] = currentElement;
  }
  return value;
}
// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
function bubble(value) {
  for (lengthIn = value.length; lengthIn > 0; lengthIn--) {
    for (currSwap = 0; currSwap < lengthIn - 1; currSwap++) {
      if (value[currSwap] > value[currSwap + 1]) {
        let curElement = value[currSwap];
        value[currSwap] = value[currSwap + 1];
        value[currSwap + 1] = curElement;
      }
    }
  }
  return value;
}
function select(value) {
  let min;
  for (OutIterations = 0; OutIterations < value.length - 1; OutIterations++) {
    min = OutIterations;
    for (
      CountInIterations = OutIterations;
      CountInIterations < value.length;
      CountInIterations++
    ) {
      if (value[CountInIterations] < value[min]) {
        min = CountInIterations;
      }
    }
    let temp = value[OutIterations];
    value[OutIterations] = value[min];
    value[min] = temp;
  }
  return value;
}

function insert(value) {
  let j;
  let value1;
  for (i = 1; i < value.length; i++) {
    value1 = value[i];
    for (j = i - 1; j >= 0 && value[j] > value1; j--) {
      value[j + 1] = value[j];
    }
    value[j + 1] = value1;
  }
  return value;
}
