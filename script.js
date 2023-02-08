let block1 = document.querySelectorAll('.base__1');
let main = document.documentElement;
let clientHeight = main.clientHeight;
let center = clientHeight / 2;
console.log(center);
// scroll spy
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
   
  }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// mamatrix 
let canava = document.querySelector('#matrix');
let ctx = canava.getContext('2d');
const w = canava.width = document.body.offsetWidth;
const h = canava.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas

ctx.fillRect(0, 0, w, h);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#13131b';
  ctx.fillRect(0, 0, w, h);

  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = 'rgba(207, 48, 66, 0.3)';
  ctx.font = '30pt monospace';
 
  ctx

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = '¦';

    // x coordinate of the column, y coordinate is already given
    const x = ind * 50;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 100000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 23;
  });
}

// render the animation at 20 FPS.
setInterval(matrix, 35);
