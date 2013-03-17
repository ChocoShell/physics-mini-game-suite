ig.module(
    'game.entities.jetpacker'
)
.requires(
    'impact.entity',
    'plugins.box2d.entity'
)
.defines(function() {
    EntityJetpacker = ig.Box2DEntity.extend( {
        animSheet: new ig.AnimationSheet('media/jetpack/player.png', 16, 24),

        size: {x: 12, y:14}, 
        offset: {x: 2, y: 2},

        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.NONE,
        collides: ig.Entity.COLLIDES.NEVER,
        
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
            this.addAnim('jump', .7, [1, 2])
        },
        update: function() {
            // move left or right
            if( ig.input.state('left') ) {
                this.body.ApplyForce( new b2.Vec2(-40,0), this.body.GetPosition() );
                this.flip = true;
            }
            else if( ig.input.state('right') ) {
                this.body.ApplyForce( new b2.Vec2(40,0), this.body.GetPosition() );
                this.flip = false;
            }
            
            // jetpack
            if( ig.input.state('jump') ) {
                this.body.ApplyForce( new b2.Vec2(0,-60), this.body.GetPosition() );
                this.currentAnim = this.anims.jump;
            }
            else {
                this.currentAnim = this.anims.idle;
            }

            this.currentAnim.flip.x = this.flip;

            this.body.SetXForm(this.body.GetPosition(), 0);
            
            this.parent();
        },
        check: function (other) {
        },
        handleMovementTrace: function(res) {
            this.parent(res);
            if (res.collision.x) {
                this.flip = !this.flip;
            }
        },
    });
});
