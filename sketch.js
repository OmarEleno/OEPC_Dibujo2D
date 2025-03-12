let grado = Math.PI / 180;
let gradoA= Math.PI / 180;
let x1 = 0;
let y1 = 0;
let lanzarGuisante = false;
let cuadrante;
let aux = x1+70;
let x=0;
let y=0;
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
   // dibujarLanzaguisante();
   dibujaPos(x, y);
   /*dibujaPos(1, 2);
   dibujaPos(2, 1);
   dibujaPos(2, 2);
  */
   /*
    if(lanzarGuisante == true){
      dibujarGuisante();
      if(aux<800){
        aux +=10;
      }else{
        aux = x1 +70;
      }
    }*/
  }


function dibujaPos(x, y){
  x1 = x * 250 + 250;
  y1 = y * 250 + 250;
  dibujarLanzaguisante(x1, y1);
}
function dibujarGuisante(){
  circle(aux, y1, 50);
}

function dibujarLanzaguisante(x, y){
 //Cabeza
 push();
 fill('#ADFF2F');
 ellipse(x, y, 110, 95);
 noStroke();
 fill('#ADDF2F');
 ellipse(x+60, y, 50, 70);
 pop();
 //boca
 push();
 stroke('green');
 strokeWeight(5);
 fill("green");
 ellipse(x+63, y+3, 28, 48);
 pop();
 fill('black');
 ellipse(x+57, y+3, 20, 37);
 //ojos
 push();
 ellipse(x+30, y-20, 9, 14);
 ellipse(x+10, y-15, 13, 18);
 pop();

 //HOJAS
 push();
 fill('green');
 translate(x-40, y+110);
 // Hoja izquierda trasera
 rotate(gradoA*30);
 ellipse(0, 0, 50, 30);
 // Hoja derecha trasera
 rotate(gradoA*-60);
 ellipse(40, 15, 35, 25);
 pop();
 //--------------------------------------
 //tallo
 push();
 stroke(120, 220, 80);
 strokeWeight(10);
 line(x-20, y+50, x-25, y+70);
 line(x-25, y+70, x-15, y+115);
pop();
//--------------------------------------
 push();
 fill('green');
 translate(x-40, y+120);
 // Hoja izquierda delantera
 rotate(gradoA*-10);
 ellipse(0, 0, 51, 31);
 // Hoja derecha delantera
 rotate(gradoA*15);
 ellipse(48, -2, 47, 28);
 pop();

 //hoja cabeza
 push();
 fill('green');
 strokeWeight(4);
 stroke('green');
 circle(x-72, y-33, 28);
 line(x-77, y-47, x-48, y-25);
 line(x-76, y-46, x-46, y-29);
 line(x-86, y-30, x-80, y);
 line(x-76, y-30, x-80, y);
 line(x-60, y-25, x-80, y-10);
 pop();
 push();
 fill('black');
 strokeWeight(1);
 line(x-59, y-30, x-48, y-22);
 line(x-57, y-37, x-43, y-28);
 strokeWeight(2);
 line(x-75, y-26, x-80, y-10);
 strokeWeight(3);
 line(x-65, y-40, x-75, y-26);
 pop();
 arc(x-12, y+40, 30, 30, grado*35, grado*170, CHORD);
}

function mousePressed(){
  /*
  if(lanzarGuisante == false){
  lanzarGuisante = true;
  }else{
    lanzarGuisante = false;
  }*/
      x = Math.floor(mouseX / 250);
      y = Math.floor(mouseY / 250);
    
    }
