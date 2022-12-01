const john = {
  name: "John",
  age: 20,
};
const susy = {
  name: "Susy",
  age: 25,
};
function greet() {
  console.log(this);
  console.log(`My name is ${this.name} ${this.age}`);
}

//call
const secGreet = greet.call(susy);
console.log(typeof secGreet);

//bind
const thirdGreet = greet.bind(susy);
console.log(typeof thirdGreet);
thirdGreet();
// secGreet.call(susy);
