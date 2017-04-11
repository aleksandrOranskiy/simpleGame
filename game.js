BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {

        this.load.tilemap('gameArea','assets/xs/xsLevel.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles','assets/xs/sh32.png');
        this.load.image('background','assets/small/bg.png');
        this.load.spritesheet('boy','assets/boy.png',108,140,16);
        this.load.image('coin','assets/Gold_1.png');
    },

    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);

        //gameArea------------

        this.background = this.add.image(0,0,'background');
        this.map = this.add.tilemap('gameArea');
        this.map.addTilesetImage('sheet32','tiles');

        this.map.setCollisionBetween(1,16);

        this.layer = this.map.createLayer('Tile Layer 1');

        //this.layer.debug = true;
        this.layer.resizeWorld();
        //this.layer.wrap = true;
        //--------------------

        //player--------------
        this.boy = this.add.sprite(100,500,'boy');
        this.boy.scale.setTo(0.4,0.4);
        this.boy.anchor.setTo(0.5,1);
        this.physics.enable(this.boy,Phaser.Physics.ARCADE);
        this.boy.body.linearDamping = 1;
        this.boy.body.overlapY = 30;
        this.boy.body.bounce.y = 0.2;
        this.boy.body.gravity.y = 300;
        this.boy.body.gravity.x = 3;
        this.boy.body.collideWorldBounds = true;
        this.boy.animations.add('right',[0,1,2,3,4,5,6,7],20,false);
        this.boy.animations.add('left',[8,9,10,11,12,13,14,15],20,false);
        this.boy.speed = 150;
        //---------------------

        //coin-----------------
        this.coin = this.add.sprite(10,450,'coin');
        this.coin.scale.setTo(0.05,0.05);
        this.physics.enable(this.coin,Phaser.Physics.ARCADE);
        //---------------------

        this.camera.follow(this.boy);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    },

    collisionHandler: function(obj1,obj2) {
        obj2.destroy();
    },

    update: function() {

        this.physics.arcade.collide(this.boy,this.layer);
        this.physics.arcade.collide(this.boy,this.coin,this.collisionHandler,null,this);

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
