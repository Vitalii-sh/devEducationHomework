// Если а – четное посчитать а*б, иначе а+б

function mult(firstNumber, secondNumber) {
  if (firstNumber >= 0 && secondNumber >= 0) {
    const result =
      firstNumber % secondNumber == 0
        ? firstNumber * secondNumber
        : firstNumber + secondNumber;
    return result;
  } else {
    return "Numbers must be >= 0";
  }
}

// Определить какой четверти принадлежит точка с координатами (х,у)

function findQuarter(x, y) {
  if (x > 0 && y > 0) {
    return "Первая четверть";
  }
  if (x > 0 && y < 0) {
    return "Вторая четверть";
  }
  if (x < 0 && y < 0) {
    return "Третья четверть";
  }
  if (x < 0 && y > 0) {
    return "Четвертая четверть";
  }
  if (x == 0 && y == 0) {
    return "Центр координат";
  }
}

// Найти суммы только положительных из трех чисел
function sumOfPosNum(firstNumber, secondNumber, thirdNumber) {
  let sum = 0;
  if ((firstNumber >= 0) & (secondNumber >= 0) & (thirdNumber >= 0)) {
    sum = firstNumber + secondNumber + thirdNumber;
  } else if ((firstNumber < 0) & (secondNumber >= 0) & (thirdNumber >= 0)) {
    sum = secondNumber + thirdNumber;
  } else if ((firstNumber >= 0) & (secondNumber < 0) & (thirdNumber >= 0)) {
    sum = firstNumber + thirdNumber;
  } else if ((firstNumber >= 0) & (secondNumber >= 0) & (thirdNumber < 0)) {
    sum = firstNumber + secondNumber;
  }
  return sum;
}
// Посчитать выражение (макс(а*б*с, а+б+с))+3
function maxSumOrMult(firstNumber, secondNumber, thirdNumber) {
  const sum = firstNumber + secondNumber + thirdNumber;
  const mult = firstNumber * secondNumber * thirdNumber;

  if (sum > mult) {
    return sum + 3;
  } else {
    return mult + 3;
  }
}
// Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function studentGrade(value) {
  let grade;
  switch (true) {
    case value >= 0 && value <= 19:
      grade = "F";
      break;
    case value >= 20 && value <= 39:
      grade = "E";
      break;
    case value >= 40 && value <= 59:
      grade = "D";
      break;
    case value >= 60 && value <= 74:
      grade = "C";
      break;
    case value >= 75 && value <= 89:
      grade = "B";
      break;
    case value >= 90 && value <= 100:
      grade = "A";
      break;
    default:
      grade = "incorrect grade";
      break;
  }
  return grade;
}
