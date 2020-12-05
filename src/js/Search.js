import{ DOMSelectors} from "./DOM";

let pageNumber = 1;
//function for changed page?

const listen= function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    const nextPage = function () {
      //next.addeventlistener
      DOMSelectors.btnNext.addEventListener("click", function () {
        //update page variable
        pageNumber++;
        //re-run query()
        searchQuery(pageNumber);
      });
    };
    const previousPage = function () {
      //next.addeventlistener
      DOMSelectors.btnPrev.addEventListener("click", function () {
        //update page variable
        pageNumber--;
        //re-run query()
        searchQuery(pageNumber);
      });
    };
    previousPage();
    nextPage();
    e.preventDefault();

    
});
searchQuery(); 
    
};

listen(); 

export {listen};