import _ from "lodash";

function component() {
  const element = document.createElement("div");
  window.ee = element;

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
