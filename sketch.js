var canvas, backgroundImage;
var gameState=1;
var pittie;
var gram;
var dia;
var truck;
var purse;
var bg,bg2;
var nxt;
var but;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22;

function preload(){
dia= loadImage("dia1.png");
nxt= loadImage("nxt.png");
gram=loadImage("gram1.png");
pittie=loadImage("pittie.png");
truck=loadImage("truck.png");
purse=loadImage("purse.png");
bg=loadImage("bg1.png");
bg2=loadImage("bg2.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
//form= new Form();
  

 gram1=createSprite(1400,400);
 gram1.addImage("gramIMG",gram);

 purse1=createSprite(50,50);
 purse1.addImage("purseIMG",purse);
 purse1.scale=0.8

 nxt1=createSprite(1400,150);
 nxt1.addImage("nxtIMG",nxt);
 nxt1.scale=0.3

 pittie1=createSprite(100,460);
 pittie1.addImage("PittieIMG",pittie);

 dia1=createSprite(700,200);
 dia1.addImage("dia",dia);
dia1.scale=0.5;



//Create maze walls and give color
wall1=createSprite(340,120,20,385);
wall1.shapeColor="grey";
wall1.visible=false;

wall2=createSprite(175,125,20,200);
wall2.shapeColor="grey";
wall2.visible=false;

wall3=createSprite(271,120,20,200);
wall3.shapeColor="grey";
wall3.visible=false;

wall4=createSprite(200,280,200,20);
wall4.shapeColor="grey";
wall4.visible=false;

wall5=createSprite(120,345,600,20);
wall5.shapeColor="grey";
wall5.visible=false;

wall6=createSprite(424,202,20,200);
wall6.shapeColor="grey";
wall6.visible=false;

wall7=createSprite(441,110,152,20);
wall7.shapeColor="grey";
wall7.visible=false;

wall8=createSprite(108,170,20,200);
wall8.shapeColor="grey";
wall8.visible=false;

wall9=createSprite(176,111,200,20);
wall9.shapeColor="grey";
wall9.visible=false;

wall10=createSprite(215,150,55,20);
wall10.shapeColor="grey";
wall10.visible=false;

wall11=createSprite(160,170,30,20);
wall11.shapeColor="grey";
wall11.visible=false;

wall12=createSprite(470,117,100,20);
wall12.shapeColor="grey";
wall12.visible=false;

wall13=createSprite(488,125,20,200);
wall13.shapeColor="grey";
wall13.visible=false;

wall14=createSprite(444,173,20,20);
wall14.shapeColor="grey";
wall14.visible=false;

wall15=createSprite(402,335,20,30);
wall15.shapeColor="grey";
wall15.visible=false;

wall16=createSprite(450,344,60,20);
wall16.shapeColor="grey";
wall16.visible=false;

wall17=createSprite(471,295,10,20);
wall17.shapeColor="grey";
wall17.visible=false;

wall18=createSprite(373,373,20,80);
wall18.shapeColor="grey";
wall18.visible=false;

wall19=createSprite(347,300,20,100);
wall19.shapeColor="grey";
wall19.visible=false;


wall20=createSprite(357,487,200,20);
wall20.shapeColor="grey";
wall20.visible=false;

wall21=createSprite(290,443,200,20);
wall21.shapeColor="grey";
wall21.visible=false;

wall22=createSprite(197,356,20,50);
wall22.shapeColor="grey";
wall22.visible=false;





 
}

function mouseClicked(nxt1){

  gameState = 2;
  console.log(gameState);
  background("lightgreen")
}

function draw(){
 
  background(bg);

  //but.button.position(displayWidth/2 + 30, displayHeight/2);

  if(gameState===2){
    background(bg2);
    dia1.destroy();
    wall1.visible=true;
    wall2.visible=true;
    wall3.visible=true;
    wall4.visible=true;
    wall5.visible=true;
    wall6.visible=true;
    wall7.visible=true;
    wall8.visible=true;
    wall9.visible=true;
    wall10.visible=true;
    wall11.visible=true;
    wall12.visible=true;
    wall13.visible=true;
    wall14.visible=true;
    wall15.visible=true;
    wall16.visible=true;
    wall17.visible=true;
    wall18.visible=true;
    wall19.visible=true;
    wall20.visible=true;
    wall21.visible=true;
    wall22.visible=true;
    pittie1.scale=0.15;
   
  }  

  pittie1.collide(wall1);
  pittie1.collide(wall2);
  pittie1.collide(wall3);
  pittie1.collide(wall4);
  pittie1.collide(wall5);
  pittie1.collide(wall6);
  pittie1.collide(wall7);
  pittie1.collide(wall8);
  pittie1.collide(wall9);
  pittie1.collide(wall10);
  pittie1.collide(wall11);
  pittie1.collide(wall12);
  pittie1.collide(wall13);
  pittie1.collide(wall14);
  pittie1.collide(wall15);
  pittie1.collide(wall16);
  pittie1.collide(wall17);
  pittie1.collide(wall18);
  pittie1.collide(wall19);
  pittie1.collide(wall20);
  pittie1.collide(wall21);
  pittie1.collide(wall22);



if(keyDown(UP_ARROW)) {
  pittie1.velocityX = 0;
  pittie1.velocityY = -2;
}

if(keyDown(DOWN_ARROW)) {
  pittie1.velocityX = 0;
  pittie1.velocityY = 2;
}

if(keyDown(RIGHT_ARROW)) {
  pittie1.velocityX = 2;
  pittie1.velocityY = 0;
}

if(keyDown(LEFT_ARROW)) {
  pittie1.velocityX = -2;
  pittie1.velocityY = 0;
}

  
 if(gameState===1){
   background(bg);
 }


if(gameState===3){
  game.End();
}
drawSprites();
}
