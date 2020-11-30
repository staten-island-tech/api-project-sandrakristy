import { genres } from "./genre";
import{ DOMSelectors} from "./DOM";
//import "regenerator-runtime/runtime";


const query = ` https://jikan.moe/`;


const NextPage = async function() {
    DOMSelectors.nextButton.addEventListener("click", function (e) {
      DOMSelectors.grid.innerHTML = "";
      offset += 30;
      defaultPage();
    });
    DOMSelectors.previousButton.addEventListener("click", function (e) {
      if (offset == 0) {
        offset = 0;
      } else {
        DOMSelectors.grid.innerHTML = "";
        offset -= 30;
        defaultPage();
      }
    });
    DOMSelectors.nextButtonB.addEventListener("click", function (e) {
      DOMSelectors.grid.innerHTML = "";
      offset += 30;
      defaultPage();
    });
    DOMSelectors.previousButtonB.addEventListener("click", function (e) {
      if (offset == 0) {
        offset = 0;
      } else {
        DOMSelectors.grid.innerHTML = "";
        offset -= 30;
        defaultPage();
      }
    });
}

const init = async function () {
    try {
      const response = await fetch(query);
      const data = await response.json();

    //const searchBar = document.getElementById("searchBar");
    //console.log(searchBar);
    //searchBar.addEventListener("keyup", function() {
     // console.log("a");
  
      //const searchString = e.target.value; //
      
    //});

  
      data.results.forEach((movie) => {
        let genreArr = [];
        const addGenre = function () {
          genres.forEach((element) => {
            if (movie.genre_ids.includes(element.id)) {
              genreArr.push(element.name);
              return genreArr;
            }
          });
        };
        addGenre();
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="movie-card">
        <div class="movie-card-front">
          <img
            src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
            alt=""
            class="poster"
          />
        </div>
        <div class="movie-card-back">
          <h3 class="movie-card-header">${movie.original_title}</h3>
          <div class="score-box">
            <p class="user-score">Community Score</p>
            <p class="user-score">${movie.vote_average}</p>
          </div>
          <div class="release-box">
            <p class="release-date">Released</p>
            <p class="release-date">${movie.release_date}</p>
          </div>
          <div class="movie-genres">
            <div>${genreArr}</div>
          </div>
        </div>
      </div>`
        );
      });
    } catch (error) {
      console.log(error);
    }
};
init();  
   