import createE from "./create-element";

const setKeyboard = (data, langRu, capslock, root) => {
  data.forEach((element) => setButton(element, langRu, capslock, root));
};

const setButton = (data, langRu, caps, root) => {
  const button = createE("span", "button");
  button.setAttribute("data-code", data.code);

  switch (data.code) {
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

  button.textContent =
    langRu && data.keyRu
      ? caps
        ? data.keyRu.toUpperCase()
        : data.keyRu
      : caps
      ? data.key.toUpperCase()
      : data.key;

  switch (data.code) {
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
