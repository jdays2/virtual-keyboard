import keys from "./keys";
import setKeyboard from "./set-keyboard";

export const specialIvent = (
  key,
  langRu,
  keyboard,
  textarea,
  currentPosition,
  capslock
) => {
  switch (key) {
    case "CapsLock":
      capslock = !capslock;
      keyboard.innerHTML = "";
      setKeyboard(keys, langRu, keyboard, capslock);
      break;
    case "ShiftRight":
    case "ShiftLeft":
      capslock = !capslock;
      keyboard.innerHTML = "";
      setKeyboard(keys, langRu, keyboard, capslock);
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
      textarea.textContent += "\n";
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

export const shiftOff = (keys, langRu, keyboard, capslock) => {
  if (capslock) {
    capslock = false;
    keyboard.innerHTML = "";
    setKeyboard(keys, langRu, keyboard, capslock);
  }
};
