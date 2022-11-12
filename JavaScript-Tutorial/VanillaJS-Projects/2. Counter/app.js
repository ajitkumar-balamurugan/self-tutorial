let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const cl = e.currentTarget.classList;
    console.log(cl[1]);
    if (cl[1] === "decrease") {
      count--;
    } else if (cl[1] === "increase") {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }
  });
});
