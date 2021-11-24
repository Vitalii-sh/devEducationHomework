const data = document.getElementById("input");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const removeLast = document.getElementById("remove__last");

add.addEventListener("click", () => {
  list.append(data.value);
  console.log(list);
});

removeLast.addEventListener("click", () => {
  list.removeLastEltment(data.value);
  console.log(list);
});

remove.addEventListener("click", () => {
  list.remove(data.value);
  console.log(list);
});
