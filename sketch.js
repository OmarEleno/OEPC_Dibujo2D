let gatito;
let gatito2;

function preload() {
  // put preload code here
  gatito = loadImage('./images/image.png');
  gatito2 = loadImage('./images/image.png');
}

function setup() {
  // put setup code here
  createCanvas(gatito.width, gatito.height);
  noloop();
}

function draw() {
  // put drawing code here
  background(255)
  let numPixeles = 4* gatito.width * gatito.height;
  gatito.loadPixels();
  for(let i = 0; i < numPixeles; i+=4){
    //Red
    gatito.pixels[i] = 255 - gatito.pixels[i];
    //Green
    gatito.pixels[i+1] = 255 - gatito.pixels[i+1];
    //Blue     
    gatito.pixels[i+2] = 255 - gatito.pixels[i+2];
    //Alpha
   // gatito.pixels[i+3] = 255;
  }
  gatito.updatePixels();
  image(gatito, 0, 0);
  image(gatito2, 0, 0, 300, 300);
}
