function loader() {
  const loader = document.querySelector(".preload");

  const emoji = loader.querySelector(".emoji");

  const emojis = [
    "🕐",
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
    "🕛",
    "🕧",
  ];

  const interval = 200;

  const loadEmojis = (arr) => {
    setInterval(() => {
      emoji.innerText = arr[Math.floor(Math.random() * arr.length)];

      //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
  };

  const init = () => {
    loadEmojis(emojis);
  };

  init();
}

function getJoke() {
  loader();
  document.querySelector(".preload").style.display = "block";
  JokeAPI.getJokes({
    jokeType: "single",
    //   category: "Misc",
  })
    .then((r) => r.json())
    .then((data) => {
      updateUI(data);
    });
}
// To update the joke on the UI
function updateUI(jokeData) {
  const $ = (id) => document.getElementById(id);

  $("joke--text").innerHTML = jokeData.joke;
  document.querySelector(".preload").style.display = "none";
}
//   console.log(Object.values(JokeAPI));

