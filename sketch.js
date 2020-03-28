
var rectA,rectB;


function setup() {
  createCanvas(1200,800);
 rectA = createSprite(200, 200, 50, 80);

rectB = createSprite(400,200,80,30)
}

function draw() {
  background(0,10,125); 
  rectB.x = World.mouseX 
  rectB.y = World.mouseY
  console.log(rectA.height/2+rectB.height/2)
  if (rectA.x-rectB.x===rectA.width/2+rectB.width/2 || rectB.x-rectA.x===rectA.width/2+rectB.width/2||rectA.y-rectB.y===rectA.height/2+rectB.height/2 || rectB.y-rectA.y===rectA.height/2+rectB.height/2) {
    rectA.shapeColor = "yellow";
    rectB.shapeColor = "green";
  }
  else{

rectA.shapeColor= "grey"
rectB.shapeColor= "grey"

  }
  drawSprites();
}