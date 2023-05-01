import setKeyboard from "./set-keyboard";

export let langRu = false;

const setLanguage = (event, keyboard) => {
  if (event.ctrlKey && event.key === "Alt") {
    langRu = !langRu;
    keyboard.innerHTML = "";
    setKeyboard(keyboard);
  }
};

export default setLanguage;
