/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// const { NoEmitOnErrorsPlugin } = require("webpack");

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];

pronoun.forEach(word => {
  adj.forEach(adjetive => {
    noun.forEach(nouns => {
      domain.forEach(domains => {
        console.log(word + adjetive + nouns + domains);
      });
    });
  });
});
