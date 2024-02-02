let home = document.getElementById("home");
let contact = document.getElementById("contact");
let articles = document.getElementById("articles");

/* let linkArr = [portfolio2, about, articles];
 */
/* for (let i = 0; i < linkArr.length; i++) {
  if (location.pathname === `/portfolio2/${linkArr[i].id}.html`) {
    linkArr[i].style.color = "red";
  }
} */

if (location.pathname === `/portfolio2/`) {
  home.style.color = "#eb4a4a";
}
if (location.pathname === `/portfolio2/contact.html`) {
  contact.style.color = "#eb4a4a";
}
if (location.pathname === `/portfolio2/articles.html`) {
  articles.style.color = "#eb4a4a";
}

const textAnim = new SplitType(".text_anim", { types: "lines,  words" });

// gsapAnimation(document.querySelectorAll('.name .line .word'));
// gsapAnimation(document.querySelectorAll('.abt-p .line .word'));

gsap.to(document.querySelectorAll(".name .line .word"), {
  // yes, we can add it to an entire timeline!
  y: 0,
  stagger: 0.05,
  delay: 0.5,
  duration: 1,
  ease: "power4.out",
});
