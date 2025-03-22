let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;
let aux = 0;
let temp = false;

let grado = Math.PI / 180;

let matrizLG = [
  [0, 0, 0, ],
  [0, 0, 0, ],
  [0, 0, 0, ]]; 
let matrizG = [
  [0, 0, 0, ],
  [0, 0, 0, ],
  [0, 0, 0, ]];

let inicio=true;
let letraPVZ;
let sonidoGuisante;
let sonidoPlantar;
let sonidoMusica;
function preload(){
  sonidoGuisante = loadSound('./sounds/guisante.mp3')
  sonidoPlantar = loadSound('./sounds/plantar.mp3');
  sonidoMusica = loadSound('./sounds/game.mp3');
  letraPVZ = loadFont('./fonts/Samdan.ttf');
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
  fill('#6a9619');
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
   if(temp==true && inicio==false){
    //Dibuja Pala
    push();
    let x = mouseX;
    let y = mouseY;
    let size = 50;
    strokeWeight(10);
    stroke('brown');
    line(x - size / 3, y + size, x - size, y + 2 * size);
    stroke(0);
    strokeWeight(2);
    fill('gray');
    triangle(x-1.5*size, y + 3*size, x - 2*size, y + 1.5*size, x + size/2-10, y + 2.5*size);
    noFill();
    strokeWeight(6);
    stroke('red');
    line((x - size / 2.5)-20, (y + size / 2)+20,(x + size / 2.5)-15, y + size + 10);
    strokeWeight(10);
    line((x - size / 2.5)-10, (y + size / 2)+10, (x + size / 2.5)-10, y + size);
    noCursor();
    pop();
    }else{
      if(inicio==false){
      //Dibuja Carta
      push();
      fill(0,120,80, 10);
      rect(mouseX, mouseY, 90, 60);
      circle(mouseX+30, mouseY+30, 30);
      ellipse(mouseX+50, mouseY+30, 10, 30);
      circle(mouseX+70, mouseY+30, 20);
      ellipse(mouseX+30, mouseY+27, 3, 5);
      ellipse(mouseX+38, mouseY+25, 3, 5);
      line(mouseX+60, mouseY+60, mouseX+90, mouseY+30)
      line(mouseX+40, mouseY+60, mouseX+30, mouseY+45)
      line(mouseX+35, mouseY+60, mouseX+25, mouseY+45)
      noCursor();
      pop();
      }
    }
    }
  }
  
  pop();
  if(inicio==true){
    textSize(30);
    textAlign(CENTER);
    fill(150, 0, 0);
    textFont(letraPVZ);
    text("PLANTS VS ZOMBIES\nToca una casilla para empezar\nDoble click para activar la musica", 400, 300);
  }
  push();
}


function dibujaPrincipal(x, y) {
  x1 = x * 250 + 125;
  y1 = y * 250 + 125;
  dibujarLanzaguisante(x1, y1);
}

function dibujarGuisante(x2, y2) {
  fill('#9fd439');
  circle(x2, y2, 50);
}

function dibujarLanzaguisante(x, y) {
   // Hoja cabeza
   push();
   fill('#488404');
   strokeWeight(4);
   stroke('#488404');
   circle(x - 72, y - 33, 28);
   line(x - 77, y - 47, x - 48, y - 25);
   line(x - 76, y - 46, x - 46, y - 29);
   line(x - 86, y - 30, x - 80, y);
   line(x - 76, y - 30, x - 80, y);
   line(x - 60, y - 25, x - 80, y - 10);
   pop();
   push();
   stroke('#2F5A02');
   strokeWeight(3);
   line(x - 59, y - 30, x - 48, y - 22);
   line(x - 57, y - 37, x - 43, y - 28);
   strokeWeight(2);
   line(x - 75, y - 26, x - 80, y - 10);
   strokeWeight(3);
   line(x - 65, y - 40, x - 75, y - 26);
   pop();
   
  // Cabeza
  push();
  fill('#9fd439');
  ellipse(x, y, 110, 95);
  noStroke();
  fill('#b4e24c');
  ellipse(x + 60, y, 50, 70);
  pop();
  // Boca
  push();
  stroke('#5c7d1b');
  strokeWeight(5);
  fill("#4f6c17");
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
  fill('#488404');
  translate(x - 40, y + 110);
  // Hoja izquierda trasera
  rotate(grado * 30);
  ellipse(0, 0, 50, 30);
  // Hoja derecha trasera
  rotate(grado * -60);
  ellipse(40, 15, 35, 25);
  pop();
  // Tallo
  push();
  stroke('#94cc2c');
  strokeWeight(10);
  line(x - 20, y + 50, x - 25, y + 70);
  line(x - 25, y + 70, x - 15, y + 115);
  pop();
  push();
  fill('#4f9015');
  translate(x - 40, y + 120);
  // Hoja izquierda delantera
  rotate(grado * -10);
  ellipse(0, 0, 51, 31);
  // Hoja derecha delantera
  rotate(grado * 15);
  ellipse(48, -2, 47, 28);
  pop();
 
  //cuello
  push();
  fill('#488404');
  arc(x - 12, y + 40, 30, 30, grado * 35, grado * 170, CHORD);
  pop();
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
  sonidoPlantar.play();
  }else{
    matrizLG[x][y] = 0;
  }

  if(inicio==true){
    inicio=false;
  }
}

function doubleClicked(){
  if(sonidoMusica.isPlaying()){
    sonidoMusica.stop();
  }else{
    sonidoMusica.play();
  }
}