const data = document.getElementById("input");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

add.addEventListener("click", () => {
  list.append(data.value);
  console.log(list);
});

// remove.addEventListener("click", () => {
//   list.removeLastEltment(data.value);
//   console.log(list);
// });

remove.addEventListener("click", () => {
  list.remove(data.value);
  console.log(list);
});
