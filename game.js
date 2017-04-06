BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {
      this.load.image('mountain', 'assets/Background.png');
      this.load.image('tile1', 'assets/Tile_1.png');
      this.load.image('tile2', 'assets/Tile_2.png');
      this.load.image('tile3', 'assets/Tile_3.png');
      this.load.spritesheet('boy','assets/boy.png',108,140,16);
    },

    create: function() {
        this.mountain = this.add.image(0,0,'mountain');
        this.platforms = this.add.group(true,true);
        this.platforms.create(30, 600, 'tile1');
        this.tile1.body.immovable = true;
        //this.tile2 = platforms.create(286, 600, 'tile2');
        //this.tile2.body.immovable = true;
        //this.tile3 = platforms.create(542, 600, 'tile3');
        //this.tile3.body.immovable = true;
        /*this.tile1 = this.add.image(30,600,'tile1');
        this.tile1.anchor.setTo(0,1);
        this.tile2 = this.add.image(286,600,'tile2');
        this.tile2.anchor.setTo(0,1);
        this.tile3 = this.add.image(542,600,'tile3');
        this.tile3.anchor.setTo(0,1);*/
        this.boy = this.add.sprite(200,460,'boy');
        this.boy.scale.setTo(0.8,0.8);
        this.boy.anchor.setTo(0.5,1);
        //this.boy.animations.add('run',[0,1,2,3,4,5,6,7],20,true);
        this.physics.enable(this.boy,Phaser.Physics.ARCADE);
        this.boy.body.scaleMax = 0.2;
        this.boy.body.bounce.y = 0.2;
        this.boy.body.gravity.y = 300;
        this.boy.body.collideWorldBounds = true;
        //this.boy.play('run');
        this.boy.animations.add('right',[0,1,2,3,4,5,6,7],20,false);
        this.boy.animations.add('left',[8,9,10,11,12,13,14,15],20,false);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.boy.speed = 150;
    },

    update: function() {
        this.hitPlatform = this.physics.arcade.collide(this.boy, this.platforms);
        //this.tile1.x -= 1;
        //this.tile2.x -= 1;
        //this.tile3.x -= 1;
        this.boy.body.velocity.x = 0;
        this.direction;
        if (this.cursors.left.isDown) {
            //  Move to the left
            this.boy.body.velocity.x = -this.boy.speed;
            this.boy.animations.play('left');
            this.direction = 'L';
        }
        else if (this.cursors.right.isDown)
        {
            //  Move to the right
            this.boy.body.velocity.x = this.boy.speed;
            this.boy.animations.play('right');
            this.direction = 'R';
        }
        else
        {
            //  Stand still
            this.boy.animations.stop();
            if (this.direction==='R') {
                this.boy.frame = 0;
            }
            if (this.direction==='L') {
                this.boy.frame = 15;
            }

        }
    },

    render: function() {
        this.game.debug.body(this.boy);
    }
};
