const exceptions = [
  "Backspace",
  "Enter",
  "ShiftRight",
  "ShiftLeft",
  "ArrowLeft",
  "ArrowRight",
  "AltLeft",
  "AltRight",
  "ControlLeft",
  "ControlRight",
  "Delete",
  "CapsLock",
  "Tab",
  "MetaLeft",
];

const corretHandle = (TEXTAREA, currentCode, button) => {
  if (exceptions.includes(currentCode)) return;

  const value = TEXTAREA.value;
  const selectionStart = TEXTAREA.selectionStart;
  const selectionEnd = TEXTAREA.selectionEnd;
  const newValue =
    value.substring(0, selectionStart) +
    button.innerHTML +
    value.substring(selectionEnd);
  const newSelectionStart = selectionStart + button.innerHTML.length;

  TEXTAREA.value = newValue;
  TEXTAREA.setSelectionRange(newSelectionStart, newSelectionStart);
};

export default corretHandle;
