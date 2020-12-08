import{ DOMSelectors} from "./DOM";
//import {listen} from "./search";

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const query = `https://api.jikan.moe/v3/search/anime?q=${searchString}`;
    
    init(searchString="");

  
    if ("") {
      console.log($userSearch);
      userSearch= anime;
    } else {
      userSearch= searchBar.value;
    }
  });





const init = async function () {
  try {
    const query = `https://api.jikan.moe/v3/search/anime?q=${searchString}`;
    const response = await fetch(query);
    const data = await response.json();
    const animeList = data.results;
    console.log(animeList);

    animeList.forEach((anime) => {
       //console.log(anime.title)

      DOMSelectors.animeGrid.insertAdjacentHTML("beforebegin",

      `
      <div class="movie-card">
      <div class="movie-card-front">
        <img
          src="${anime.image_url}"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${anime.title}</h3>
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



