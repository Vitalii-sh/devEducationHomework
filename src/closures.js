//1.Верните YES, если Вася может продать каждому билет и отдатьсдачу. В противном случае верните NO.
//  Может ли Вася продать каждому билет и отдать сдачу?

function checkChange(queue) {
  let numberOf$25 = 0;
  let numberOf$50 = 0;

  if (queue[0] === 25) {
    for (const person of queue) {
      switch (true) {
        case person === 25:
          numberOf$25 += 1;
          break;
        case person === 50:
          numberOf$25 -= 1;
          numberOf$50 += 1;
          break;
        case person === 100:
          if (numberOf$25 > 0 && numberOf$50 > 0) {
            numberOf$25 -= 1;
            numberOf$50 -= 1;
          } else {
            numberOf$25 -= 3;
          }
          break;
      }
    }

    if (numberOf$25 < 0 || numberOf$50 < 0) {
      return "NO";
    } else {
      return "YES";
    }
  } else {
    return "NO";
  }
}
console.log(checkChange([25, 25, 50, 100]));
//2

//3
const listOfPosts2 = [
  {
    id: 1,
    post: "some post1",
    title: "title",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
    ],
  },
  {
    id: 2,
    post: "some post2",
    title: "title 2",
    author: "Ivanov",
    comments: [
      {
        id: 1.1,
        comment: "some comment1",
        title: "title 1",
        author: "Rimus",
      },
      {
        id: 1.2,
        comment: "some comment2",
        title: "title 2",
        author: "Uncle",
      },
      {
        id: 1.3,
        comment: "some comment3",
        title: "title 3",
        author: "Rimus",
      },
    ],
  },
  {
    id: 3,
    post: "some post3",
    title: "title 3",
    author: "Rimus",
  },
  {
    id: 4,
    post: "some post4",
    title: "title 4",
    author: "Uncle",
  },
];

function getQuantityPostsByAuthor(listOfPosts2, authorName) {
  let post = 0;
  let comments = 0;
  if (Array.isArray(listOfPosts2) && typeof authorName === "string") {
    listOfPosts2.forEach((element) => {
      if (element.author === authorName) {
        post += 1;
      } else if (element.comments) {
        element.comments.forEach((element) => {
          if (element.author === authorName && element.comment) {
            comments++;
          }
        });
      }
    });
    return "post " + post + " comments " + comments;
  }
}
console.log(getQuantityPostsByAuthor(listOfPosts2, "Rimus"));

//4.Напишите функцию кеш
const complexFunction = (arg1, arg2) => {
  return arg1 + arg2;
};

function cache() {
  const cachedArr = [];
  return function () {
    if (cachedArr.includes(arguments[0])) return cachedArr;
    cachedArr.push(arguments[0]);

    return cachedArr;
  };
}

let cachedFunc = cache(complexFunction);

console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "bar")));
console.log(cachedFunc(complexFunction("foo", "baz")));
console.log(cachedFunc(complexFunction("foo", "bazz")));
