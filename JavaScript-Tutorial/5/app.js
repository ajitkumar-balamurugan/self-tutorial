// let text = "Encyclopedia is over there";

// console.log(text.length);
// console.log(text.toUpperCase());

// const theArray = text.split(" ");
// console.log(theArray);

const firstName = ["Bob", "Anna", "Susy"];
const lastName = "Sab";
let fullName = [];

for (let index = 0; index < firstName.length; index++) {
  let name = firstName[index] + " " + lastName;
  fullName.push(name);
}
console.log(fullName);
