import setKeyboard from './set-keyboard';

export let capslock = false;
export let shift = false;

export const specialIvent = (code, KEYBOARD, TEXTAREA, currentPos) => {
  const bord = KEYBOARD;
  const textarea = TEXTAREA;
  let textareaValue = textarea.value;
  let currentPosition = currentPos;
  let selectionStart = textarea.selectionStart;
  let beforeCursor = textareaValue.substring(0, selectionStart);
  let afterCursor = textareaValue.substring(selectionStart, textareaValue.length);

  switch (code) {
    case 'CapsLock':
      capslock = !capslock;
      bord.innerHTML = '';
      setKeyboard(bord);
      break;
    case 'ShiftRight':
    case 'ShiftLeft':
      shift = !shift;
      capslock = !capslock;
      bord.innerHTML = '';
      setKeyboard(bord);
      break;
    case 'Backspace':
      if (textarea.value) {
        textarea.setRangeText('', selectionStart - 1, selectionStart, 'end');
        selectionStart -= 1;
        beforeCursor = textareaValue.substring(0, selectionStart);
        afterCursor = textareaValue.substring(selectionStart, textareaValue.length);
      }
      break;
    case 'Delete':
      if (textarea.value) {
        textarea.setRangeText(
          '',
          textarea.selectionStart,
          textarea.selectionStart + 1,
          'end'
        );
        beforeCursor = textareaValue.substring(0, selectionStart);
        afterCursor = textareaValue.substring(selectionStart, textareaValue.length);
      }
      break;
    case 'Enter':
      textareaValue = beforeCursor + '\n' + afterCursor;
      textarea.setRangeText('\n', selectionStart, selectionStart, 'end');
      selectionStart += 1;
      beforeCursor = textareaValue.substring(0, selectionStart);
      afterCursor = textareaValue.substring(selectionStart, textareaValue.length);
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionStart;
      break;
    case 'ArrowLeft':
      currentPosition = textarea.selectionStart;
      if (currentPosition > 0) {
        textarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
        currentPosition = textarea.selectionStart;
      }
      break;
    case 'ArrowRight':
      currentPosition = textarea.selectionStart;
      if (currentPosition < textarea.value.length) {
        textarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
        currentPosition = textarea.selectionStart;
      }
      break;
    case 'Tab':

      textarea.value = beforeCursor + '    ' + afterCursor;
      textarea.selectionStart = selectionStart + 4;
      textarea.selectionEnd = selectionStart + 4;
      break;
    default:
      currentPosition += 1;
  }
};

export const shiftOff = (keyboard) => {
  const keyboardElement = keyboard;
  if (shift) {
    capslock = !capslock;
    shift = !shift;
    keyboardElement.innerHTML = '';
    setKeyboard(keyboard);
  }
};
