import setKeyboard from "./set-keyboard";

const setLanguage = (langRu, event, keyboard, capslock, keys) => {
  if (event.altKey && event.ctrlKey) {
    langRu = !langRu;
    keyboard.innerHTML = "";
    setKeyboard(keys, langRu, keyboard, capslock);
  }
};

export default setLanguage;
