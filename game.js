BasicGame.Game = function(game) {

};

BasicGame.Game.prototype = {
    preload: function() {
      this.load.image('mountain', 'assets/Background.png');
      this.load.image('tile1', 'assets/Tile_1.png');
      this.load.image('tile2', 'assets/Tile_2.png');
      this.load.image('tile3', 'assets/Tile_3.png');
    },

    create: function() {
        this.mountain = this.add.tileSprite(0,0,850,600,'mountain');
        this.tile1 = this.add.tileSprite(30,344,256,256,'tile1');
        this.tile2 = this.add.tileSprite(286,344,256,256,'tile2');
        this.tile3 = this.add.tileSprite(542,344,256,256,'tile3');
    }
};
