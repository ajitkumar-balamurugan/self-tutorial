const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const url = "https://icanhazdadjoke.com";

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const random = await fetch(url, {
      headers: {
        // accept: "text/plain",
        accept: "application/json",
        "User-agent": "Learning app",
      },
    });
    if (random.status === 404) {
      throw new Error("Page does not exist");
    }
    const data = await random.json();
    // const data = await random.text();

    result.textContent = data.joke;
  } catch (error) {
    // console.log(error.message);
    result.textContent = "There was an error";
  }
};
fetchDadJoke();
