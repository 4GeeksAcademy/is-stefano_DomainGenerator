/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".es", ".com"];

  function generateDomains(pronoun, adj, noun, dom) {
    let domains = [];

    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let d of dom) {
            domains.push(`${p}${a}${n}${d}`);
          }
        }
      }
    }
    return domains;
  }

  let domainNames = generateDomains(pronoun, adj, noun, dom);
  domainNames.map(domain => {
    document.querySelector("#generador").innerHTML +=
      "<li class='list-group-item'>" + domain + "</li>";
  });
};
