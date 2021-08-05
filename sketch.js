var a

function setup() {
  createCanvas(600,600); 
  a=createSprite(300,300,50,50)
  a.scale=5
}

function draw() 
{
  background(30);

  if(keyIsDown(DOWN_ARROW))
 {
   background('lavender')
   a.scale=6
 }

 if(keyIsDown(UP_ARROW))
 {
   background('aqua')
   a.scale=4
 }

 if(keyIsDown(LEFT_ARROW))
 {
   background('pink')
   a.scale=7
 }

 if(keyIsDown(RIGHT_ARROW))
 {
   background('indigo')
   a.scale=8
 }
 drawSprites()
}




