import { fetchRandomDog } from "./dataAccess.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("dog")) {
    itemClicked.classList.add("selected");
    document.querySelector(`[id^="cat"]`).classList.remove("selected");
  } else if (itemClicked.id.startsWith("cat")) {
    itemClicked.classList.add("selected");
    document.querySelector(`[id^="dog"]`).classList.remove("selected");
  }
});
