import { fetchRandomDog } from "./dataAccess.js";
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

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("dog")) {
    itemClicked.classList.add("selected");
    let cat = document.getElementById("cat--APIIDGOESHERE");
    cat.classList.remove("selected");
  } else if (itemClicked.id.startsWith("cat")) {
    itemClicked.classList.add("selected");
    let dog = document.getElementById("dog--APIIDGOESHERE");
    dog.classList.remove("selected");
  }
});