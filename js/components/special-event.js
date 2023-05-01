import keys from "./keys";
import setKeyboard from "./set-keyboard";

let capslock = false;

const specialIvent = (key, langRu, keyboard, textarea, currentPosition) => {
  if (key === "CapsLock") {
    currentPosition = textarea.selectionStart;
    capslock = !capslock;
    keyboard.innerHTML = "";
    setKeyboard(keys, langRu, keyboard, capslock);
  } else if (key === "Backspace") {
    textarea.setRangeText(
      "",
      textarea.selectionStart - 1,
      textarea.selectionStart,
      "end"
    );
  } else if (key === "Delete") {
    textarea.setRangeText(
      "",
      textarea.selectionStart,
      textarea.selectionStart + 1,
      "end"
    );
  } else if (key === "Enter") {
    textarea.textContent += "\n";
    currentPosition = textarea.selectionStart;
  } else if (key === "ArrowLeft") {
    currentPosition = textarea.selectionStart;
    if (currentPosition > 0) {
      textarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
      currentPosition = textarea.selectionStart;
    }
  } else if (key === "ArrowRight") {
    currentPosition = textarea.selectionStart;
    if (currentPosition < textarea.value.length) {
      textarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
      currentPosition = textarea.selectionStart;
    }
  } else if (key === "Tab") {
    textarea.value += "    ";
  } else {
    currentPosition += 1;
  }
};

export default specialIvent;
