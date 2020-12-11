import{ DOMSelectors} from "./DOM";
//import {listen} from "./search";

DOMSelectors.searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    //const query = `https://api.jikan.moe/v3/search/anime?q=${searchString}`;
    
    init(searchString);
  
    // if ("") {
    //   console.log($userSearch);
    //   userSearch= anime;
    // } else {
    //   userSearch= searchBar.value;
    // }
  });


const init = async function (searchString="") {
  try {
    let userSearch;
    if (searchString==="") {
      userSearch= 'anime';
    } else {
      userSearch = searchString;
    }
    const query = `https://api.jikan.moe/v3/search/anime?q=${userSearch}`;

    const response = await fetch(query);
    const data = await response.json();
    const animeList = data.results;
    console.log(animeList);


    DOMSelectors.animeGrid.innerHTML="";

    animeList.forEach((anime) => {
       //console.log(anime.title)

      DOMSelectors.animeGrid.insertAdjacentHTML("beforeend",

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

