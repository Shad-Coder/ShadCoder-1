let block1 = document.querySelectorAll('.base__1');
let main = document.documentElement;
let clientHeight = main.clientHeight;
let center = clientHeight / 2;
console.log(center);
function isElemInViewPort (q) {
  var pos = q.getBoundingClientRect();
  return (
    pos.top >= 0 &&
    pos.left >= 0 &&
    pos.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    pos.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function callbackFunc() {
  for (var i = 0; i < block1.length; i++) {
    if (isElemInViewPort(block1[i])) {
      block1[i].style["transform"] = "translateX(0%)";
      block1[i].classList.add('visible__base')
    }
    else {
      block1[i].classList.remove('visible__base');
     
    }
  }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);


