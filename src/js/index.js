import{ DOMSelectors} from "./DOM";
//import {listen} from "./search";


const query = `https://api.jikan.moe/v3/search/anime?q=anime`;
console.log (query);


const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    const animeList = data.results;
    console.log(animeList);

    animeList.forEach((anime) => {
       //console.log(anime.title)

      DOMSelectors.grid.insertAdjacentHTML("beforebegin",

      `
      <div class="anime-card">
      <div class="anime-card-front">
        <img
          src="${anime.image_url}"
          alt=""
          class="poster"
        />
      </div>
      <div class="anime-card-back">
        <h3 class="anime-card-header">${anime.title}</h3>
        <div class="synopsis-box">
        <p class="synopsis">${anime.synopsis}</p>
      </div>
        <div class="score-box">
          <p class="user-score">Community Score: ${anime.score}</p>
        </div>
        <div class="release-box">
          <p class="release-date">Released: ${anime.start_date}</p>
        </div>
      </div>
    </div>`
      )
    }

    )

  } catch (error) {
    console.log(error);
  }
};

init();


