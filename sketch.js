var astronaut ;
var sleep, brush, bg, bath;
var gym, drink, eat, move;

var sleepImg, brushImg , bathImg;
var drinkImg , eatImg , gymImg;
var moveImg ,  bgImg ; 
 

function preload(){ 
 
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  sleep = loadAnimation("images/sleep.png");
  drink = loadAnimation("drink1.png,drink2.png");
  eat = loadAnimation("eat1.png,eat2.png");
  gym = loadAnimation("images/gym1.png,images/gym2.png,gym11.png,gym12.png");
  move = loadAnimation ("images/move.png,move1.png")
  bath = loadAnimation("images/bath1.png,bath2.png");
    
}

function setup() {
  createCanvas(600, 600);

  astronaut = createSprite(600,430);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

  edges = createEdgeSprites();{
    astronaut.bounceOff(edges);
  }
}

 
   
  
  function draw() {
  
    background(220);
    if(keyDown("UP_ARROW")){
      astronaut.addAnimation("brushing", brush);
      astronaut.changeAnimation("brushing");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("bathing",bath);
      astronaut.changeAnimation("bathing");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 350;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }
    
     
    if(keyDown("m")){
      astronaut.velocityX = -10;
      astronaut.velocityY = -10;
      
    }
    
  }

