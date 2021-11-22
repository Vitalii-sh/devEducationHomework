//1
function v(queue) {
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
      return console.log("NO");
    } else {
      return console.log("YES");
    }
  } else {
    return console.log("NO");
  }
}
//2
// var getSum = function (a, b) {
//   let ab = [...a];
//   let ba = [...b];
//   if (b == 0) {
//     return a;
//   } else {
//     return console.log(getSum(ab ^ ba, (ab & ba) << 1));
//   }
// };
// console.log(
//   getSum(
//     1231111111111111111111111111111111111111111111,
//     3241111111111111111111111111111111111111111111
//   )
// );

// const num1 = "111111111111111111111111111111111111111111111111111";
// const num2 = "23333333333333333333333333333333333333333333333333";

// const sum = (a, b) => (b ? sum(a ^ b, (a & b) << 1) : a);

// function getSum(num1, num2) {
//   let rank = 0;
//   let answer = [];
//   num1 = num1.split("").reverse();
//   num2 = num2.split("").reverse();
//   const round = num1.length > num2.length ? num1.length : num2.length;
//   for (let i = 0; i < round; i++) {
//     let number = Number(sum(num1[i], num2[i]));
//     number += rank;
//     if (number > 9) {
//       rank = 1;
//       number -= 10;
//       answer.push(number);
//     } else {
//       answer.push(number);
//       rank = 0;
//     }
//   }
//   answer = answer.reverse().join("");

//   console.log(num1, num2);
//   return answer;
// }
// console.log(getSum(num1, num2));

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
        
        ...comments.forEach((element) => {
          if (element.comment === authorName) {
            comments++;
          }
        });
      }
    });
    return "post " + post + " comments " + comments;
  }
}

console.log(getQuantityPostsByAuthor(listOfPosts2, "Uncle"));
// function getQuntityPostsByAuthor(listOfPosts2, author) {
//   let postsCount = 0;
//   let commentsCount = 0;
//   for (author in listOfPosts2) {
//     if (Object.values.author === "Rimus" && Object.keys.post) {
//       postsCount += 1;
//     }
//   }
//   // for (const author in listOfPosts2) {
//   //   if (Object.hasOwnProperty.call(listOfPosts2, author)) {
//   //     const element = listOfPosts2[author];
//   //     console.log(element);
//   //   }
//   // }
//   return console.log(postsCount);
// }
