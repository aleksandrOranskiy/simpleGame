window.onload = function() {

    var game = new Phaser.Game(850, 600, Phaser.CANVAS, 'gameContainer');

    game.state.add('Game',BasicGame.Game);

    game.state.start('Game');
};
