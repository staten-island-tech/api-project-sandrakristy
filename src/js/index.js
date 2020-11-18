import{ DOMSelectors} from "./DOM";
//import "regenerator-runtime/runtime";


const query = ` https://jikan.docs.apiary.io/`;
const query = ` https://jikan.docs.apiary.io/#reference/0/search`;
const fetch = require('cross-fetch')
const URL = require('url').URL

module.exports = class Request {
    constructor(){
        this.baseURL = "https://api.jikan.moe/v3"
    }
    
    async send(args, params) {
        var res = await fetch(this.createUrl(args, params))
        var data = await res.json()
        if (res.status !== 200) throw `Response: ${res.status}`
        else return data
    }

    createUrl (args, params) {
        const url = new URL(this.baseURL)
        url.pathname += `/${args.filter(a => a).join("/")}`
            for (let p in params) {
                url.searchParams.set(p, params[p])
            }
        return url.href
    }
}
const Jikan = require('jikan-node');
const mal = new Jikan();

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data)
    const searchBar = document.getElementById("searchBar");
    console.log(searchBar);
    searchBar.addEventListener("keyup", function() {
      console.log("a");
  
      //const searchString = e.target.value; //
    });
     
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="anime-card">
      <div class="anime-card-front">
       
      </div>
      <div class="anime-card-back">
        <h3 class="anime-card-header">${anime.original_title}</h3>
        <div class="score-box">
          <p class="user-score">Community Score</p>
          <p class="user-score">${anime.vote_average}</p>
        </div>
        <div class="release-box">
          <p class="release-date">Released</p>
          <p class="release-date">${anime.release_date}</p>
        </div>
        <div class="anime-genres">
          <div>${genreArr}</div>
        </div>
      </div>
    </div>`
    );
    
  } catch (error) {
    console.log(error);
  }
};
init();