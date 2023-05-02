import setKeyboard from "./set-keyboard";

let langRu = JSON.parse(localStorage.getItem('langRu'))

const setLanguage = (event, keyboard) => {
  if (event.ctrlKey && event.key === "Alt") {
    langRu = !langRu;
    localStorage.setItem('langRu', langRu);
    keyboard.innerHTML = "";
    setKeyboard(keyboard);
  }
  // else {
  //   langRu = JSON.parse(localStorage.getItem('langRu'))
  // }
};

export default setLanguage;