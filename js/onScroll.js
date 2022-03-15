//for changing the header buttons texts on scrolling

//getting the heights of the elements for conditioning
let trendingHeight = document.querySelector("#Trending").getBoundingClientRect().height;
let popularHeight = document.querySelector('[id = "Most Popular"]').getBoundingClientRect().height;
let viewedHeight = document.querySelector('[id = "Most Viewed"]').getBoundingClientRect().height;
let choiceHeight = document.querySelector('[id = "Your Choice"]').getBoundingClientRect().height;

//function to change the buttons color according to the element on screen
const scrollFunction = () => {
  window.addEventListener("scroll", () => {
    if (this.scrollY < trendingHeight) {
      document.getElementById("buttonTrending").style.color = "black";
      document.getElementById("buttonMostPopular").style.color = "white";
      document.getElementById("buttonMostViewed").style.color = "white";
      document.getElementById("buttonYourChoice").style.color = "white";
    } else if (this.scrollY < trendingHeight + popularHeight - 1) {
      // did -1 to make most viewed black on click of most viewed else most popular gets the black color
      document.getElementById("buttonTrending").style.color = "white";
      document.getElementById("buttonMostPopular").style.color = "black";
      document.getElementById("buttonMostViewed").style.color = "white";
      document.getElementById("buttonYourChoice").style.color = "white";
    } else if (this.scrollY < trendingHeight + popularHeight + viewedHeight - 1) {
      document.getElementById("buttonTrending").style.color = "white";
      document.getElementById("buttonMostPopular").style.color = "white";
      document.getElementById("buttonMostViewed").style.color = "black";
      document.getElementById("buttonYourChoice").style.color = "white";
    } else if (this.scrollY > trendingHeight + popularHeight + viewedHeight - 1) {
      document.getElementById("buttonTrending").style.color = "white";
      document.getElementById("buttonMostPopular").style.color = "white";
      document.getElementById("buttonMostViewed").style.color = "white";
      document.getElementById("buttonYourChoice").style.color = "black";
    }
  });
};

scrollFunction();

//resizing the heights and calling the scoll function again if the size of the screen changes
//like if someone rotates the screen
window.addEventListener("resize", () => {
  trendingHeight = document.querySelector("#Trending").getBoundingClientRect().height;
  popularHeight = document.querySelector('[id = "Most Popular"]').getBoundingClientRect().height;
  viewedHeight = document.querySelector('[id = "Most Viewed"]').getBoundingClientRect().height;
  choiceHeight = document.querySelector('[id = "Your Choice"]').getBoundingClientRect().height;

  scrollFunction();
});
