const ram = {
  firstName: "rama",
  lastName: "chandran",
  fullname() {
    console.log(this);
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};
ram.fullname();

function showThis() {
  console.log(this);
}
showThis();

const date = new Date();
console.log(date.constructor);
