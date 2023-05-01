import createE from "./components/create-element";
import keys from "./components/keys";
import setKeyboard from "./components/set-keyboard";
import specialIvent from "./components/special-event";
import corretHandle from "./components/corret-handle";

const KEYBOARD = createE("div", "root");
const TEXTAREA = createE("textarea", "input");

let langRu = false;
let currentPosition = 0;

document.body.appendChild(KEYBOARD);
document.body.appendChild(TEXTAREA);

setKeyboard(keys, langRu, KEYBOARD);

document.body.addEventListener("mousedown", (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.add("active");

  specialIvent(currentCode, langRu, KEYBOARD, TEXTAREA, currentPosition);

  corretHandle(TEXTAREA, currentCode, button);
});

document.body.addEventListener("mouseup", (event) => {
  isButton(event);

  TEXTAREA.focus();

  const button = document.querySelector(
    `.button[data-code="${event.target.dataset.code}"]`
  );
  button.classList.remove("active");
});

document.body.addEventListener("mouseup", (event) => {
  isButton(event);

  const button = document.querySelector(
    `.button[data-code="${event.target.dataset.code}"]`
  );
  button.classList.remove("active");
});

const isButton = (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;
  return currentCode;
};
