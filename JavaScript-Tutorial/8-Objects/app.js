function Test(name) {
  this.name = name;
  console.log(`My name is ${this.name}`);
}

const abc = new Test("John");
