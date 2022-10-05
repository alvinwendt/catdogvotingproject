const dogAPI = "https://api.thecatapi.com/v1/images";
const catAPI = "";

const applicationState = {
  votes: [],
  randomDog: [],
  randomCat: [],
};

export const fetchRandomDog = async () => {
  const data = await fetch(`${dogAPI}/search`);
  const jsonData = await data.json();
  applicationState.randomDog.push(jsonData);
};
