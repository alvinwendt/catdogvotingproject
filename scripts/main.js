import { fetchRandomDog } from "./dataAccess.js";

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
