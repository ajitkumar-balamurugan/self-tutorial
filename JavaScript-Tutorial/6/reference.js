let number = 4;
let number2 = number;
number2 = 8;
console.log(`First number ${number}`);
console.log(`Second number ${number2}`);

let person = { name: "Bob" };
// let person2 = { ...person }; Not referenced but the values are copied
let person2 = person; //Referenced
person2.name = "Susy";
console.log(`First ${person.name}`);
console.log(`Second ${person2.name}`);
