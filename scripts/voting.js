let dogs = document.getElementById("dog element");
let cats = document.getElementById("cat element");

//class name for if item is selected
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("dog")) {
    itemClicked.classList.add("selected");
  } else if (itemClicked.id.startsWith("cat")) {
    itemClicked.classList.add("selected");
  }
});
//Button that is disabled until item is clicked

//logic function that changes class when item is clicked to selected while changing unclicked item to default class

// export const animalSelection = () => {

// }
