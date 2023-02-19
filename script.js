let block1 = document.querySelectorAll('.base__1');
let main = document.documentElement;
let clientHeight = main.clientHeight;
let center = clientHeight / 2;

let color = document.getElementById('color');
let thecolor = color.value
color.addEventListener('change', function () {
thecolor = color.value
})
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



ctx.fillRect(0, 0, w, h);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
function matrix () {
  ctx.fillStyle = '#13131b';
  ctx.fillRect(0, 0, w, h);


  ctx.fillStyle = thecolor;
  ctx.font = '17pt monospace';
 



  ypos.forEach((y, ind) => {
    
    const text = '|';

    const x = ind * 60;
  
    ctx.fillText(text, x, y);

   
    if (y > 100 + Math.random() * 40000) ypos[ind] = 0;
  
    else ypos[ind] = y + 25;
  });
}


setInterval(matrix, 35);




// options 
let options = document.getElementById('options');
let menuOptions = document.querySelector('.options__wrapper')

options.addEventListener('click', function () {
  menuOptions.classList.toggle('actived')
})
let bgEffects = document.querySelector('#setting__1');
bgEffects.addEventListener('click', function() {
  canava.classList.toggle('disable');
})
let fff = document.querySelector('#fff')
fff.addEventListener('click', function() {
  window.open('','self').close()
})
// line animation 
//change color



