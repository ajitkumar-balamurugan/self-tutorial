function cb(name, time) {
  return `Good ${time} ${name}`;
}

function greet(name, cb) {
  let myName = "Ajit";
  console.log(`${cb(name, "morning")}, my name is ${myName}`);
}

greet("Peter", cb);
