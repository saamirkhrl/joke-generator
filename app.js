let genButton = document.getElementById("jokeButton");
let jokeText = document.getElementById("jokeText");
const apiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode?type=twopart";

function genJoke() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error!");
      }
      return response.json();
    })
    .then((data) => {
      if (data.type == "single") {
        jokeText.innerHTML = data.joke;
      } else {
        jokeText.innerHTML = data.setup + "<br> <br>" + data.delivery;
      }
      console.log(data);
    });
}
