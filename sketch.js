
function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  //Fondo
  background(120, 122, 34);
  arc(388, 440, 30, 30, PI / 4, PI, CHORD);
  //Cabeza
  push();
  fill('#ADFF2F');
  ellipse(400, 400, 110, 95);
  noStroke();
  fill('#ADDF2F');
  ellipse(460, 400, 50, 70);
  pop();
  //boca
  push();
  stroke('green');
  strokeWeight(5);
  fill("green");
  ellipse(463, 403, 28, 48);
  pop();
  fill('black');
  ellipse(457, 403, 20, 37);
  //ojos
  push();
  ellipse(430, 380, 9, 14);
  ellipse(410, 385, 13, 18);
  pop();
  //tallo
  push();
  strokeWeight(10);
  line(380, 450, 375, 470);
  line(375, 470, 385, 515);

  arc(540, 100, 300, 100, 90, 330, CHORD);
  pop();

  
}
