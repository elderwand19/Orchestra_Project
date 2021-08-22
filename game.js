//https://steemit.com/utopian-io/@onepice/create-scenes-and-scene-transitions-at-phaser3-library
//create a scene with class

var GameScene1 = new Phaser.Class({

    //The scene is noted.
    Extends: Phaser.Scene,

    initialize:

    function GameScene1 ()
    {
       
        Phaser.Scene.call(this, { key: 'GameScene1' });
    },

    preload: function ()
    {
        this.load.spritesheet('bg', 'Instruments/bg.png', {frameWidth: 500, frameHeight: 500, endFrame: 40 });
    },

    create: function ()
    {
       var gs = this.add.text(500,500, 'GameScene1');
       bg = this.add.sprite(400, 350, 'bg').setScale(2.00);
        var instructions = this.add.text(110,200 , "These are interactive videos where you can simply use your computer \nkeyboard to play the Launchpad",{
            fill: "#FFFFFF", font: '20px Arial', align: 'center', backgroundColor: "#000000"
        })
        var instructions2 = this.add.text(100,260, "Use your numpad keys in sequence 0~9 and trigger the right sound cues \n to complete the song.",{
            fill: "#FFFFFF", font: '20px Arial', align: 'center', backgroundColor: "#000000"
        })
        var txt1 = this.add.text(280,370, 'START',{
            fill: "#FFFFFF",  font:'72px Arial', backgroundColor: "#000000"
        });
        
        txt1.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene2');
        });    
        
        this.anims.create({
            key: 'bg',
            frames: this.anims.generateFrameNumbers('bg', { start: 0, end: 39 }),
            frameRate: 30,
           
        });
        
                      
        },
        update: function () {
            bg.anims.play('bg', true);
        }  
   
    

});

var closer;

//create a scene with class
var GameScene2 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene2' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     
     
      var txt4 = this.add.text(355,50, 'Main Menu');
      var txt2 = this.add.text(350,500, 'Next Song');
      var txt51 = this.add.text(120,300,'Play: Closer - The Chainsmokers', {
          font: '40px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"

      });
      
        txt2.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene3');
        });

        closer = this.add.video(400, 300);
        closer.loadURL('/Instruments/Closer.mp4');

     

        txt51.setInteractive().on('pointerdown', function() {
            closer.play();
            
        });

        txt4.setInteractive().on('pointerdown', function() {    
            closer.play(false);
             this.scene.scene.start('GameScene1');	
              
            });   

        this.keys = this.input.keyboard.addKeys('NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE'); 
        
        
    },

    update:function(){
        if(this.keys.NUMPAD_ZERO.isDown === true){
            //play video at 13s
           closer.setCurrentTime(+00);
        }
        if(this.keys.NUMPAD_ONE.isDown === true){
            //play video at 13s
           closer.setCurrentTime(+15);
        }
        if(this.keys.NUMPAD_TWO.isDown === true){
            //play video at 13s
           closer.setCurrentTime(+30);
        }
        if(this.keys.NUMPAD_THREE.isDown === true){
            //play video at 13s
           closer.setCurrentTime(+45);
        }
        if(this.keys.NUMPAD_FOUR.isDown === true){
            //play video at 13s
           closer.setCurrentTime(+60);
        }
        if(this.keys.NUMPAD_FIVE.isDown === true){
                //play video at 13s
            closer.setCurrentTime(+75);
        }
        if(this.keys.NUMPAD_SIX.isDown === true){
                //play video at 13s
            closer.setCurrentTime(+90);
        }
        if(this.keys.NUMPAD_SEVEN.isDown === true){
                //play video at 13s
            closer.setCurrentTime(+105);
        }
        if(this.keys.NUMPAD_EIGHT.isDown === true){
                //play video at 13s
            closer.setCurrentTime(+120);
        }
        if(this.keys.NUMPAD_NINE.isDown === true){
                //play video at 13s
            closer.setCurrentTime(+135);
        }
 }

});

