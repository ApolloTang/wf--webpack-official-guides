import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

import toml from './data.toml';
import yaml from './data.yaml';
import json5 from './data.json5';

console.log('data.xml:', Data);
console.log('data.csv: ', Notes);
console.log('data.toml:', toml);
console.log('data.yaml:', yaml);
console.log('data.json5:', json5);

console.log("Icon:", Icon); // Icon: file:///Users/<user>/..../code/dist/23ab872f914dec843d9d.png

function component() {
  const element = document.createElement("div");
  window.ee = element;

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());
