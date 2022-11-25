const nos = ["one", "two", "three"];

localStorage.setItem("numbers", JSON.stringify(nos));
const theItem = JSON.parse(localStorage.getItem("numbers"));

console.log(theItem[1]);
