const dogAPI = 'https://api.thedogapi.com/v1/images';
const catAPI = 'https://api.thecatapi.com/v1/images';
const dbAPI = 'http://localhost:8080';

const applicationState = {
  votes: [],
  randomDog: [],
  randomCat: [],
  selection: [],
};

//---------------------------TEST SECTION------------------------------------

//function to test output of fetch calls
// const test = async () => {
//   await fetchRandomCat();
//   await fetchRandomDog();
//   await fetchVotes();
//   console.log(applicationState);
//   console.log(getVotes());
//   console.log(getRandomDog());
//   console.log(getRandomCat());
// };
// test();

//------------------------RANDOM IMAGES SECTION------------------------------

//function to fetch a Random Dog from API every page load
export const fetchRandomDog = async () => {
  const data = await fetch(`${dogAPI}/search`);
  const jsonData = await data.json();
  applicationState.randomDog = jsonData;
};

//function to fetch a Random Cat from API every page load
export const fetchRandomCat = async () => {
  const data = await fetch(`${catAPI}/search`);
  const jsonData = await data.json();
  applicationState.randomCat = jsonData;
};

//function to get copy of applicationState Cat
export const getRandomDog = () => {
  return applicationState.randomDog.map((x) => ({ ...x }));
};

//function to get copy of applicationState Dog
export const getRandomCat = () => {
  return applicationState.randomCat.map((x) => ({ ...x }));
};

//---------------------------VOTES SECTION--------------------------------------

//function to fetch 10 most recent votes
export const fetchVotes = async () => {
  const data = await fetch(`${dbAPI}/votes?_sort=dateTime&_order=desc&_page=1`);
  const jsonData = await data.json();
  applicationState.votes.push(jsonData);
};

//function to get copy of applicationState votes
export const getVotes = () => {
  return applicationState.votes.map((x) => ({ ...x }));
};

//---------------------------Submit Votes Section------------------------------

// Function to add (POST) vote obj to API here.

//
