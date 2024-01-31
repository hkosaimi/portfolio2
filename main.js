let index = document.getElementById("index");
let about = document.getElementById("about");
let articles = document.getElementById("articles");

let linkArr = [index, about, articles];

for (let i = 0; i < linkArr.length; i++) {
  if (location.pathname === `/${linkArr[i].id}.html`) {
    linkArr[i].style.color = "red";
  }
}
console.log(location.pathname);
console.log(linkArr[2].id);
