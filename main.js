let index = document.getElementById("index");
let about = document.getElementById("about");
let articles = document.getElementById("articles");

let linkArr = [portfolio2, about, articles];

/* for (let i = 0; i < linkArr.length; i++) {
  if (location.pathname === `/portfolio2/${linkArr[i].id}.html`) {
    linkArr[i].style.color = "red";
  }
} */

if (location.pathname === `/portfolio2`) {
  index.style.color = "red";
}
if (location.pathname === `/portfolio2/about.html`) {
  about.style.color = "red";
}
if (location.pathname === `/portfolio2/articles.html`) {
  articles.style.color = "red";
}
