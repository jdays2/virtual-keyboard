import createE from './create-element';
import { capslock, shift } from './special-event';
import keys from './keys';

if (localStorage.getItem('langRu') === null) localStorage.setItem('langRu', false);

const setButton = (element, root, langRu) => {
  const button = createE('span', 'button');
  button.setAttribute('data-code', element.code);

  switch (element.code) {
    case 'Space':
      button.classList = 'button space';
      break;
    case 'Backspace':
      button.classList = 'button backspace';
      break;
    case 'Enter':
      button.classList = 'button enter';
      break;
    case 'CapsLock':
      button.classList = 'button capslock';
      break;
    case 'ShiftRight':
      button.classList = 'button shift-right';
      break;
    case 'ShiftLeft':
      button.classList = 'button shift-left';
      break;
    default:
      break;
  }

  button.setAttribute('data-code', element.code);

  const checkLang = () => {
    if (langRu) {
      // eslint-disable-next-line no-nested-ternary
      return capslock
        ? element.keyRu
          ? element.keyRu.toUpperCase()
          : element.key
        : element.keyRu
          ? element.keyRu
          : element.key;
    }
    return capslock ? element.key.toUpperCase() : element.key;
  };

  button.innerHTML = checkLang();

  if (shift) {
    button.innerHTML = element?.shift ? element.shift : (checkLang());
  }

  switch (element.code) {
    case 'ArrowLeft':
      button.textContent = '◄';
      break;
    case 'ArrowRight':
      button.textContent = '►';
      break;
    case 'ArrowUp':
      button.textContent = '▲';
      break;
    case 'ArrowDown':
      button.textContent = '▼';
      break;
    default:
      break;
  }

  root.appendChild(button);
};

const setKeyboard = (root) => {
  let langRu = JSON.parse(localStorage.getItem('langRu'));
  keys.forEach((element) => setButton(element, root, langRu));
};

export default setKeyboard;
