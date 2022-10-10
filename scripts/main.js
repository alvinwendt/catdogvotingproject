import { catsDogs } from "./catsDogs.js";
import { fetchRandomDog, fetchRandomCat } from "./dataAccess.js";
import { displayFeed } from "./feed.js";

const container = document.querySelector("#voting");

const render = async () => {
  await fetchRandomDog();
  await fetchRandomCat();
  displayFeed();
  container.innerHTML = catsDogs();
};

render();
