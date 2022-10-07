import { catsDogs } from './catsDogs.js';
import { fetchRandomDog, fetchRandomCat } from './dataAccess.js';

const container = document.querySelector('#voting');

const render = async () => {
  await fetchRandomDog();
  await fetchRandomCat();

  container.innerHTML = catsDogs();
};

render();
