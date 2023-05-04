import setKeyboard from "./set-keyboard";

export let capslock = false;
export let shift = false

export const specialIvent = (code, keyboard, textarea, currentPosition) => {
  switch (code) {
    case "CapsLock":
      capslock = !capslock;
      keyboard.innerHTML = "";
      setKeyboard(keyboard);
      break;
    case "ShiftRight":
    case "ShiftLeft":
      shift = !shift;
      capslock = !capslock;
      keyboard.innerHTML = "";
      setKeyboard(keyboard);
      break;
    case "Backspace":
      if(textarea.value){
        textarea.setRangeText(
          "",
          textarea.selectionStart,
          textarea.selectionStart + 1,
          "end"
        );
      }
      break;
    case "Delete":
      if (textarea.value) {
        textarea.setRangeText(
          "",
          textarea.selectionStart,
          textarea.selectionStart + 1,
          "end"
        );
      }
      break;
    case "Enter":
      let value = textarea.value;
      let selectionStart = textarea.selectionStart;
      let beforeCursor = value.substring(0, selectionStart);
      let afterCursor = value.substring(selectionStart, value.length);
      textarea.value = beforeCursor + "\n" + afterCursor;
      textarea.selectionStart = selectionStart + 1;
      textarea.selectionEnd = selectionStart + 1;
      break;
    case "ArrowLeft":
      currentPosition = textarea.selectionStart;
      if (currentPosition > 0) {
        textarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
        currentPosition = textarea.selectionStart;
      }
      break;
    case "ArrowRight":
      currentPosition = textarea.selectionStart;
      if (currentPosition < textarea.value.length) {
        textarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
        currentPosition = textarea.selectionStart;
      }
      break;
      case "Tab":
        const valueTwo = textarea.value;
        const selectionStartTwo = textarea.selectionStart;
        const beforeCursorTwo = valueTwo.substring(0, selectionStartTwo);
        const afterCursorTwo = valueTwo.substring(selectionStartTwo, valueTwo.length);
        textarea.value = beforeCursorTwo + "    " + afterCursorTwo;
        textarea.selectionStart = selectionStartTwo + 4;
        textarea.selectionEnd = selectionStartTwo + 4;
        break;
    default:
      currentPosition += 1;
  }
};

export const shiftOff = (keyboard) => {
  if (shift) {
    capslock = !capslock;
    shift = !shift;
    keyboard.innerHTML = "";
    setKeyboard(keyboard);
  }
};
