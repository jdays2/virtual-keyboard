import setKeyboard from './set-keyboard';

let langRu = JSON.parse(localStorage.getItem('langRu'));

const setLanguage = (event, KEYBOARD) => {
  const keyboard = KEYBOARD;
  if (event.ctrlKey && event.key === 'Alt') {
    langRu = !langRu;
    localStorage.setItem('langRu', langRu);
    keyboard.innerHTML = '';
    setKeyboard(keyboard);
  }
  // else {
  //   langRu = JSON.parse(localStorage.getItem('langRu'))
  // }
};

export default setLanguage;
