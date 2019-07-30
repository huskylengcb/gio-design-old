function isNumber(v) {
    return !isNaN(v - parseFloat(v));
}
function blurActiveElement() {
    var activeEle = document.activeElement;
    activeEle.blur();
}

export { blurActiveElement as b, isNumber as i };
