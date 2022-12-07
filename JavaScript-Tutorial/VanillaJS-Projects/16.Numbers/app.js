const spans = [...document.querySelectorAll(".number")];
const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 500);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};
spans.forEach((item) => {
  updateCount(item);
});
