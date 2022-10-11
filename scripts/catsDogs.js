import { getRandomDog, getRandomCat } from './dataAccess.js';

export const catsDogs = () => {
  const randomDog = getRandomDog();
  const randomCat = getRandomCat();

  return `
  
<section class="voting-header">
            <h1>Dogs VS Cats!</h1>
            <p>Select which picture is the most cutest and most perfect! Your chosen selection will follow you to the
                next epic battle of cuteness. See how many rounds you can go! </p>
        </section>
        <section class="voting-imgs">
            <div class="imgContainer"><img id= "dog--${randomDog[0].id}" class="dog img" src="${randomDog[0].url}" alt="Dog."></div>
            <div class="imgContainer"><img id="cat--${randomCat[0].id}" class="cat img" src="${randomCat[0].url}" alt="Cat."></div>
        </section>
        <section class="vote-options">
            <button id="submitBtn">Submit Your Vote</button>
        </section>
        `;
};
