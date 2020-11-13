import { films } from "./films";
const DOMSelectors = {
  grid: document.querySelector(".movie-grid"),
};

const query = `https://ghibliapi.herokuapp.com/films`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
} catch (error) {
    console.log(error);
  }
};
init();
