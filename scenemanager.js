
var txt4;
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
    },

    create: function ()
    {
       var gs = this.add.text(500,500, 'GameScene1');
        var txt1 = this.add.text(400,300, 'start');
        
        txt1.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene2');
        });

        
        
    }

});



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
        var gs2 = this.add.text(500,500, 'GameScene2');
      txt4 = this.add.text(400,50, 'back');
      var txt2 = this.add.text(400,320, 'start');
        
        txt2.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene3');
        });
        
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
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
        var gs3 = this.add.text(500,500, 'GameScene3');
      txt4 = this.add.text(400,50, 'back');
      var txt3 = this.add.text(400,340, 'start');
        
        txt3.setInteractive().on('pointerdown', function() {
            
            this.scene.scene.start('GameScene4');
        });
       
     
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
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
        var gs4 = this.add.text(500,500, 'GameScene4');
      txt4 = this.add.text(400,50, 'back');
      var txt41 = this.add.text(400,360, 'start');
        
      txt41.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene5');
      });
     
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
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
        var gs5 = this.add.text(500,500, 'GameScene5');
      txt4 = this.add.text(400,50, 'back');
      var txt5 = this.add.text(400,380, 'start');
      
      txt5.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene6');
      });
      txt42 = this.add.text(350,50, 'Main Menu');
      var txt53 = this.add.text(235,320,'Hritvik Semwal 18BCG10048', {
        font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"
    });
    
     var txt54 = this.add.text(235,320,'Jaishree Shewaramani 18BCG10049', {
      font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"
  });
    
    var txt55 = this.add.text(235,320,'Shivam Shakya 18BCG10085', {
    font: '30px Arial', fill: "#FFFFFF", backgroundColor:"#FF0000"
});
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
    }

});
var GameScene6 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene6' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    { var gs6 = this.add.text(500,500, 'GameScene6');    
      txt4 = this.add.text(400,50, 'back');
      var txt6 = this.add.text(400,400, 'start');
      
      txt6.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene7');
      });
      
     
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
    }

});

var GameScene7 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene7' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     var gs7 = this.add.text(500,500, 'GameScene7');
      txt4 = this.add.text(400,50, 'back');
      var txt7 = this.add.text(400,420, 'start');
      
      txt7.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene8');
      });
      
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
    }

});

var GameScene8 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene8' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     var gs8 = this.add.text(500,500, 'GameScene8');
      txt4 = this.add.text(400,50, 'back');
      var txt8 = this.add.text(400,440, 'start');
      
      txt8.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene9');
      });
      
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
    }

});

var GameScene9 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene9' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     var gs9 = this.add.text(500,500, 'GameScene9');
      txt4 = this.add.text(400,50, 'back');
      var txt9 = this.add.text(400,460, 'start');
      
      txt9.setInteractive().on('pointerdown', function() {
          
          this.scene.scene.start('GameScene10');
      });
     
    },

    update:function(){  
          
    txt4.setInteractive().on('pointerdown', function() {    
 	    this.scene.scene.start('GameScene1');	
          
        });
       
    }

});
var GameScene10 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:
    function GameScene () {
        Phaser.Scene.call(this, { key: 'GameScene10' });
    },

    preload: function ()
    {
        
    },
    
    create: function ()
    {     
      txt4 = this.add.text(400,50, 'back');
     
    },

    update:function(){  
        var gs10 = this.add.text(500,500, 'GameScene10');
          
    txt4.setInteractive().on('pointerdown', function() {    
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
    backgroundColor: 0x27ae60,
    scale: {
        //we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //set scenes
    scene:[GameScene1,GameScene2,GameScene3,GameScene4,GameScene5,GameScene6,GameScene7,GameScene8,GameScene9,GameScene10]
    
};


var game = new Phaser.Game(config);
