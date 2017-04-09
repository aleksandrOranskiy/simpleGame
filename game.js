BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {
      this.load.image('gameArea','assets/levelFirst1.png');
      this.load.spritesheet('boy','assets/boy.png',108,140,16);
    },

    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //gameArea------------
        this.gameArea = this.add.sprite(0,0,'gameArea');
        this.physics.enable(this.gameArea,Phaser.Physics.ARCADE);
        this.gameArea.body.collideWorldBounds = true;
        this.gameArea.body.checkCollision.up = true;
        this.gameArea.body.checkCollision.down = true;
        this.gameArea.body.checkCollision.left = true;
        this.gameArea.body.checkCollision.right = true;
        this.gameArea.body.immovable = true;
        //--------------------

        //player--------------
        this.boy = this.add.sprite(200,460,'boy');
        this.boy.scale.setTo(0.4,0.4);
        this.boy.anchor.setTo(0.5,1);
        this.physics.enable(this.boy,Phaser.Physics.ARCADE);
        this.boy.body.scaleMax = 0.2;
        this.boy.body.bounce.y = 0.2;
        this.boy.body.gravity.y = 300;
        this.boy.body.gravity.x = 3;
        this.boy.body.collideWorldBounds = true;
        this.boy.animations.add('right',[0,1,2,3,4,5,6,7],20,false);
        this.boy.animations.add('left',[8,9,10,11,12,13,14,15],20,false);
        this.boy.speed = 150;
        //---------------------
        //this.camera.follow(this.boy);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    update: function() {

        this.physics.arcade.collide(this.boy,this.gameArea);

        this.jumpTimer = 0;
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
        /*else if (this.cursors.up.isDown)
        {
            //  Jump
            this.boy.animations.stop();
            if (this.direction==='R') {
                this.boy.frame = 6;
            }
            if (this.direction==='L') {
                this.boy.frame = 8;
            }
            this.boy.body.velocity.y = -this.boy.speed;
        }*/
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

        if (this.jumpButton.isDown && this.boy.body.onFloor() && this.time.now > this.jumpTimer)
        {
            this.boy.body.velocity.y = -250;
            this.jumpTimer = this.time.now + 750;
        }


    },

    render: function() {
        this.game.debug.body(this.boy);
    }
};
