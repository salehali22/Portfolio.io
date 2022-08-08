"use strict";

let btnOpen = document.querySelector(".other-icon a");
// console.log(btnOpen);
let socials = document.querySelector(".other-img");
console.log(socials);

const open = (e) => {
  e.preventDefault();
  socials.style.display = "block";
};

btnOpen.addEventListener("click", open);
