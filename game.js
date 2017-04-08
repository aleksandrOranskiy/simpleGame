BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {
      this.load.tilemap('tilemap','assets/level_1.json',null,Phaser.Tilemap.TILED_JSON);
      this.load.spritesheet('boy','assets/boy.png',108,140,16);
    },

    create: function() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.map = this.add.tilemap('tilemap');
        this.map.addTilesetImage('128','tiles');

        //layers in tileMap---
        this.groundLayer = this.map.createLayer('Ground');
        this.backgroundLayer = this.map.createLayer('Background');
        this.waterLayer = this.map.createLayer('Water');
        this.bush1Layer = this.map.createLayer('Bush1');
        this.bush2Layer = this.map.createLayer('Bush2');
        this.bush3Layer = this.map.createLayer('Bush3');
        this.bush4Layer = this.map.createLayer('Bush4');
        this.tree1Layer = this.map.createLayer('Tree1');
        this.tree1_1Layer = this.map.createLayer('Tree1_1');
        this.tree1_2Layer = this.map.createLayer('Tree1_2');
        this.tree1_3Layer = this.map.createLayer('Tree1_3');
        this.tree2Layer = this.map.createLayer('Tree2');
        this.tree2_1Layer = this.map.createLayer('Tree2_1');
        this.tree2_2Layer = this.map.createLayer('Tree2_2');
        this.boxLayer = this.map.createLayer('Box');
        this.box_1Layer = this.map.createLayer('Box_1');
        this.box_2Layer = this.map.createLayer('Box_2');
        this.arrowLayer = this.map.createLayer('Arrow');
        this.signLayer = this.map.createLayer('Sign');
        this.cutLayer = this.map.createLayer('Cut');
        this.stoneLayer = this.map.createLayer('Stone');
        this.stone_1Layer = this.map.createLayer('Stone_1');
        this.mash1Layer = this.map.createLayer('Mash1');
        this.mash1_1Layer = this.map.createLayer('Mash1_1');
        this.mash1_2Layer = this.map.createLayer('Mash1_2');
        this.mash1_3Layer = this.map.createLayer('Mash1_3');
        this.mash1_4Layer = this.map.createLayer('Mash1_4');
        this.mash2Layer = this.map.createLayer('Mash2');
        this.mash2_1Layer = this.map.createLayer('Mash2_1');
        this.mash2_2Layer = this.map.createLayer('Mash2_2');
        this.mash2_3Layer = this.map.createLayer('Mash2_3');
        this.mash2_4Layer = this.map.createLayer('Mash2_4');
        //--------------------

        //player--------------
        this.boy = this.add.sprite(200,460,'boy');
        this.boy.scale.setTo(0.8,0.8);
        this.boy.anchor.setTo(0.5,1);
        this.physics.enable(this.boy,Phaser.Physics.ARCADE);
        this.boy.body.scaleMax = 0.2;
        this.boy.body.bounce.y = 0.2;
        this.boy.body.gravity.y = 300;
        this.boy.body.collideWorldBounds = true;
        this.boy.animations.add('right',[0,1,2,3,4,5,6,7],20,false);
        this.boy.animations.add('left',[8,9,10,11,12,13,14,15],20,false);
        this.boy.speed = 150;
        //---------------------
        this.cursors = this.input.keyboard.createCursorKeys();
    },

    update: function() {

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
