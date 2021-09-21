var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars;
var car1, car2, car3, car4;

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  car1=createSprite(200,200,20,20);
  car2=createSprite(400,200,20,20);
  car3=createSprite(600,200,20,20);
  car4=createSprite(800,200,20,20);

  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
