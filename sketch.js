let posX;
let posY;
let diametro;
let radio;
let fondo;
let fbolita;

function setup() {
createCanvas(windowWidth, windowHeight);
posX = windowWidth / 2;
posY = windowHeight / 2;
diametro = 100;
radio = diametro / 2;
fondo = color(15, 60, 50);
fbolita = color(random(0, 100), random(0, 255), random(0, 150));
}

function draw() {
background(fondo);
posX -= 10;


if(posX < -radio) {
diametro = random(10, 200);
radio = diametro / 2;
fondo = color(255, random(100, 255),50);
fbolita = color(240, random(80, 255),25);
posX = windowWidth + radio;
}

fill(fbolita);
circle(posX, posY, diametro);
print(posX);
}
