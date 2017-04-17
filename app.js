window.onload = function() {

    var game = new Phaser.Game(832, 640, Phaser.CANVAS, 'gameContainer');

    game.state.add('Boot', BasicGame.Boot);
	game.state.add('Preloader', BasicGame.Preloader);
	//game.state.add('MainMenu', BasicGame.MainMenu);
    game.state.add('Game', BasicGame.Game);

    game.state.start('Boot');
    
};
