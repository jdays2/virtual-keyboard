import setKeyboard from "./set-keyboard";

export let capslock = false;

export const specialIvent = (code, keyboard, textarea, currentPosition) => {
  switch (code) {
    case "CapsLock":
      capslock = !capslock;

      keyboard.innerHTML = "";
      setKeyboard(keyboard);
      break;
    case "ShiftRight":
    case "ShiftLeft":
      capslock = !capslock;
      keyboard.innerHTML = "";
      setKeyboard(keyboard);
      break;
    case "Backspace":
      textarea.setRangeText(
        "",
        textarea.selectionStart - 1,
        textarea.selectionStart,
        "end"
      );
      break;
    case "Delete":
      textarea.setRangeText(
        "",
        textarea.selectionStart,
        textarea.selectionStart + 1,
        "end"
      );
      break;
    case "Enter":
      textarea.value += "\n";
      currentPosition = textarea.selectionStart;
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
      textarea.value += "    ";
      break;
    default:
      currentPosition += 1;
  }
};

export const shiftOff = (keyboard) => {
  if (capslock) {
    capslock = !capslock;
    keyboard.innerHTML = "";
    setKeyboard(keyboard);
  }
};
