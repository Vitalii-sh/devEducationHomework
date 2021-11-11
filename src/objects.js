function getCookingTime(number) {
  const result = [];
  if (number > 0) {
    result.push(Math.ceil(number / 5) * 5);
  } else {
    result.push("Numbers must be > 0");
  }
  return result;
}
console.log(getCookingTime(11));

function getNumber(arr) {
  const newArr = [];

  if (Array.isArray(arr)) {
    newArr.push(arr.filter((element) => element % 2 === 0));
    newArr.push(arr.filter((element) => element % 2 !== 0));
  } else {
    return console.log("Not array!");
  }
  return newArr;
}
Numbers = [1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]; //returns 4
Numbers2 = [0, 2, 8, -4, 0, -122, 13, -4, 28, 12]; //returns 13

console.log(getNumber(Numbers));

// Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями.
//  Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов,
//  которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
let arr = [
  { title: "Some title1" },
  { title: "I like JS" },
  { user: "This obj doesn’t have key title js" },
  { title: "Js - is the best!" },
];

function findTitle(array, string) {
  const result = array

    .filter((elem) => elem.title)
    .reduce((res, elem) => {
      const title = elem.title.toLowerCase();
      const newString = string.toLowerCase();
      if (title.includes(newString)) {
        res.push(elem);
      }
      return res;
    }, []);

  return result;
}
console.log(findTitle(arr, "js")); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string) {
  let result = [...string].reduce((item, index) => {
    item[index] = item[index] ? item[index] + 1 : 1;
    return item;
  }, {});

  return result;
}

console.log(countCharacters("sparrow")); // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters("aabcddeffge")); // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters("a 2ab !d")); // should return {a: 2, b:1, d:1, 2:1}

// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».

function Palindrome(number) {
  number = "" + number;
  for (let i = 0; i < number.length / 2; i++) {
    if (number[i] != number[number.length - (i + 1)]) return false;
  }
  return true;
}

function nextPalindrome(number) {
  while (!Palindrome(++number)) {}
  return number;
}

console.log(nextPalindrome(7)); // returns 11
console.log(nextPalindrome(99)); // returns 101
console.log(nextPalindrome(132)); // returns 141
console.log(nextPalindrome(888)); // returns 898
console.log(nextPalindrome(999)); // returns 1001

// 6. Создать структуру данных Set, используя объект, создать методы add, remove, has

(function () {
  const mySet = new Set();

  mySet.add(1);
  mySet.add(2);
  mySet.add(3);

  console.log(mySet);
  mySet.delete(2);
  console.log(mySet.has(2));
})();
