import { catsDogs } from "./catsDogs.js";
import { fetchRandomDog, fetchRandomCat, fetchAllVotes } from "./dataAccess.js";
import { displayFeed } from "./feed.js";

const container = document.querySelector("#voting");

const render = async () => {
  await fetchRandomDog();
  await fetchRandomCat();
  await fetchAllVotes();
  await displayFeed();

  container.innerHTML = catsDogs();
};

render();
