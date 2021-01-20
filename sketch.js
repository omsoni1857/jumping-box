var canvas;
var music;
var surface1,surface2,surface3,surface4;
var movingBox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(1200,800);

    createSprite(random(20,750));

    movingBox=createSprite(40,20,20,40);
    movingBox.shapeColor("black");
    movingBox.debug = true;

    object1=createSprite(80,40,50,80);
    object1.shapeColor("red");

    object2=createSprite(80,40,50,80);
    object2.shapeColor("blue");

    object3=createSprite(80,40,50,80);
    object3.shapeColor("orange");

    object4=createSprite(80,40,50,80);
    object4.shapeColor("yellow");

    
    }

function draw() {
    background(rgb("white"));

    if(isTouching(movingBox,object2)){
        movingBox.shapeColor = "blue";
    object2.shapeColor = "blue";
    }
    else{
        movingRect.shapeColor = "green";
      object2.shapeColor = "green";
      }
    
      if(isTouching(movingBox,object1)){
        movingBox.shapeColor = "red";
        object1.shapeColor = "red";
    }
    else{
        movingBox.shapeColor = "green";
      object1.shapeColor = "green";
       }
   
       if(isTouching(movingBox,object3)){
        movingBox.shapeColor = "orange";
        object3.shapeColor = "orange";
    }
    else{
        movingBox.shapeColor = "green";
      object3.shapeColor = "green";
       }
    
       if(isTouching(movingBox,object4)){
        movingBox.shapeColor = "yellow";
        object4.shapeColor = "yellow";
    }
    else{
        movingBox.shapeColor = "green";
      object4.shapeColor = "green";
      
      }
      }
      
      
      


