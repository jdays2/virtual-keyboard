import createE from "./components/create-element";
import keys from "./components/keys";
import setKeyboard from "./components/set-keyboard";
import setCaps from "./components/set-capslock";

const KEYBOARD = createE("div", "root");
// const TEXTAREA = createElement("textarea", "input");

let langRu = false;
let capslock = false;
// const exceptions = [
//   "Backspace",
//   "Enter",
//   "ShiftRight",
//   "ShiftLeft",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowUp",
//   "ArrowDown",
//   "AltLeft",
//   "AltRight",
//   "ControlLeft",
//   "ControlRight",
//   "Delete",
//   "CapsLock",
//   "Tab",
//   "MetaLeft",
// ];

document.body.appendChild(KEYBOARD);

setKeyboard(keys, langRu, capslock, KEYBOARD);

document.body.addEventListener("mousedown", (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;
  setCaps(currentCode, langRu, KEYBOARD, capslock);
});
