import createE from "./components/create-element";
import setKeyboard from "./components/set-keyboard";
import { specialIvent, shiftOff } from "./components/special-event";
import corretHandle from "./components/corret-handle";
import setLanguage from "./components/set-lang";

const KEYBOARD = createE("div", "root");
const TEXTAREA = createE("textarea", "input");

let currentPosition = 0;

TEXTAREA.placeholder =
  "Поле для ввода текста: \n Для смены раскладки leftCTRL + leftAlt";

document.body.appendChild(KEYBOARD);
document.body.appendChild(TEXTAREA);

setKeyboard(KEYBOARD);

document.body.addEventListener("mousedown", (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.add("active");

  specialIvent(currentCode, KEYBOARD, TEXTAREA, currentPosition);

  corretHandle(TEXTAREA, currentCode, button);
});

document.body.addEventListener("mouseup", (event) => {
  TEXTAREA.focus();
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  TEXTAREA.focus();
  if (currentCode === "ShiftRight" || currentCode === "ShiftLeft") {
    shiftOff(KEYBOARD, TEXTAREA);
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
  specialIvent(currentCode, KEYBOARD, TEXTAREA, currentPosition);

  const button = document.querySelector(`.button[data-code="${event.code}"]`);
  button.classList.add("active");

  corretHandle(TEXTAREA, currentCode, button);
});

document.addEventListener("keyup", (event) => {
  const currentCode = event.code;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.remove("active");

  if (currentCode === "ShiftRight" || currentCode === "ShiftLeft") {
    shiftOff(KEYBOARD);
  }

  setLanguage(event, KEYBOARD);
});
