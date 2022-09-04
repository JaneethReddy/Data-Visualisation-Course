x = 150
width = 600
y = 400
function setup() {
  createCanvas(600, y);
  
}

function flag(){
  
  fill('#3D71E7')
  noStroke()
  rect(0,0,width,y/2-20)
  fill("#15BB40")
  rect(0,y/2+20,width,y/2)
  fill(256,256,256)
  // stroke(0)
  triangle(0,0,0,y,2*x,y/2)
  fill('#9C2E35')
  textSize(9)
  text('01010110 01000001 01001110 01000100 01000101 00100000 01001101 ',2*x - 10,y/2-6)
  text('01010110 01000001 01001110 01000100 01000101 00100000 01001101 ',2*x - 10,y/2 +5)
}

function emoji(){
   strokeWeight(3)
  noStroke()
  fill('#E4F860')
  ellipse(x/2,y/2,150,150)
  stroke(30,30,30)
  // strokeWeight(2)
  // ellipse(x/2-30,y/2-30,17,17)
  // ellipse(x/2+30,y/2-30,17,17)
  //Left Eye
  arc(x/2-30,y/2-30,17,14,PI,0)
  arc(x/2-30,y/2-30,17,8,PI,0)
  
  //Right Eye
  arc(x/2+30,y/2-30,17,14,PI,0)
  arc(x/2+30,y/2-30,17,8,PI,0)
  
  //UpperRing
  noFill()
  strokeWeight(5)
  stroke(228,246,240)
  rotate(0.01)
  ellipse(x/2-3,y/3-23,160,17)
  // curve(x/2,y/2,x/2-20,y/2+10,x/2,y/2+20,x/2+20,y/2+10)
  
  fill(228,246)
  stroke(0)
  strokeWeight(2)
  line(x/2-20,y/2+10,x/2+20,y/2+10)
  strokeWeight(2)
  arc(x/2,y/2+4,40,5,PI,0)
  rect(x/2-20,y/2+2,41,7)
  strokeWeight(2)
  stroke(0)
  fill(255,255,255)
  arc(x/2,y/2+10,40,25,0,PI)
  fill(255,106,100)
  arc(x/2,y/2+10,25,20,0,PI)
  // curve(x/2,y/2+10,x/2-20,y/2+10,x/2,y/2+20,x/2+20,y/2+10)
}
function draw() {
  background(255,255,255);
  flag()
  emoji()
}
