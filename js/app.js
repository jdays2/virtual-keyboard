import createE from './components/create-element';
import setKeyboard from './components/set-keyboard';
import { specialIvent, shiftOff } from './components/special-event';
import corretHandle from './components/corret-handle';
import setLanguage from './components/set-lang';

const KEYBOARD = createE('div', 'root');
const TEXTAREA = createE('textarea', 'input');

let currentPosition = 0;

TEXTAREA.placeholder = 'Поле для ввода текста: \n Для смены раскладки leftCTRL + leftAlt';

document.body.appendChild(KEYBOARD);
document.body.appendChild(TEXTAREA);

setKeyboard(KEYBOARD);

document.body.addEventListener('mousedown', (event) => {
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.add('active');

  specialIvent(currentCode, KEYBOARD, TEXTAREA, currentPosition);

  corretHandle(TEXTAREA, currentCode, button);
});

document.body.addEventListener('mouseup', (event) => {
  TEXTAREA.focus();
  const currentCode = event.target.dataset.code;
  if (!currentCode) return;

  TEXTAREA.focus();
  if (currentCode === 'ShiftRight' || currentCode === 'ShiftLeft') {
    shiftOff(KEYBOARD, TEXTAREA);
  }
  const button = document.querySelector(
    `.button[data-code="${event.target.dataset.code}"]`
  );
  button.classList.remove('active');
});

document.addEventListener('keydown', (event) => {
  const currentCode = event.code;

  document.activeElement.blur();
  TEXTAREA.focus();
  event.preventDefault();
  specialIvent(currentCode, KEYBOARD, TEXTAREA, currentPosition);

  const button = document.querySelector(`.button[data-code="${event.code}"]`);
  button.classList.add('active');

  corretHandle(TEXTAREA, currentCode, button);
});

document.addEventListener('keyup', (event) => {
  const currentCode = event.code;

  const button = document.querySelector(`.button[data-code="${currentCode}"]`);
  button.classList.remove('active');

  if (currentCode === 'ShiftRight' || currentCode === 'ShiftLeft') {
    shiftOff(KEYBOARD);
  }

  setLanguage(event, KEYBOARD);
});

// eslint-disable-next-line no-alert
alert('Добро пожаловать!🙃\n Самооценка и другая информация в консоли. 🤔');

const str = 'Самооценка 110/110 Все пункты выполненны, язык сменяемый, анимации работают, клавиши выполняют свои функции. Пожалуйста, не оценивайте работу анонимно, всякое бывает и увсех может запрятаться какая-то ошибка или недопонятая деталь. Всегда рад поправить то в чем ошибся или обсудить обмениваясь опытом. Спасибо за ваше время!';
const style = [
  'padding: 8px;',
  'background: black;',
  'color: #33ff33;',
  'font-family: monospace;',
  'font-size: 12px;',
  'text-shadow: 0 0 10px #33ff33, 0 0 30px #33ff33, 0 0 40px #33ff33, 0 0 50px #33ff33, 0 0 75px #33ff33;'
].join('');

// eslint-disable-next-line no-console
console.log('%c%s', style, str);
