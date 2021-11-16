// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumAndCount(value) {
  let sum = 0;
  let count = 0;
  if (value > 0) {
    for (i = value; i < 99; i++) {
      if (i % 2 == 0) {
        sum += i;
        count++;
      }
    }
  } else {
    return "start value can't be 0 or less";
  }
  return `sum = ${sum}, count = ${count}`;
}

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isSimpleNumber(userNumber) {
  let num = "Это простое число";
  for (i = 2; i < userNumber; i++) {
    if (userNumber % i == 0) {
      return (num = "Это не простое число");
    }
  }
  return num;
}

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function findRoot(value) {
  let isRoot = 1;
  if (value >= 0)
    while (isRoot * isRoot <= value) {
      isRoot++;
    }
  else {
    return "must be > 0";
  }
  return parseInt(isRoot - 1);
}
// Метод бинарного поиска
function findRoot2(value) {
  let isRoot = value;
  if (value >= 0) {
    while (isRoot * isRoot > value) {
      isRoot /= 2;
    }
    while (isRoot * isRoot < value) {
      isRoot++;
    }
  } else {
    return "must be > 0";
  }
  return parseInt(isRoot);
}

// Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function findFactorial(value) {
  let factorial = 1;
  if (value > 1) {
    for (i = 2; i <= value; i++) {
      factorial *= i;
    }
  } else {
    return "value must be > 1";
  }
  return parseInt(factorial);
}
// Посчитать сумму цифр заданного числа
function sumOfNum(value) {
  let sum = 0;
  let tmp;
  if (value > 0) {
    while (value != 0) {
      tmp = value % 10;
      value = (value - tmp) / 10;
      sum += tmp;
    }
  } else {
    return "value must be > 1";
  }
  return sum;
}
// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function reversNumbers(value) {
  numbers = new String(value);
  reversNumber = new String();
  if (value >= 10) {
    for (let i = numbers.length; i >= 0; i--) {
      reversNumber += numbers.charAt(i);
    }
  } else {
    return "value must be >= 10";
  }
  return reversNumber;
}
//Or
// console.log(userNumber.split("").reverse().join(""));
