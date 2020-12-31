class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
  }

  play(){

    var trex1 = createSprite(300, 200);
    var trex2 = createSprite(510, 200);
    

    trex1.addAnimation("wwew",treximage);
    trex2.addAnimation("wwew",treximage);
   
  
   var trexs = [trex1.velocityY, trex2.velocityY];

    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
     
      background("skyblue");
  
      camera.y=trex.y-12
      camera.x=trex.x+270
    
    
      text(mouseX+","+ mouseY,mouseX,mouseY);
      
      trex.collide(ig);
      
      trex.velocityY=5;
      
      //reset ground
      if(ground.x<0)
      {
       ground.x=ground.width/2;
      }
      
      if(gamestate==0 && keyDown("space"))
      {
           
         trex.changeAnimation("trex",treximage);
         
         gamestate=1;
      }
      
    
      
      if(gamestate==1)
         {
           trex.changeAnimation("trex",treximage);
           res.visible=false;
           gao.visible=false;
           co();
           cc();
               
           if(keyWentDown("space")&&trex.y>=180)
      {
          trexs[-1000,-1000]
      }
           trexs[trex1.velocityY+0.25,trex2.velocityY+0.25]
        score=score+0.5;
         if(trex.isTouching(obsg))
           {
           gamestate=2;
           score=score+0;
           trex.velocitX=0;
           obsg.setVelocityXEach(0);
           ground.velocityX=0;
             cloudg.setVelocityXEach(0);
           }
         }
      if(gamestate==2)
         {
           trex.velocityY=0;
           trex.changeAnimation("trex1",gta);
           res.visible=true;
           gao.visible=true;
           hs=score;
           if(hs>lhs)
           {lhs=hs}
           if(mousePressedOver(res))
           {
            score=0;
             gamestate=0
             cloudg.destroyEach();
             obsg.destroyEach();
           }
         }
      
      text("SCORE:"+Math.round(score),400,15);
      text("High score:"+Math.round(lhs),240,241)
      
      drawSprites();
       
       
      
    }

   
    drawSprites();
  }

end()
{

}
}
