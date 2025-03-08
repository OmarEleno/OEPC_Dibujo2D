let grado = Math.PI / 180;
let gradoA= Math.PI / 180;
let x = 470;
let y = 400;
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
    dibujarLanzaguisante();
    dibujarGuisante();
    if(x<800){
      x +=10;
    }else{
      x=470;
    }
  }



function dibujarGuisante(){
  circle(x, y, 50);
}

function dibujarLanzaguisante(){
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

 //HOJAS
 push();
 fill('green');
 translate(360, 510);
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
 line(380, 450, 375, 470);
 line(375, 470, 385, 515);
pop();
//--------------------------------------
 push();
 fill('green');
 translate(360, 520);
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
 circle(328, 367, 28);
 line(323, 353, 352, 375);
 line(324, 354, 354, 371);
 line(314, 370, 320, 400);
 line(324, 370, 320, 400);
 line(340, 375, 320, 390);
 pop();
 push();
 fill('black');
 strokeWeight(1);
 line(341, 370, 352, 378);
 line(343, 363, 357, 372);
 strokeWeight(2);
 line(325, 374, 320, 390);
 strokeWeight(3);
 line(335, 360, 325, 374);
 pop();
 arc(388, 440, 30, 30, grado*45, grado*180, CHORD);
}