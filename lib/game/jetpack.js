ig.module( 
	'game.jetpack' 
)
.requires(
	'impact.game',
	'impact.entity',

	'game.levels.jetpack.jetpack',
	'game.entities.jetpacker',
	
	'plugins.box2d.game'
)
.defines(function(){

MyGame = ig.Box2DGame.extend({	

	gravity: 100,	

	init: function() {

		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.UP_ARROW, 'jump');
		this.loadLevel( LevelJetpack );
	},
	
	update: function() {

		this.parent();

		var player = this.getEntitiesByType( EntityJetpacker )[0];
		if( player ) {
			this.screen.x = player.pos.x - ig.system.width/2;
			this.screen.y = player.pos.y - ig.system.height/2;
		}

	},
	
	draw: function() {

		this.parent();
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 160, 2 );

});
