let grado = Math.PI / 180;
let gradoA = Math.PI / 180;
let aux = 0;
let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;
let matrizLG = [
  [0, 0, 0, ],
  [0, 0, 0, ],
  [0, 0, 0, ]]; 
let matrizG = [
  [0, 0, 0, ],
  [0, 0, 0, ],
  [0, 0, 0, ]];

let sonidoGuisante;
let temp = false;
function preload(){
  sonidoGuisante = loadSound('./sounds/guisante.mp3')
}


function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // Fondo
  background(120, 122, 34);
  //Cuadricula
  push();
  fill(70, 200, 30, 50);
  rect(20, 20, 250, 250);
  rect(270, 20, 250, 250);
  rect(520, 20, 250, 250);
  rect(20, 270, 250, 250);
  rect(270, 270, 250, 250);
  rect(520, 270, 250, 250);
  rect(20, 520, 250, 250);
  rect(270, 520, 250, 250);
  rect(520, 520, 250, 250);
  pop();

  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(matrizLG[i][j] == 1){
        dibujaPrincipal(i, j);
        if (matrizG[i][j] === 0) {
          matrizG[i][j] = 250 * i + 200; 
          sonidoGuisante.play();  
          
        }
        if (matrizG[i][j] < width*1.5) {
          matrizG[i][j] += 10; 
          
        }else{
          matrizG[i][j] = 250 * i + 200; 
          sonidoGuisante.play();  
          temp=false;       
        }
        dibujarGuisante(matrizG[i][j], j*250 + 125);
      }
 
      if(matrizLG[Math.floor(mouseX / 250)][Math.floor(mouseY/250)]==1){
        temp=true;
      }else{
        temp = false;
      }
      //Cursor
  if(temp==true){
    push();
    let x = mouseX;
    let y = mouseY;
    let size = 50;
    //triangle(x, y - size/2, x - size/6, y + size, x + size+15, y + size / 5);
    strokeWeight(10);
    stroke('brown');
    //line(x, y + size, x, y+2*size);
    line(x - size / 3, y + size, x - size, y + 2 * size);

    stroke(0);
    strokeWeight(2);
    fill('gray');
    triangle(x-1.5*size, y + 3*size, x - 2*size, y + 1.5*size, x + size/2-10, y + 2.5*size);
    noFill();
    strokeWeight(8);
    stroke('red');
    rect(x-size/2, y+size/2, size, size/2);
    line(x-size, y+size/2, x+size, y+size);
    noCursor();
    pop();
    }else{
    push();
    fill(0,120,120, 70);
    rect(mouseX, mouseY, 90, 60);
    noCursor();
    pop();
    }
    }
  }
  
      //Cursor
      /*push();
        fill(0,120,120, 70);
        rect(mouseX, mouseY, 90, 60);
        noCursor();
      pop();*/
}


function dibujaPrincipal(x, y) {
  x1 = x * 250 + 125;
  y1 = y * 250 + 125;
  dibujarLanzaguisante(x1, y1);
}

function dibujarGuisante(x2, y2) {
  fill('green');
  circle(x2, y2, 50);
  /*if(sonidoGuisante.isPlaying())
  {sonidoGuisante.stop(); 
  }else{
    sonidoGuisante.play();
  }*/
}

function dibujarLanzaguisante(x, y) {
  // Cabeza
  push();
  fill('#ADFF2F');
  ellipse(x, y, 110, 95);
  noStroke();
  fill('#ADDF2F');
  ellipse(x + 60, y, 50, 70);
  pop();
  // Boca
  push();
  stroke('green');
  strokeWeight(5);
  fill("green");
  ellipse(x + 63, y + 3, 28, 48);
  pop();
  fill('black');
  ellipse(x + 57, y + 3, 20, 37);
  // Ojos
  push();
  ellipse(x + 30, y - 20, 9, 14);
  ellipse(x + 10, y - 15, 13, 18);
  pop();

  // HOJAS
  push();
  fill('green');
  translate(x - 40, y + 110);
  // Hoja izquierda trasera
  rotate(gradoA * 30);
  ellipse(0, 0, 50, 30);
  // Hoja derecha trasera
  rotate(gradoA * -60);
  ellipse(40, 15, 35, 25);
  pop();
  //--------------------------------------
  // Tallo
  push();
  stroke(120, 220, 80);
  strokeWeight(10);
  line(x - 20, y + 50, x - 25, y + 70);
  line(x - 25, y + 70, x - 15, y + 115);
  pop();
  //--------------------------------------
  push();
  fill('green');
  translate(x - 40, y + 120);
  // Hoja izquierda delantera
  rotate(gradoA * -10);
  ellipse(0, 0, 51, 31);
  // Hoja derecha delantera
  rotate(gradoA * 15);
  ellipse(48, -2, 47, 28);
  pop();

  // Hoja cabeza
  push();
  fill('green');
  strokeWeight(4);
  stroke('green');
  circle(x - 72, y - 33, 28);
  line(x - 77, y - 47, x - 48, y - 25);
  line(x - 76, y - 46, x - 46, y - 29);
  line(x - 86, y - 30, x - 80, y);
  line(x - 76, y - 30, x - 80, y);
  line(x - 60, y - 25, x - 80, y - 10);
  pop();
  push();
  fill('black');
  strokeWeight(1);
  line(x - 59, y - 30, x - 48, y - 22);
  line(x - 57, y - 37, x - 43, y - 28);
  strokeWeight(2);
  line(x - 75, y - 26, x - 80, y - 10);
  strokeWeight(3);
  line(x - 65, y - 40, x - 75, y - 26);
  pop();
  arc(x - 12, y + 40, 30, 30, grado * 35, grado * 170, CHORD);
}

function mousePressed() {
  x = Math.floor(mouseX / 250);
  y = Math.floor(mouseY / 250);
  if (x > 3 || y > 3 || x < 0 || y < 0) {
    x = 0;
    y = 0;
  }
  if(matrizLG[x][y] == 0){
  matrizLG[x][y] = 1; 
  }else{
    matrizLG[x][y] = 0;
  }
}