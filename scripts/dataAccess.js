const dogAPI = "https://api.thedogapi.com/v1/images";
const catAPI = "https://api.thecatapi.com/v1/images";
const dbAPI = "http://localhost:8080";

const applicationState = {
  votes: [],
  randomDog: [],
  randomCat: [],
  selection: [],
  dogVoteCount: 0,
  catVoteCount: 0,
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
  applicationState.votes = jsonData;
};

//function to get copy of applicationState votes
export const getVotes = () => {
  return applicationState.votes.map((x) => ({ ...x }));
};
//function to fetch the number of votes with dogs as animals
export const fetchDogVoteCount = async () => {
  const data = await fetch(`${dbAPI}/votes?animal_like=dog`);
  const jsonData = await data.json();
  applicationState.dogVoteCount = jsonData.length;
};
export const getDogVoteCount = () => {
  return applicationState.dogVoteCount;
};
export const fetchCatVoteCount = async () => {
  const data = await fetch(`${dbAPI}/votes?animal_like=cat`);
  const jsonData = await data.json();
  applicationState.catVoteCount = jsonData.length;
};
export const getCatVoteCount = () => {
  return applicationState.catVoteCount;
};

//---------------------------Submit Votes Section------------------------------

// Function to add (POST) vote obj to API here.
export const postVote = async (vote) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vote),
  };
  //const mainContainer = document.querySelector('#container');
  const response = await fetch(`${API}/votes`, fetchOptions);
  const responseJson = await response.json();
  // state changed
  document.dispatchEvent(new CustomEvent('stateChanged'));
  return responseJson;
};
