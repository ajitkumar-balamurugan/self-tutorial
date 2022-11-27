const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const theDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// const theDate = new Date(2022, 10, 27, 18, 00);
// console.log(theDate);

const date = theDate.getDate();
const day = weekdays[theDate.getDay()];
const year = theDate.getFullYear();
const month = months[theDate.getMonth()];
const hr = theDate.getHours();
const mm = theDate.getMinutes();

giveaway.textContent = `Givaway Ends on ${day}, ${date} ${month} ${year}, ${hr}:${mm}`;
function theRemainingTime() {
  const today = new Date().getTime();
  const remainingTime = theDate.getTime() - today;

  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const oneSecond = 1000;

  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor(remainingTime / oneHour) - days * 24;
  const minutes =
    Math.floor(remainingTime / oneMinute) - days * 24 * 60 - hours * 60;
  const seconds =
    Math.floor(remainingTime / oneSecond) -
    days * 24 * 60 * 60 -
    hours * 60 * 60 -
    minutes * 60;

  // console.log(days, hours, minutes, seconds);

  const theValue = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.textContent = format(theValue[index]);
  });
  if (remainingTime < 0) {
    clearInterval(x);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

const x = setInterval(theRemainingTime, 1000);
theRemainingTime();
// console.log(x);
