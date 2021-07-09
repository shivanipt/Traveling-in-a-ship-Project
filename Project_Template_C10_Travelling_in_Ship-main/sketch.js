var ship_swimming, ship;
var seaImage, sea;

function preload(){
  ship_swimming = loadAnimation("ship-1/png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  ship = createSprite(50, 160, 20, 50);
  ship.addAnimation("swimming", ship_swimming);
  ship.scale = 0.75;
  edges = createEdgeSprites();

  sea = createSprite(400, 400);
  sea.addImage("sea", seaImage);
  sea.x = sea.width/2;

}

function draw() {
  background("blue");

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }

  drawSprites();
 
}