var GameScene3 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene3' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     
        
      var txt41 = this.add.text(355,50, 'Main Menu');
      var txt3 = this.add.text(350,500, 'Next Song');
      var txt52 = this.add.text(150,300,'Play: Astronomia - Vicetone & Tony Igy', {
        font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"

    });
        
        txt3.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene4');
        });
       
          
           coffin = this.add.video(400, 300);
           coffin.loadURL('/Instruments/CoffinDance.mp4');

           txt41.setInteractive().on('pointerdown', function() {    
            coffin.play(false);
            this.scene.scene.start('GameScene1');	
             
           });
        
   
           txt52.setInteractive().on('pointerdown', function() {
               coffin.play();
               
           });
           this.keys = this.input.keyboard.addKeys('NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE');
     
    },

    update:function(){
        if(this.keys.NUMPAD_ZERO.isDown === true){
            //play video at 13s
           coffin.setCurrentTime(+00);
        }
        if(this.keys.NUMPAD_ONE.isDown === true){
            //play video at 13s
           coffin.setCurrentTime(+15);
        }
        if(this.keys.NUMPAD_TWO.isDown === true){
            //play video at 13s
           coffin.setCurrentTime(+30);
        }
        if(this.keys.NUMPAD_THREE.isDown === true){
            //play video at 13s
           coffin.setCurrentTime(+45);
        }
        if(this.keys.NUMPAD_FOUR.isDown === true){
            //play video at 13s
           coffin.setCurrentTime(+60);
        }
        if(this.keys.NUMPAD_FIVE.isDown === true){
                //play video at 13s
            coffin.setCurrentTime(+75);
        }
        if(this.keys.NUMPAD_SIX.isDown === true){
                //play video at 13s
            coffin.setCurrentTime(+90);
        }
        if(this.keys.NUMPAD_SEVEN.isDown === true){
                //play video at 13s
            coffin.setCurrentTime(+105);
        }
        if(this.keys.NUMPAD_EIGHT.isDown === true){
                //play video at 13s
            coffin.setCurrentTime(+120);
        }
        if(this.keys.NUMPAD_NINE.isDown === true){
                //play video at 13s
            coffin.setCurrentTime(+135);
        }
 }

});
var GameScene4 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene4' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {  
        var txt3 = this.add.text(365,500, 'Credits');
        txt3.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene5');
        });    
        
      txt42 = this.add.text(355,50, 'Main Menu');
      var txt53 = this.add.text(170,300,'Play: Faded - Alan Walker', {
        font: '40px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"
    });

    faded = this.add.video(400, 300);
    faded.loadURL('/Instruments/Faded.mp4');
      
      txt42.setInteractive().on('pointerdown', function() {    
          faded.play(false);
        this.scene.scene.start('GameScene1');	
         
       });

       txt53.setInteractive().on('pointerdown', function() {
        faded.play();
        
    });
    this.keys = this.input.keyboard.addKeys('NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE');
    },

    update:function(){
        if(this.keys.NUMPAD_ZERO.isDown === true){
            //play video at 13s
           faded.setCurrentTime(+00);
        }
        if(this.keys.NUMPAD_ONE.isDown === true){
            //play video at 13s
           faded.setCurrentTime(+15);
        }
        if(this.keys.NUMPAD_TWO.isDown === true){
            //play video at 13s
           faded.setCurrentTime(+30);
        }
        if(this.keys.NUMPAD_THREE.isDown === true){
            //play video at 13s
           faded.setCurrentTime(+45);
        }
        if(this.keys.NUMPAD_FOUR.isDown === true){
            //play video at 13s
           faded.setCurrentTime(+60);
        }
        if(this.keys.NUMPAD_FIVE.isDown === true){
                //play video at 13s
            faded.setCurrentTime(+75);
        }
        if(this.keys.NUMPAD_SIX.isDown === true){
                //play video at 13s
            faded.setCurrentTime(+90);
        }
        if(this.keys.NUMPAD_SEVEN.isDown === true){
                //play video at 13s
            faded.setCurrentTime(+105);
        }
        if(this.keys.NUMPAD_EIGHT.isDown === true){
                //play video at 13s
            faded.setCurrentTime(+120);
        }
        if(this.keys.NUMPAD_NINE.isDown === true){
                //play video at 13s
            faded.setCurrentTime(+135);
        }
 }
});

var GameScene5 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene5' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     
        
    
  
      txt43 = this.add.text(350,50, 'Main Menu');

      var txt53 = this.add.text(205,320,'Hritvik Semwal 18BCG10048', {
        font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#572D15"
    });
    
     var txt54 = this.add.text(155,370,'Jaishree Shewaramani 18BCG10049', {
      font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#572D15"
  });
    
    var txt55 = this.add.text(200,420,'Shivam Shakya 18BCG10085', {
    font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#572D15"
});

txt43.setInteractive().on('pointerdown', function() {    
    this.scene.scene.start('GameScene1');	
     
   });
    }

    

});




//settings required to configure the game
var config = {
    type: Phaser.AUTO,   
    width: 800,
    height:  600,
    physics: {
        default: 'arcade'
    },
    //set background color
    backgroundColor: '#D4B59D',
    scale: {
        //we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //set scenes
    scene:[GameScene1,GameScene2,GameScene3,GameScene4,GameScene5]
    
};


var game = new Phaser.Game(config);
