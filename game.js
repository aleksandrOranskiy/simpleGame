BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    
    create: function() {

        this.setupTilemap();
        this.setupMusic();
        this.setupPlayer();
        this.setupBackground();
        this.setupMushrooms();
        this.setupCounter();

        this.cursors = this.input.keyboard.createCursorKeys();
        this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    setupTilemap: function() {

        this.background = this.add.image(0,0,'background');
        this.map = this.add.tilemap('gameArea');
        this.map.addTilesetImage('set32v2','tiles');
        this.map.setCollisionBetween(1,16);
        this.layer = this.map.createLayer('Tile Layer 1');
        this.layer.resizeWorld();

    },

    setupBackground: function() {

        this.tree_1 = this.add.image(260,75,'tree');
        this.tree_1.scale.setTo(0.4,0.4);
        this.tree_2 = this.add.image(480,330,'tree');
        this.tree_2.scale.setTo(0.4,0.4);
        this.tree_3 = this.add.image(720,10,'tree');
        this.tree_3.scale.setTo(0.4,0.4);

        this.stone = this.add.sprite(370,490,'stone');
        this.stone.scale.setTo(0.5,0.5);
        this.physics.enable(this.stone,Phaser.Physics.ARCADE);
        this.stone.body.immovable = true;

        this.bush_1 = this.add.image(10,90,'bush');
        this.bush_1.scale.setTo(0.8,0.8);
        this.bush_2 = this.add.image(770,95,'bush');
        this.bush_2.scale.setTo(0.8,0.8);
        this.bush_3 = this.add.image(460,415,'bush');
        this.bush_3.scale.setTo(0.8,0.8);
        this.bush_4 = this.add.image(10,480,'bush');
        this.bush_4.scale.setTo(0.8,0.8);
        this.bush_5 = this.add.image(300,480,'bush');
        this.bush_5.scale.setTo(0.8,0.8);

    },

    setupMusic: function() {

         this.music = this.add.audio('jump');

    },

    setupPlayer: function() {

        this.boy = this.add.sprite(100,500,'boy');
        this.boy.scale.setTo(0.4,0.4);
        this.boy.anchor.setTo(0.5,1);
        this.boy.animations.add('right',[0,1,2,3,4,5,6,7],20,false);
        this.boy.animations.add('left',[8,9,10,11,12,13,14,15],20,false);
        this.physics.enable(this.boy,Phaser.Physics.ARCADE);
        this.boy.body.linearDamping = BasicGame.PLAYER_LINEAR_DAMPING;
        this.boy.body.bounce.y = BasicGame.PLAYER_BOUNCE_Y;
        this.boy.body.gravity.y = BasicGame.PLAYER_GRAVITY_Y;
        this.boy.body.gravity.x = BasicGame.PLAYER_GRAVITY_X;
        this.boy.speed = BasicGame.PLAYER_SPEED;
        this.boy.body.collideWorldBounds = true;        
        
    },

    setupMushrooms: function() {

        this.mushGroup = this.add.group();
        this.mush_pink_1 = this.add.sprite(80,110,'mush_pink');
        this.mush_pink_1.scale.setTo(0.5,0.5);
        this.mush_pink_2 = this.add.sprite(320,175,'mush_pink');
        this.mush_pink_2.scale.setTo(0.5,0.5);
        this.mush_pink_3 = this.add.sprite(700,110,'mush_pink');
        this.mush_pink_3.scale.setTo(0.5,0.5);
        this.mush_pink_4 = this.add.sprite(800,110,'mush_pink');
        this.mush_pink_4.scale.setTo(0.5,0.5);
        this.mush_pink_5 = this.add.sprite(340,495,'mush_pink');
        this.mush_pink_5.scale.setTo(0.5,0.5);
        this.mush_pink_6 = this.add.sprite(700,495,'mush_pink');
        this.mush_pink_6.scale.setTo(0.5,0.5);
        this.mush_pink_7 = this.add.sprite(750,365,'mush_pink');
        this.mush_pink_7.scale.setTo(0.5,0.5);
        this.mush_pink_8 = this.add.sprite(320,335,'mush_pink');
        this.mush_pink_8.scale.setTo(0.5,0.5);
        this.mush_pink_9 = this.add.sprite(100,270,'mush_pink');
        this.mush_pink_9.scale.setTo(0.5,0.5);
        this.mush_orange = this.add.sprite(740,110,'mush_orange');
        this.mush_orange.scale.setTo(0.5,0.5);

        this.mushGroup.add(this.mush_pink_1);
        this.mushGroup.add(this.mush_pink_2);
        this.mushGroup.add(this.mush_pink_3);
        this.mushGroup.add(this.mush_pink_4);
        this.mushGroup.add(this.mush_pink_5);
        this.mushGroup.add(this.mush_pink_6);
        this.mushGroup.add(this.mush_pink_7);
        this.mushGroup.add(this.mush_pink_8);
        this.mushGroup.add(this.mush_pink_9);
        this.mushGroup.add(this.mush_orange);
        this.physics.enable(this.mushGroup,Phaser.Physics.ARCADE);

    },

    setupCounter: function() {

        this.hudX = this.add.image(1,1,'x');
        this.hudX.scale.setTo(0.4,0.4);
        this.hud0 = this.add.sprite(25,1,'0');
        this.hud0.scale.setTo(0.4,0.4);
        this.currentNumb = this.hud0;
        this.counter = 0;

    },

    collisionHandler: function(obj1,obj2) {

        if (obj2 === this.mush_orange) {
            obj2.destroy();
            this.displayEnd(false);
            return;
        }
        obj2.destroy();
        this.currentNumb.destroy();
        ++this.counter;
        if (this.counter===9) {
            this.displayEnd(true);
            return;
        }
        var str = String(this.counter);
        this.currentNumb = this.add.sprite(25,1,str);
        this.currentNumb.scale.setTo(0.4,0.4);

    },

    displayEnd: function(win) {

        if (this.endText && this.endText.exist) {
            return;
        }
        this.msg = win ? 'YOU WIN!!!' : 'GAME OVER!';
        this.endText = this.add.text(this.width / 2, this.height / 2 - 60, this.msg,
        { font: '72px serif', fill: 'red', boundsAlignH: 'center', boundsAlignV: 'middle'});
        this.textWidth = this.world.width/1.2;
        this.textHeight = this.world.height/5;
        this.endText.setTextBounds((this.world.width-this.textWidth)/2,
            (this.world.height-this.textHeight)/2,this.textWidth,this.textHeight);
        this.physics.destroy();
        
    },

    checkCollisions: function() {

        this.physics.arcade.collide(this.boy,this.layer);
        this.physics.arcade.collide(this.boy,this.stone);
        this.physics.arcade.collide(this.boy,this.mushGroup,this.collisionHandler,null,this);

        if (this.boy.body.bottom >= this.world.bounds.bottom) {
            this.displayEnd(false);
        }

    },

    processPlayerInput: function() {

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
            //  Jump
        if (this.jumpButton.isDown && this.boy.body.onFloor() && this.time.now > this.jumpTimer)
        {
            this.boy.body.velocity.y = -BasicGame.PLAYER_VELOCITY_Y;
            this.jumpTimer = this.time.now + BasicGame.PLAYER_JUMPTIMER;
            this.music.play();
        }

    },

    update: function() {

        this.checkCollisions();
        this.processPlayerInput();    
    },

    render: function() {
        
    }
};
