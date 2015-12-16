/**
* ParticlePack3 contains factory methods to create particles for your KiwiJS
* game. Use the `create` methods to generate particles or groups of particles.
*
* For a walkthrough on setting up the particle pack plugin check the README.
*
* @module Kiwi
* @submodule Kiwi.Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack3
* @main
*/
Kiwi.Plugins.ParticlePack3 = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @public
	*/
	name: "ParticlePack3",

	/**
	* The version of this plugin in semver (semantic versioning) format
	* @property version
	* @type String
	* @public
	*/
	version: "1.0.0",

	/**
	* The minimum version of Kiwi.js required to run this plugin in semver
	* (semantic versioning) format
	* @property minimumKiwiVersion
	* @type String
	* @public
	*/
	minimumKiwiVersion: "1.4.0",

	/**
	* Other plugins required for this plugin to run. 
	* @property pluginDependencies
	* @type Array
	* @public
	*/
	pluginDependencies: [
		{
			name: "ParticlesGL",
			minimumVersion: "1.2.1"
		}
	]
};
Kiwi.PluginManager.register( Kiwi.Plugins.ParticlePack3 );


Kiwi.Plugins.ParticlePack3._create = function( state, x, y, config ) {

	/**
	* Create and return an effect. This is invoked by the individual effects
	* and should not be used by developers.
	*
	* @method _create
	* @param state {Kiwi.State} Current game state
	* @param x {number} Horizontal position coordinate
	* @param y {number} Vertical position coordinate
	* @param config {array} List of particle config objects
	* @return {object} Particle effect or group of particle effects
	* @static
	* @private
	*/

	var effect, i, group;

	if ( config.length > 1 ) {
		group = new Kiwi.Group( state );

		for ( i in config ) {
			effect = new Kiwi.GameObjects.StatelessParticles(
				state, state.textures.particlePack3SpriteSheet,
				0, 0,
				config[ i ] );
			group.addChild( effect );
		}

		group.x = x;
		group.y = y;

		// Assign shortcut functions
		group.scheduleStop = this.scheduleStop;
		group.startEmitting = this.startEmitting;
		group.stopEmitting = this.stopEmitting;

		return group;
	} else if ( config.length === 1 ) {
		effect = new Kiwi.GameObjects.StatelessParticles(
			state, state.textures.particlePack3SpriteSheet,
			x, y,
			config[ 0 ] );

		return effect;
	} else {
		Kiwi.Log.error( "#ParticlePack3", "Error: Could not parse config" );
	}
};


Kiwi.Plugins.ParticlePack3.scheduleStop = function( milliseconds, remove ) {

	/**
	* Run `scheduleStop` on all members of an effect group.
	*
	* @method scheduleStop
	* @param milliseconds {number} Delay time in milliseconds before stopping
	* @param [remove] {boolean} Mark for removal
	*/

	var i;

	for ( i = 0; i < this.members.length; i++ ) {
		this.members[ i ].scheduleStop( milliseconds, remove );
	}
};


Kiwi.Plugins.ParticlePack3.startEmitting =
function( loop, removeOnComplete, numParts) {

	/**
	* Run `startEmitting` on all members of an effect group.
	*
	* @method startEmitting
	* @param loop {boolean} Set to true for continuous looping.
	*	Overrides and updates the config loop setting.
	* @param removeOnComplete {boolean} If not looping, then
	*	the gameobject will destroy itself after one full emission cycle.
	* @param numParts {number} Number of particles to generate,
	*	set on the config object - if not provided
	*	the current config value will be used 
	*/

	var i;

	for ( i = 0; i < this.members.length; i++ ) {
		this.members[ i ].startEmitting( loop, removeOnComplete, numParts );
	}
};


Kiwi.Plugins.ParticlePack3.stopEmitting = function( immediate, remove ) {

	/**
	* Run `stopEmitting` on all members of an effect group.
	*
	* @method stopEmitting
	* @param immediate {boolean} Stops the emitter
	*	and removes any existing particles.
	* @param remove {boolean} If true the gameobject will mark itself
	*	for removal either immediately, or after a completed cycle.
	*/

	var i;

	for ( i = 0; i < this.members.length; i++ ) {
		this.members[ i ].stopEmitting( immediate, remove );
	}
};
