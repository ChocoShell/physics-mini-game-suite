ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.entity',
	'impact.font',

	'game.levels.impactlevel'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/ImpactFontWhite.png' ),
	
	init: function() {
		// Initialize your game here; bind keys etc.
		ig.input.initMouse();
		ig.input.bind(ig.KEY.MOUSE1,'click');

		this.loadLevel( LevelImpactlevel );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;

		this.font.draw( 'Powered By', x, 3*y/4, ig.Font.ALIGN.CENTER);
		this.font.draw( 'Panda Play', x/2, y/2, ig.Font.ALIGN.CENTER);
		this.font.draw( 'Gravity Demo', x/2, 3*y/2, ig.Font.ALIGN.CENTER);
		this.font.draw( 'JetPack Game', 3*x/2, y/2, ig.Font.ALIGN.CENTER);
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
