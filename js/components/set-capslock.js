import keys from "./keys";
import setKeyboard from "./set-keyboard";

const setCaps = (code, langRu, keyboard, capslock) => {
  if (code === "CapsLock") {
    capslock = !capslock;
    keyboard.innerHTML = "";
    setKeyboard(keys, langRu, capslock, keyboard);
    alert("CAPS!");
  }
};

export default setCaps;
