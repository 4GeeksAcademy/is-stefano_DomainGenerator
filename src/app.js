/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here

  function generateDomains() {
    let domainResult = [];
    for (let p of pronoun) {
      for (let a of adjetive) {
        for (let n of noun) {
          for (let d of domain) {
            domainResult.push(`${p}${a}${n}${d}`);
          }
        }
      }
    }
    return domainResult;
  }

  let pronoun = ["the", "our"];
  let adjetive = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".es", ".com"];
  let domainNames = generateDomains();
  domainNames.map(domain => {
    document.querySelector("#generador").innerHTML +=
      "<li class='list-group-item'>" + domain + "</li>";
  });
};
