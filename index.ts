function init() {
  const element = document.createElement("div");

  element.style.width = "100vw";
  element.style.height = "1vh";
  element.style.position = "absolute";
  element.style.top = "0px";
  element.style.left = "0px";
  document.body.appendChild(element);
  return element;
}

const numberFactory = init();
const bounds = numberFactory.getBoundingClientRect();

function createZeroOrOne() {
  let positionY = 0;

  const el = document.createElement("p");
  el.textContent = `${Math.floor(Math.random() * 2)}`;
  el.style.position = "absolute";
  el.style.left = `${Math.floor(Math.random() * bounds.width)}px`;

  const animationLoop = setInterval(() => {
    positionY += 1;
    numberFactory.appendChild(el);
    el.style.top = `${positionY}px`;
    if (positionY >= window.innerHeight) {
      numberFactory.removeChild(el);
      clearInterval(animationLoop);
    }
  });
}

setInterval(() => {
  createZeroOrOne();
});
