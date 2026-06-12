let ixxx = false;


function mouse_fun() {
  document.button.style.backgroundColor = Math.random() > 0.5 ? "gold" : "silver";
}

function opinion_submit() {
  alert("wasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

function pump(){
  let x1 = Math.floor(Math.random() * 256);
  let x2 = Math.floor(Math.random() * 256);
  let x3 = Math.floor(Math.random() * 256);

  pump2(x1, x2, x3);
}

function pump2(x1, x2, x3){
  xx1 = 255 - x1;
  xx2 = 255 - x2;
  xx3 = 255 - x3;

  
  document.body.style.backgroundColor = `rgb(${x1}, ${x2}, ${x3})`;

  document.querySelectorAll("p").forEach(function(p) {
  p.style.color = `rgb(${xx1}, ${xx2}, ${xx3})`;
  });

  document.querySelectorAll("button").forEach(function(button) {
    button.style.backgroundColor = `rgb(${xx1}, ${xx2}, ${xx3})`;
  });

  document.querySelectorAll("button").forEach(function(button) {
    button.style.color = `rgb(${x1}, ${x2}, ${x3})`;
  });
}

function pump3(){
  
  if (ixxx) {
    clearInterval(lvl);
    ixxx = false;
    return;
}
ixxx = true;
lvl = setInterval(pump, 10);
}

document.addEventListener("DOMContentLoaded", pump);

function more_hearts(){
  let heart = document.getElementById("c_h");
  let clonedHeart = heart.cloneNode(true);
  clonedHeart.id = "c_h_clone";
  document.body.appendChild(clonedHeart);
  clonedHeart.style.position = "absolute";
  clonedHeart.style.left = Math.random() * window.innerWidth + "px";
  clonedHeart.style.top = Math.random() * window.innerHeight + "px";
}

function kill_hearts() {
  let kiler_of_hearts = document.querySelectorAll("#c_h_clone");
  kiler_of_hearts.forEach(function(heart) {
    heart.remove();
  });
}