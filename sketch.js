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
fondo = color(25, 100, 50);
fbolita = color(random(0, 255), random(0, 255), random(0, 255));
// frameRate(10);
// print(posX);
// posX = 234;
// print(posX);
// posX = posX + 25;
// print(posX);
// posX = posX * 2;
// print(posX);
// posX = posX / 5;
// print(posX);
// posX *= 8;
// print(posX);
// posX += 1;
// print(posX);
// posX ++;
}


function draw() {
background(fondo);
posX -= 10;


if(posX < -radio) {
diametro = random(10, 100);
radio = diametro / 2;
fondo = color(255, random(100, 255),50);
fbolita = color(255, random(100, 255),25);
posX = windowWidth + radio;
}


fill(fbolita);
circle(posX, posY, diametro);
print(posX);
}
