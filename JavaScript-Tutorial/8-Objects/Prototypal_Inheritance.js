function Account(name, initalBalance) {
  this.name = name;
  this.balance = initalBalance;
}

const john = new Account("John", 400);
// john.deposit(300);
// john.deposit(100);
Account.prototype.bank = "HDFC";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hi ${this.name}, your balance is ${this.balance}`);
};

console.log(john);
console.log(Account.prototype);
