

my-p5js-project/
│
├── index.html
├── sketch.js
└── README.md
  
let dia;
let angle;
let r, g, b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  diameter = 80;
  angle = 0;
}

//메인 비트 표현
function draw() {
  r = random(250);
  g = random(80);
  b = random(190);

  background(r, g, b, 2);

  noStroke();
  fill(r, g, b, 197);
  dia = (tan(angle) * diameter) / 7 + diameter / 8;
  ellipse(mouseX, mouseY, dia);

  angle = angle + 0.09;


}
