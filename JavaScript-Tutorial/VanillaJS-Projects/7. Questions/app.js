//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    // console.log(question.classList.toggle(".show-text"));
    // console.log(questions);
    questions.forEach((item) => {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
//   });
// });
