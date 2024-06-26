function init() {
    var element = document.createElement("div");
    element.style.width = "100vw";
    element.style.height = "1vh";
    element.style.position = "absolute";
    element.style.top = "0px";
    element.style.left = "0px";
    document.body.appendChild(element);
    return element;
}
var numberFactory = init();
var bounds = numberFactory.getBoundingClientRect();
function createZeroOrOne() {
    var positionY = 0;
    var el = document.createElement("p");
    el.textContent = "".concat(Math.floor(Math.random() * 2));
    el.style.position = "absolute";
    el.style.left = "".concat(Math.floor(Math.random() * bounds.width), "px");
    var animationLoop = setInterval(function () {
        positionY += 1;
        numberFactory.appendChild(el);
        el.style.top = "".concat(positionY, "px");
        if (positionY >= window.innerHeight) {
            numberFactory.removeChild(el);
            clearInterval(animationLoop);
        }
    });
}
setInterval(function () {
    createZeroOrOne();
});
