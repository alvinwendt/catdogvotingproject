import { catsDogs, updateScoreBoard } from "./catsDogs.js";
import {
  fetchRandomDog,
  fetchRandomCat,
  fetchCatVoteCount,
  fetchDogVoteCount,
} from "./dataAccess.js";
import { displayFeed } from "./feed.js";

const container = document.querySelector("#voting");

const render = async () => {
  await fetchRandomDog();
  await fetchRandomCat();
  await fetchDogVoteCount();
  await fetchCatVoteCount();
  await displayFeed();
  updateScoreBoard();
  container.innerHTML = catsDogs();
};

render();
