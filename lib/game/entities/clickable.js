ig.module(
    'game.entities.clickable')
.requires(
    'impact.entity')
.defines(function() {
    EntityClickable = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        _wmDrawBox: true,
        _wmBoxColor: '#ff00ff',
        _wmScalable: true,
        clicked: function() {
            /* Handle the click */
            window.location = "http://localhost:8080/" + this.game + ".html";
        }
    });
});