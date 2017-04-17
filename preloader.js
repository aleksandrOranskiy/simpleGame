BasicGame.Preloader = function(game) {

};

BasicGame.Preloader.prototype = {

    preload: function() {

        this.load.tilemap('gameArea','assets/level32px_v3.json',null,Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles','assets/sh32v2.png');
        this.load.image('background','assets/bg.png');
        this.load.spritesheet('boy','assets/boyv2.png',108,128,16);
        this.load.image('tree','assets/Tree_2.png');
        this.load.image('mush_pink','assets/Mushroom_1.png');
        this.load.image('mush_orange','assets/Mushroom_2.png');
        this.load.image('stone','assets/Stone.png');
        this.load.image('bush','assets/Bush (3).png');
        this.load.image('x','assets/hudX.png');
        this.load.image('0','assets/hud0.png');
        this.load.image('1','assets/hud1.png');
        this.load.image('2','assets/hud2.png');
        this.load.image('3','assets/hud3.png');
        this.load.image('4','assets/hud4.png');
        this.load.image('5','assets/hud5.png');
        this.load.image('6','assets/hud6.png');
        this.load.image('7','assets/hud7.png');
        this.load.image('8','assets/hud8.png');
        this.load.image('9','assets/hud9.png');
        this.load.audio('jump',['assets/jump.mp3']);

    },

    create: function() {
		
    },

    update: function() {

        this.state.start('Game');
    }
};