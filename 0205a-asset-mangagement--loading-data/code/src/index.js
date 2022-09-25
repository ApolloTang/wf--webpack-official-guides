import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";

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

  console.log('data.xml:', Data);
  console.log('data.csv: ', Notes);

  return element;
}

document.body.appendChild(component());
