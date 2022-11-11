const people = [
  { name: "Bob", age: 20, position: "Developer", id: 1 },
  { name: "Peter", age: 30, position: "Designer", id: 2 },
  { name: "Anna", age: 30, position: "HR", id: 3 },
  { name: "Susy", age: 40, position: "Manager", id: 4 },
];

// //forEach
// const forEach = people.forEach(function (person) {
//   console.log(person);
//   return "from forEach";
// });
// console.log(typeof forEach);
// console.log(forEach);

// //map
// //returns an object
// const map = people.map(function (person) {
//   console.log(person);
//   return "from map";
// });
// console.log(typeof map);
// console.log(map);
// const names = people.map(function (person) {
//   return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join("");
// console.log(names);

// //filter - returns array
// const youngPeople = people.filter(function (person) {
//   return person.name == "Anna";
// });
// console.log(youngPeople);

// //find - great for getting unique value
// const person = people.find(function (person) {
//   return person.id == 2;
// });
// console.log(person.name);
// const person2 = people.filter(function (person) {
//   return person.id == 2;
// });
// console.log(person2[0].name);

// //reduce
// const total = people.reduce(function (acc, currItem) {
//   acc += currItem.age;
//   console.log(acc);
//   console.log(currItem);
//   return acc;
// }, 0);
