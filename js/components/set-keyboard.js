import createE from "./create-element";
import { capslock } from "./special-event";
import keys from "./keys";
import { langRu } from "./set-lang";

const setKeyboard = (root) => {
  keys.forEach((element) => setButton(element, root));
};

const setButton = (element, root) => {
  const button = createE("span", "button");
  button.setAttribute("data-code", element.code);

  switch (element.code) {
    case "Space":
      button.classList = "button space";
      break;
    case "Backspace":
      button.classList = "button backspace";
      break;
    case "Enter":
      button.classList = "button enter";
      break;
    case "CapsLock":
      button.classList = "button capslock";
      break;
    case "ShiftRight":
      button.classList = "button shift-right";
      break;
    case "ShiftLeft":
      button.classList = "button shift-left";
      break;
    default:
      break;
  }

  button.setAttribute("data-code", element.code);

  switch (langRu) {
    case true:
      button.innerHTML = capslock
        ? element.keyRu
          ? element.keyRu.toUpperCase()
          : element.key
        : element.keyRu
        ? element.keyRu
        : element.key;
      break;
    default:
      button.innerHTML = capslock ? element.key.toUpperCase() : element.key;
      break;
  }

  switch (element.code) {
    case "ArrowLeft":
      button.textContent = "◄";
      break;
    case "ArrowRight":
      button.textContent = "►";
      break;
    case "ArrowUp":
      button.textContent = "▲";
      break;
    case "ArrowDown":
      button.textContent = "▼";
      break;
    default:
      break;
  }

  root.appendChild(button);
};

export default setKeyboard;
