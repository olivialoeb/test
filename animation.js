var x, r, y;

function setup() {
  createCanvas(500, 450);
  
noFill();
colorMode(RGB, 255, 125, 25, 100);
strokeWeight(30);
stroke(20, 30, 120, 0.3);
ellipse(210,30,20);
ellipse(30,30,50,50);
    
  y = 190;
} 

function draw() {
  
  x = random(250,250);

  if(random() > 1) {
    r = random(100, 130);
  } else {
    r = random(250, 130);
  }

  ellipse(x, y, r, r);
  y = y + 0;

  if(y > 500) {
    y = 0;
  }
}
