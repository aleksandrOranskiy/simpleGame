BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {
      this.load.image('mountain', 'assets/Background.png');
      this.load.image('tile1', 'assets/Tile_1.png');
      this.load.image('tile2', 'assets/Tile_2.png');
      this.load.image('tile3', 'assets/Tile_3.png');
      this.load.spritesheet('sara','assets/sara-cal.png',60,96,16);
    },

    create: function() {
        this.mountain = this.add.image(0,0,'mountain');
        this.tile1 = this.add.image(30,600,'tile1');
        this.tile1.anchor.setTo(0,1);
        this.tile2 = this.add.image(286,600,'tile2');
        this.tile2.anchor.setTo(0,1);
        this.tile3 = this.add.image(542,600,'tile3');
        this.tile3.anchor.setTo(0,1);
        this.sara = this.add.sprite(200,460,'sara');
        this.sara.anchor.setTo(0.5,1);
        this.sara.animations.add('run',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],20,true);
        this.physics.enable(this.sara,Phaser.Physics.ARCADE);
        this.sara.play('run');
        this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function() {
        this.tile1.x -= 1;
        this.tile2.x -= 1;
        this.tile3.x -= 1;
    },

    render: function() {
        this.game.debug.body(this.sara);
    }
};
