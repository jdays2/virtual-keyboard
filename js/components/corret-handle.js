const exceptions = [
  'Backspace',
  'Enter',
  'ShiftRight',
  'ShiftLeft',
  'ArrowLeft',
  'ArrowRight',
  'AltLeft',
  'AltRight',
  'ControlLeft',
  'ControlRight',
  'Delete',
  'CapsLock',
  'Tab',
  'MetaLeft'
];

const corretHandle = (TEXTAREA, currentCode, button) => {
  const textarea = TEXTAREA;
  if (exceptions.includes(currentCode)) return;

  const value = textarea.value;
  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  const newValue = value.substring(0, selectionStart)
    + button.innerHTML
    + value.substring(selectionEnd);
  const newSelectionStart = selectionStart + button.innerHTML.length;

  textarea.value = newValue;
  textarea.setSelectionRange(newSelectionStart, newSelectionStart);
};

export default corretHandle;
