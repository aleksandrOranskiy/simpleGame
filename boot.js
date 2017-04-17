var BasicGame = {
    
    PLAYER_LINEAR_DAMPING: 1,
    PLAYER_BOUNCE_Y: 0.2,
    PLAYER_GRAVITY_Y: 300,
    PLAYER_GRAVITY_X: 30,
    PLAYER_SPEED: 150,
    PLAYER_VELOCITY_Y: 250,
    PlAYER_JUMPTIMER: 350
    
};

BasicGame.Boot = function(game) {

};

BasicGame.Boot.prototype = {

    create: function() {
        this.state.start('Preloader');
    }

};