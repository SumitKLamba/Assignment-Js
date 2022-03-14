const trendingHeight = document.querySelector("#Trending").getBoundingClientRect().height - (window.innerHeight -100);
const popularHeight = document.querySelector('[id = "Most Popular"]').getBoundingClientRect().height;
const viewedHeight = document.querySelector('[id = "Most Viewed"]').getBoundingClientRect().height;
const choiceHeight = document.querySelector('[id = "Your Choice"]').getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (this.scrollY < trendingHeight) {
    document.getElementById("buttonTrending").style.color = "black";
    document.getElementById("buttonMostPopular").style.color = "white";
    document.getElementById("buttonMostViewed").style.color = "white";
    document.getElementById("buttonYourChoice").style.color = "white";
  } else if (this.scrollY < trendingHeight + popularHeight) {
    document.getElementById("buttonTrending").style.color = "white";
    document.getElementById("buttonMostPopular").style.color = "black";
    document.getElementById("buttonMostViewed").style.color = "white";
    document.getElementById("buttonYourChoice").style.color = "white";
  } else if (this.scrollY < (trendingHeight + popularHeight + viewedHeight)) {
    document.getElementById("buttonTrending").style.color = "white";
    document.getElementById("buttonMostPopular").style.color = "white";
    document.getElementById("buttonMostViewed").style.color = "black";
    document.getElementById("buttonYourChoice").style.color = "white";
  } else if (this.scrollY > (trendingHeight + popularHeight + viewedHeight)) {
    document.getElementById("buttonTrending").style.color = "white";
    document.getElementById("buttonMostPopular").style.color = "white";
    document.getElementById("buttonMostViewed").style.color = "white";
    document.getElementById("buttonYourChoice").style.color = "black";
  }
});
