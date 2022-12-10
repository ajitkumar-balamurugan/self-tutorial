// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.open("GET", "./sample.txt");
// xhr.send();
fetch("./sample.json")
  .then((response) => {
    const t = response.json();
    console.log(response);
    console.log(t);
    return t;
  })
  .then((data) => console.log(data));
