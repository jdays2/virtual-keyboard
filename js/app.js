import createE from "./components/create-element";
import keys from "./components/keys";
import setKeyboard from "./components/set-keyboard";
import { specialIvent, shiftOff } from "./components/special-event";
import corretHandle from "./components/corret-handle";
import setLanguage from "./components/set-lang";

const KEYBOARD = createE("div", "root");
const TEXTAREA = createE("textarea", "input");

let langRu = false;
let currentPosition = 0;
let capslock = false;

document.body.appendChild(KEYBOARD);
document.body.appendChild(TEXTAREA);

setKeyboard(keys, langRu, KEYBOARD); // вызываем функцию только один раз при загрузке страницы

document.body.addEventListener("mousedown", (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.add("active");

  specialIvent(currentCode, langRu, KEYBOARD, TEXTAREA, currentPosition);

  corretHandle(TEXTAREA, currentCode, button);
});

document.body.addEventListener("mouseup", (event) => {
  TEXTAREA.focus();
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  TEXTAREA.focus();
  if (currentCode === "ShiftRight" || currentCode === "ShiftLeft") {
    shiftOff(keys, langRu, KEYBOARD, TEXTAREA);
  }
  const button = document.querySelector(
    `.button[data-code="${event.target.dataset.code}"]`
  );
  button.classList.remove("active");
});

document.addEventListener("keydown", (event) => {
  const currentCode = event.code;

  document.activeElement.blur();
  TEXTAREA.focus();
  event.preventDefault();

  specialIvent(currentCode, langRu, KEYBOARD, TEXTAREA, currentPosition);

  const button = document.querySelector(`.button[data-code="${event.code}"]`);
  button.classList.add("active");

  corretHandle(TEXTAREA, currentCode, button);

  setLanguage(langRu, event, KEYBOARD, capslock, keys);
});

document.addEventListener("keyup", (event) => {
  const currentCode = event.code;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.remove("active");

  if (currentCode === "ShiftRight" || currentCode === "ShiftLeft") {
    shiftOff(keys, langRu, KEYBOARD, TEXTAREA);
  }
});
