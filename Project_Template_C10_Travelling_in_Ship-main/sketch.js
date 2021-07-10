var ship_swimming, ship;
var seaImage, sea;

function preload(){
  ship_swimming = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(10, 10);
  sea.addImage("sea", seaImage);
  sea.x = sea.width/2;

  ship = createSprite(125, 200, 20, 50);
  ship.addAnimation("swimming", ship_swimming);
  ship.scale = 0.35;
  edges = createEdgeSprites();

}

function draw() {
  background("blue");

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }

  drawSprites();
 
}