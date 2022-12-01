// console.log({});
// console.log([]);
// console.log("Hi");

class Account {
  constructor(name, initalBalance) {
    this.name = name;
    this.balance = initalBalance;
    // this.bank = "SBI";
  }
  bank = "HDFC";
  deposit(amount) {
    this.balance += amount;
    console.log(`Hi ${this.name}, your balance is ${this.balance}`);
  }
}
function Account2(name, initalBalance) {
  this.name = name;
  this.balance = initalBalance;
  this.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hi ${this.name}, your balance is ${this.balance}`);
  };
}

const john = new Account();
const bod = new Account2();

console.log(john);
console.log(bod);
