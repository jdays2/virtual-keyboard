const createE = (teg, className) => {
  const element = document.createElement(teg);
  element.classList.add(className);
  return element;
};

export default createE;
