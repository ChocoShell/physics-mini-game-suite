ig.module( 'game.levels.impactlevel' )
.requires( 'impact.image','game.entities.pointer','game.entities.clickable' )
.defines(function(){
LevelImpactlevel=/*JSON[*/{"entities":[{"type":"EntityPointer","x":320,"y":336},{"type":"EntityClickable","x":400,"y":80,"settings":{"size":{"x":160,"y":80},"game":"jetpack"}},{"type":"EntityClickable","x":80,"y":80,"settings":{"size":{"x":160,"y":80},"game":"panda"}},{"type":"EntityClickable","x":80,"y":320,"settings":{"size":{"x":160,"y":80},"game":"gravityDemo"}}],"layer":[{"name":"background","width":4,"height":3,"linkWithCollision":false,"visible":1,"tilesetName":"media/impactlogo.png","repeat":false,"preRender":true,"distance":"1","tilesize":160,"foreground":false,"data":[[1,2,3,4],[5,6,7,8],[9,10,11,12]]}]}/*]JSON*/;
LevelImpactlevelResources=[new ig.Image('media/impactlogo.png')];
});