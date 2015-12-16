function getParameterByName( name ) {
	name = name.replace( /[\[]/, "\\[" ).replace( /[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" ),
		results = regex.exec( location.search );
	return results == null ?
		"" :
		decodeURIComponent( results[ 1 ].replace( /\+/g, " " ));
}

var selectEffect = document.getElementById( "selectEffect" );
selectEffect.value = getParameterByName( "name" ) || "acidBullet";

var looping = document.getElementById( "looping" );
looping.value = getParameterByName( "looping" ) || "loopAndPause";

var go = document.getElementById( "go" );
go.onclick = function ( e ) {
	console.log ( selectEffect.value );
	console.log ( looping.value );
	window.location = window.location.origin + window.location.pathname +
		"?name=" + selectEffect.value + "&looping=" + looping.value;
};

var MyState = new Kiwi.State( "myState" );

var MyGame = new Kiwi.Game( "exampleGameContainer", "testGame", MyState,
		{
			renderer: Kiwi.RENDERER_WEBGL,
			plugins: [ "ParticlePack3", "ParticlesGL" ]
		} );

MyState.preload = function() {
	this.game.stage.color="000000";
	this.addSpriteSheet(
		"particlePack3SpriteSheet",
		"../assets/particlepack3_128.png",
		128, 128, false, 25, 5, 5, 27, 27, 54, 54 );
};

MyState.create = function() {

	// Derive settings from page parameters
	var effect = this.addChild( Kiwi.Plugins.ParticlePack3[
		getParameterByName( "name" ) || "AcidBullet" ].create(
			this, 400, 300 ) );
	var looping = getParameterByName( "looping" ) || "loopAndPause";


	function start() {

		if ( effect.childType() === Kiwi.GROUP ) {
			for ( var i = 0; i < effect.members.length; i++ ) {
				switch ( looping ) {
					case "once" :
						effect.members[ i ].startEmitting( false );
						break;
					case "continuous" :
						effect.members[ i ].startEmitting();
						break;
					case "loopAndPause" :
						effect.members[ i ].startEmitting( false, false );
						break;
				}
			}
		} else {
			switch ( looping ) {
				case "once" :
					effect.startEmitting( false );
					break;
				case "continuous" :
					effect.startEmitting();
					break;
				case "loopAndPause" :
					effect.startEmitting( false, false );
					break;
			}
		}
	}

	start();

	if ( looping === "loopAndPause" ) {
		setInterval( start, 400 );
	}
};
