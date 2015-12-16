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

Kiwi.Plugins.ParticlePack3.AcidBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AcidBullet effect.
		*
		* @method AcidBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AcidBullet
	*
	* @property AcidBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 10,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": 250,
			"velAngMin": -7,
			"velAngMax": 7,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 80,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 40,
			"endSize": 10,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.34509803921568627,
				0.9686274509803922,
				0
			],
			"colEnv3": [
				0.8862745098039215,
				0.9725490196078431,
				0
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				10,
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.7686274509803922,
				0.9725490196078431,
				0.047058823529411764
			],
			"colEnv3": [
				0.2784313725490196,
				0.9647058823529412,
				0.058823529411764705
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -6.3,
			"velAngMax": 6.3,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 1.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.20784313725490197,
				0.9647058823529412,
				0
			],
			"colEnv1": [
				0.796078431372549,
				0.9686274509803922,
				0
			],
			"colEnv2": [
				0.7490196078431373,
				0.9725490196078431,
				0
			],
			"colEnv3": [
				0.4117647058823529,
				0.9686274509803922,
				0
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.7686274509803922,
				0.9725490196078431,
				0.047058823529411764
			],
			"colEnv3": [
				0.2784313725490196,
				0.9647058823529412,
				0.058823529411764705
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 15,
			"endSize": 15,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.6,
				0.9764705882352941,
				0.403921568627451
			],
			"colEnv1": [
				0.8196078431372549,
				0.9764705882352941,
				0.36470588235294116
			],
			"colEnv2": [
				0.9019607843137255,
				0.9764705882352941,
				0.4588235294117647
			],
			"colEnv3": [
				0.5098039215686274,
				0.9686274509803922,
				0.3764705882352941
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.AcidFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AcidFlash effect.
		*
		* @method AcidFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AcidFlash
	*
	* @property AcidFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": -40,
			"velAngMin": -2,
			"velAngMax": 2,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6078431372549019,
				0.9725490196078431,
				0.11372549019607843
			],
			"colEnv1": [
				0.9019607843137255,
				0.9725490196078431,
				0.14901960784313725
			],
			"colEnv2": [
				0.4117647058823529,
				0.5450980392156862,
				0.0784313725490196
			],
			"colEnv3": [
				0.4745098039215686,
				0.6666666666666666,
				0.14901960784313725
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 9,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 802,
			"minVel": -978,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6745098039215687,
				0.9725490196078431,
				0.07450980392156863
			],
			"colEnv1": [
				0.9882352941176471,
				0.9176470588235294,
				0.023529411764705882
			],
			"colEnv2": [
				0.2549019607843137,
				0.5450980392156862,
				0.01568627450980392
			],
			"colEnv3": [
				0.6313725490196078,
				0.6666666666666666,
				0
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				7,
				8
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 802,
			"minVel": -978,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": -100,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 5,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.6745098039215687,
				0.9725490196078431,
				0.07450980392156863
			],
			"colEnv1": [
				0.9882352941176471,
				0.9176470588235294,
				0.023529411764705882
			],
			"colEnv2": [
				0.2549019607843137,
				0.5450980392156862,
				0.01568627450980392
			],
			"colEnv3": [
				0.6313725490196078,
				0.6666666666666666,
				0
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				4
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.AcidImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AcidImpact effect.
		*
		* @method AcidImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AcidImpact
	*
	* @property AcidImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.48627450980392156,
				0.7294117647058823,
				0.2627450980392157
			],
			"colEnv1": [
				0.9137254901960784,
				0.984313725490196,
				0.10588235294117647
			],
			"colEnv2": [
				0.30980392156862746,
				0.9764705882352941,
				0.03529411764705882
			],
			"colEnv3": [
				0.03529411764705882,
				0.9725490196078431,
				0.047058823529411764
			],
			"alphaGradient": [
				0,
				0.5,
				0.5,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 600,
			"velHeight": 600,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.4,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 8,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.7,
			"colEnv0": [
				0.9137254901960784,
				0.9803921568627451,
				0.047058823529411764
			],
			"colEnv1": [
				0.5764705882352941,
				0.9098039215686274,
				0.16470588235294117
			],
			"colEnv2": [
				0.49019607843137253,
				0.7568627450980392,
				0.10980392156862745
			],
			"colEnv3": [
				0,
				0.6823529411764706,
				0.07450980392156863
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				1
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		}
	]
};

Kiwi.Plugins.ParticlePack3.AsteroidBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AsteroidBullet effect.
		*
		* @method AsteroidBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AsteroidBullet
	*
	* @property AsteroidBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": -100,
			"velOffsetY": 50,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 100,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9450980392156862
			],
			"colEnv1": [
				0.996078431372549,
				0.796078431372549,
				0.7490196078431373
			],
			"colEnv2": [
				1,
				0.7411764705882353,
				0.6666666666666666
			],
			"colEnv3": [
				1,
				1,
				1
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				9
			]
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": -100,
			"velOffsetY": 50,
			"velAngMin": -2,
			"velAngMax": 2,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 70,
			"loop": true,
			"colEnvKeyframes": [
				0.45,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.9098039215686274
			],
			"colEnv1": [
				1,
				0.7333333333333333,
				0.6509803921568628
			],
			"colEnv2": [
				1,
				1,
				1
			],
			"colEnv3": [
				1,
				0.35294117647058826,
				0.2
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				23
			]
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 1.4486232791552935,
			"posLength": 139,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 358,
			"minVel": 0,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 10,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 143,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 769,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 0.3,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 40,
			"endSize": 10,
			"loop": true,
			"colEnvKeyframes": [
				0.3,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.6627450980392157,
				0.7725490196078432
			],
			"colEnv1": [
				1,
				0.6470588235294118,
				0.28627450980392155
			],
			"colEnv2": [
				1,
				0.37254901960784315,
				0.12941176470588237
			],
			"colEnv3": [
				0.996078431372549,
				0.2196078431372549,
				0
			],
			"alphaGradient": [
				0,
				1,
				0.5,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				23
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": -100,
			"velOffsetY": 50,
			"velAngMin": 6.28,
			"velAngMax": 6.28,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 1,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 40,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9882352941176471,
				0.9411764705882353,
				0.9333333333333333
			],
			"colEnv1": [
				1,
				0.9294117647058824,
				0.9098039215686274
			],
			"colEnv2": [
				1,
				1,
				1
			],
			"colEnv3": [
				1,
				1,
				1
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				14
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.AsteroidImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AsteroidImpact effect.
		*
		* @method AsteroidImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AsteroidImpact
	*
	* @property AsteroidImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.2,
			"colEnv0": [
				0.6196078431372549,
				0.40784313725490196,
				0.23529411764705882
			],
			"colEnv1": [
				0.5882352941176471,
				0.403921568627451,
				0.3764705882352941
			],
			"colEnv2": [
				0.596078431372549,
				0.43137254901960786,
				0.3058823529411765
			],
			"colEnv3": [
				0.5686274509803921,
				0.3803921568627451,
				0.2627450980392157
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				22,
				23
			]
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6196078431372549,
				0.40784313725490196,
				0.23529411764705882
			],
			"colEnv1": [
				0.5882352941176471,
				0.403921568627451,
				0.3764705882352941
			],
			"colEnv2": [
				0.596078431372549,
				0.43137254901960786,
				0.3058823529411765
			],
			"colEnv3": [
				0.5686274509803921,
				0.3803921568627451,
				0.2627450980392157
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				8,
				22,
				23
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.BluePlasmaBallBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 BluePlasmaBallBullet effect.
		*
		* @method BluePlasmaBallBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for BluePlasmaBallBullet
	*
	* @property BluePlasmaBallBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 60,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.07450980392156863,
				0.26666666666666666,
				0.9882352941176471
			],
			"colEnv1": [
				0.5725490196078431,
				0.8627450980392157,
				0.9921568627450981
			],
			"colEnv2": [
				0.41568627450980394,
				0.6313725490196078,
				1
			],
			"colEnv3": [
				0.043137254901960784,
				0.2235294117647059,
				0.984313725490196
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				9,
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 45,
			"endSize": 45,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.0196078431372549,
				0.3607843137254902,
				0.9882352941176471
			],
			"colEnv1": [
				0.30196078431372547,
				0.7450980392156863,
				0.9921568627450981
			],
			"colEnv2": [
				0.4470588235294118,
				0.8,
				1
			],
			"colEnv3": [
				0.0392156862745098,
				0.3568627450980392,
				0.9803921568627451
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 9,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.5,
			"maxLifespan": 0.8,
			"gravity": 0,
			"startSize": 30,
			"endSize": 70,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.00784313725490196,
				0.25098039215686274,
				0.9882352941176471
			],
			"colEnv1": [
				0.5019607843137255,
				0.8117647058823529,
				0.9921568627450981
			],
			"colEnv2": [
				0.8549019607843137,
				0.9529411764705882,
				1
			],
			"colEnv3": [
				0.08627450980392157,
				0.30196078431372547,
				0.9803921568627451
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				24
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.BluePlasmaBallImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 BluePlasmaBallImpact effect.
		*
		* @method BluePlasmaBallImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for BluePlasmaBallImpact
	*
	* @property BluePlasmaBallImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 50,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.0784313725490196,
				0.21568627450980393,
				0.9882352941176471
			],
			"colEnv1": [
				0.13725490196078433,
				0.396078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.23529411764705882,
				0.6705882352941176,
				0.9921568627450981
			],
			"colEnv3": [
				0.09803921568627451,
				0.20392156862745098,
				0.9882352941176471
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22,
				23
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 4,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.7294117647058823,
				0.8588235294117647,
				0.9882352941176471
			],
			"colEnv1": [
				0.13725490196078433,
				0.396078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.23529411764705882,
				0.6705882352941176,
				0.9921568627450981
			],
			"colEnv3": [
				0.09803921568627451,
				0.20392156862745098,
				0.9882352941176471
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2,
				7
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.LightningBallBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningBallBullet effect.
		*
		* @method LightningBallBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningBallBullet
	*
	* @property LightningBallBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 200,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.3,
			"minLifespan": 0.2,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 60,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.8,
			"colEnv0": [
				0.7137254901960784,
				0.6392156862745098,
				0.9921568627450981
			],
			"colEnv1": [
				0.1803921568627451,
				0.4196078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.7372549019607844,
				0.8196078431372549,
				1
			],
			"colEnv3": [
				0.13725490196078433,
				0.27450980392156865,
				0.984313725490196
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.8
			],
			"cells": [
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 251.2,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 98,
			"posHeight": 69,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 40,
			"posRandomLine": false,
			"posConstrainRadial": false,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 100,
			"minVel": -99,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 360,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 60,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.39215686274509803,
				0.5764705882352941,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.5294117647058824,
				1
			],
			"colEnv2": [
				0.15294117647058825,
				0.38823529411764707,
				1
			],
			"colEnv3": [
				0.7137254901960784,
				0.2784313725490196,
				1
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				7,
				11
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.LightningBallImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningBallImpact effect.
		*
		* @method LightningBallImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningBallImpact
	*
	* @property LightningBallImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -100,
			"velAngMax": 100,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 180,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.592156862745098,
				0.803921568627451,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.796078431372549,
				0.792156862745098,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -26,
			"velAngMax": 26,
			"velRadius": 30,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 150,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.2823529411764706,
				0.4196078431372549,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.7294117647058823,
				0.596078431372549,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				8,
				22,
				23
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -100,
			"velAngMax": 100,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0.1,
			"maxStartTime": 0.2,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 20,
			"endSize": 200,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.5058823529411764,
				0.26666666666666666,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.5333333333333333,
				0.7019607843137254,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.LightningGunBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningGunBullet effect.
		*
		* @method LightningGunBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningGunBullet
	*
	* @property LightningGunBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 50,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 5,
			"posHeight": 5,
			"posConstrainRect": true,
			"posAngle": 1.5707963267948966,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": -20,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 5,
			"velHeight": 55,
			"velAngle": 1.5707963267948966,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 60,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 1,
			"colEnv0": [
				0.6588235294117647,
				0.7411764705882353,
				0.9882352941176471
			],
			"colEnv1": [
				0.8196078431372549,
				0.7647058823529411,
				1
			],
			"colEnv2": [
				0.592156862745098,
				0.6431372549019608,
				1
			],
			"colEnv3": [
				0.7019607843137254,
				0.6705882352941176,
				1
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.2,
				0.8
			],
			"additive": true,
			"cells": [
				11
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.LightningGunFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningGunFlash effect.
		*
		* @method LightningGunFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningGunFlash
	*
	* @property LightningGunFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": -200,
			"velAngMin": -0.5,
			"velAngMax": 0.5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 1,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				15
			]
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 20,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": -20,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 20,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 10,
			"velRandomLine": false,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 156,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				9
			]
		},
		{
			"numParts": 6,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 20,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -8,
			"velAngMax": 8,
			"velRadius": 39.4,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 150,
			"endSize": 50,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 0.3,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				16
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.LightningGunImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningGunImpact effect.
		*
		* @method LightningGunImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningGunImpact
	*
	* @property LightningGunImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -6,
			"velAngMax": 6,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 120,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.8509803921568627,
				0.796078431372549,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.796078431372549,
				0.792156862745098,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 8,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -6,
			"velAngMax": 6,
			"velRadius": 30,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 20,
			"endSize": 120,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.8509803921568627,
				0.796078431372549,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.796078431372549,
				0.792156862745098,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				8,
				22,
				23
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -6,
			"velAngMax": 6,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 5,
			"endSize": 2,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.8509803921568627,
				0.796078431372549,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.796078431372549,
				0.792156862745098,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeBallBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBallBullet effect.
		*
		* @method OrangeBallBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeBallBullet
	*
	* @property OrangeBallBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 5,
			"endSize": 5,
			"loop": true,
			"colEnvKeyframes": [
				0.3,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9098039215686274,
				0.803921568627451
			],
			"colEnv1": [
				0.996078431372549,
				0.8549019607843137,
				0.6235294117647059
			],
			"colEnv2": [
				0.9568627450980393,
				0.8862745098039215,
				0.792156862745098
			],
			"colEnv3": [
				0.9921568627450981,
				0.8941176470588236,
				0.8
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				2
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": -100,
			"velOffsetY": 50,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 22,
			"endSize": 22,
			"loop": true,
			"colEnvKeyframes": [
				0.3,
				0.6
			],
			"alpha": 0.6,
			"colEnv0": [
				0.996078431372549,
				0.45098039215686275,
				0
			],
			"colEnv1": [
				1,
				0.25882352941176473,
				0.09411764705882353
			],
			"colEnv2": [
				1,
				0.3058823529411765,
				0.043137254901960784
			],
			"colEnv3": [
				0.996078431372549,
				0.4470588235294118,
				0
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				7
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeBallImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBallImpact effect.
		*
		* @method OrangeBallImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeBallImpact
	*
	* @property OrangeBallImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 150,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8470588235294118,
				0.4196078431372549
			],
			"colEnv1": [
				1,
				0.6745098039215687,
				0.054901960784313725
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.16470588235294117,
				0.11764705882352941
			],
			"alphaGradient": [
				0,
				0.7,
				0.4,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				20
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.2,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9411764705882353
			],
			"colEnv1": [
				0.8196078431372549,
				0.17647058823529413,
				0.01568627450980392
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				3
			]
		},
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.8,
			"colEnv0": [
				0.9882352941176471,
				0.8549019607843137,
				0.42745098039215684
			],
			"colEnv1": [
				1,
				0.5411764705882353,
				0
			],
			"colEnv2": [
				0.9647058823529412,
				0.1450980392156863,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				9
			]
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 2,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8156862745098039,
				0.03529411764705882
			],
			"colEnv1": [
				1,
				0.396078431372549,
				0.011764705882352941
			],
			"colEnv2": [
				1,
				0.19607843137254902,
				0
			],
			"colEnv3": [
				0.996078431372549,
				0.19215686274509805,
				0.08627450980392157
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeBoltBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBoltBullet effect.
		*
		* @method OrangeBoltBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeBoltBullet
	*
	* @property OrangeBoltBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 50,
			"loop": true,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.5411764705882353,
				0.09411764705882353
			],
			"colEnv1": [
				0.8196078431372549,
				0.17647058823529413,
				0.01568627450980392
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				19
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeBoltImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBoltImpact effect.
		*
		* @method OrangeBoltImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeBoltImpact
	*
	* @property OrangeBoltImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 0,
			"minVel": 0,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 70,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.3,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9411764705882353
			],
			"colEnv1": [
				1,
				0.6862745098039216,
				0
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.2196078431372549,
				0.027450980392156862
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				3
			]
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 0,
			"minVel": 0,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 40,
			"endSize": 40,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.5,
			"colEnv0": [
				0.9882352941176471,
				0.796078431372549,
				0.5803921568627451
			],
			"colEnv1": [
				1,
				0.7215686274509804,
				0.2784313725490196
			],
			"colEnv2": [
				0.9647058823529412,
				0.16862745098039217,
				0.047058823529411764
			],
			"colEnv3": [
				1,
				0.2196078431372549,
				0.027450980392156862
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				9
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeStreaksBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeStreaksBullet effect.
		*
		* @method OrangeStreaksBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeStreaksBullet
	*
	* @property OrangeStreaksBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 50,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 300,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 2,
			"minLifespan": 0.1,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 5,
			"endSize": 5,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.6039215686274509,
				0.23137254901960785
			],
			"colEnv1": [
				1,
				0.28627450980392155,
				0
			],
			"colEnv2": [
				1,
				0.18823529411764706,
				0
			],
			"colEnv3": [
				0.9568627450980393,
				0.17254901960784313,
				0
			],
			"alphaGradient": [
				1,
				1,
				0.5,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				10
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 300,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 30,
			"endSize": 30,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.2235294117647059,
				0.03137254901960784
			],
			"colEnv1": [
				1,
				0.49019607843137253,
				0.2784313725490196
			],
			"colEnv2": [
				0.9921568627450981,
				0.7647058823529411,
				0
			],
			"colEnv3": [
				0.9568627450980393,
				0.17254901960784313,
				0
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				7
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.OrangeStreaksImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeStreaksImpact effect.
		*
		* @method OrangeStreaksImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for OrangeStreaksImpact
	*
	* @property OrangeStreaksImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 150,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8470588235294118,
				0.4196078431372549
			],
			"colEnv1": [
				1,
				0.6745098039215687,
				0.054901960784313725
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.16470588235294117,
				0.11764705882352941
			],
			"alphaGradient": [
				0,
				0.7,
				0.4,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				20
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.2,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9411764705882353
			],
			"colEnv1": [
				0.8196078431372549,
				0.17647058823529413,
				0.01568627450980392
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				3
			]
		},
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.8,
			"colEnv0": [
				0.9882352941176471,
				0.8549019607843137,
				0.42745098039215684
			],
			"colEnv1": [
				1,
				0.5411764705882353,
				0
			],
			"colEnv2": [
				0.9647058823529412,
				0.1450980392156863,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				9
			]
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 3,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8156862745098039,
				0.03529411764705882
			],
			"colEnv1": [
				1,
				0.396078431372549,
				0.011764705882352941
			],
			"colEnv2": [
				1,
				0.19607843137254902,
				0
			],
			"colEnv3": [
				0.996078431372549,
				0.19215686274509805,
				0.08627450980392157
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.PinkPlasmaShotBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 PinkPlasmaShotBullet effect.
		*
		* @method PinkPlasmaShotBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for PinkPlasmaShotBullet
	*
	* @property PinkPlasmaShotBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 40,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.24313725490196078,
				0.9254901960784314
			],
			"colEnv1": [
				0.7215686274509804,
				0.2235294117647059,
				0.9882352941176471
			],
			"colEnv2": [
				0.3764705882352941,
				0.24313725490196078,
				0.9921568627450981
			],
			"colEnv3": [
				1,
				0.22745098039215686,
				0.8431372549019608
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				4
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 80,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				1,
				0.24313725490196078,
				0.9254901960784314
			],
			"colEnv1": [
				0.8941176470588236,
				0.3686274509803922,
				0.9882352941176471
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				1,
				0.22745098039215686,
				0.8431372549019608
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.23137254901960785,
				0.27058823529411763,
				0.9882352941176471
			],
			"colEnv1": [
				0.8941176470588236,
				0.3686274509803922,
				0.9882352941176471
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				7,
				8
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.PinkPlasmaShotFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 PinkPlasmaShotFlash effect.
		*
		* @method PinkPlasmaShotFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for PinkPlasmaShotFlash
	*
	* @property PinkPlasmaShotFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 802,
			"minVel": -978,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6078431372549019,
				0.21568627450980393,
				0.9921568627450981
			],
			"colEnv1": [
				1,
				0.23137254901960785,
				0.6431372549019608
			],
			"colEnv2": [
				0.14901960784313725,
				0.12549019607843137,
				0.5568627450980392
			],
			"colEnv3": [
				0.6862745098039216,
				0.1450980392156863,
				0.5725490196078431
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				7,
				8
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.27450980392156865,
				0.2823529411764706,
				0.9921568627450981
			],
			"colEnv1": [
				1,
				0.23137254901960785,
				0.6431372549019608
			],
			"colEnv2": [
				0.14901960784313725,
				0.12549019607843137,
				0.5568627450980392
			],
			"colEnv3": [
				0.6862745098039216,
				0.1450980392156863,
				0.5725490196078431
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.PinkPlasmaShotImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 PinkPlasmaShotImpact effect.
		*
		* @method PinkPlasmaShotImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for PinkPlasmaShotImpact
	*
	* @property PinkPlasmaShotImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.97,
			"colEnv0": [
				0.23137254901960785,
				0.27058823529411763,
				0.9882352941176471
			],
			"colEnv1": [
				0.996078431372549,
				0.7058823529411765,
				0.9803921568627451
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 7,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9803921568627451,
				0.8470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.23137254901960785,
				0.9921568627450981
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.RadarScannerFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 RadarScannerFlash effect.
		*
		* @method RadarScannerFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for RadarScannerFlash
	*
	* @property RadarScannerFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": -100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 100,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.6,
			"maxLifespan": 0.6,
			"gravity": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				13
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 100,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 1,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 1,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 150,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.5,
				0.6
			],
			"cells": [
				18
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": -3,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 2,
			"maxLifespan": 2,
			"gravity": 0,
			"startSize": 150,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.5,
				0.6
			],
			"cells": [
				17
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.RedLaserBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 RedLaserBullet effect.
		*
		* @method RedLaserBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for RedLaserBullet
	*
	* @property RedLaserBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 100,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.4588235294117647,
				0.45098039215686275
			],
			"colEnv1": [
				0.996078431372549,
				0.15294117647058825,
				0.17254901960784313
			],
			"colEnv2": [
				1,
				0.1843137254901961,
				0.22745098039215686
			],
			"colEnv3": [
				0.996078431372549,
				0.20784313725490197,
				0.058823529411764705
			],
			"alphaGradient": [
				1,
				1,
				0.5,
				1
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				19
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 50,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 5,
			"posHeight": 100,
			"posConstrainRect": false,
			"posAngle": 1.5707963267948966,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 50,
			"minVel": -50,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": -100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 5,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 10,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8784313725490196,
				0.8627450980392157
			],
			"colEnv1": [
				0.996078431372549,
				0.14901960784313725,
				0
			],
			"colEnv2": [
				0.996078431372549,
				0.14901960784313725,
				0
			],
			"colEnv3": [
				1,
				0.1607843137254902,
				0.0784313725490196
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				7
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.RedLaserFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 RedLaserFlash effect.
		*
		* @method RedLaserFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for RedLaserFlash
	*
	* @property RedLaserFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8352941176470589,
				0.8588235294117647
			],
			"colEnv1": [
				1,
				0.14901960784313725,
				0
			],
			"colEnv2": [
				0.5607843137254902,
				0.09803921568627451,
				0
			],
			"colEnv3": [
				0.6862745098039216,
				0.10980392156862745,
				0
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.RedLaserImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 RedLaserImpact effect.
		*
		* @method RedLaserImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for RedLaserImpact
	*
	* @property RedLaserImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 3,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.19607843137254902,
				0.0196078431372549
			],
			"colEnv1": [
				0.996078431372549,
				0.1568627450980392,
				0.1607843137254902
			],
			"colEnv2": [
				1,
				0.1568627450980392,
				0
			],
			"colEnv3": [
				0.996078431372549,
				0.14901960784313725,
				0.027450980392156862
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.15,
			"maxLifespan": 0.15,
			"gravity": 0,
			"startSize": 10,
			"endSize": 40,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.15294117647058825,
				0
			],
			"colEnv1": [
				0.996078431372549,
				0.16470588235294117,
				0.20392156862745098
			],
			"colEnv2": [
				1,
				0.17647058823529413,
				0
			],
			"colEnv3": [
				0.996078431372549,
				0.15294117647058825,
				0.1450980392156863
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				3,
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.Rocket1Bullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket1Bullet effect.
		*
		* @method Rocket1Bullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket1Bullet
	*
	* @property Rocket1Bullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 35,
			"posOffsetX": 0,
			"posOffsetY": 30,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 5,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 50,
			"loop": true,
			"colEnvKeyframes": [
				0.1,
				0.4
			],
			"alpha": 0.5,
			"colEnv0": [
				0.4588235294117647,
				0.43137254901960786,
				0.43529411764705883
			],
			"colEnv1": [
				0.4627450980392157,
				0.42745098039215684,
				0.40784313725490196
			],
			"colEnv2": [
				0.34901960784313724,
				0.34509803921568627,
				0.3176470588235294
			],
			"colEnv3": [
				0.2901960784313726,
				0.29411764705882354,
				0.2823529411764706
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.4
			],
			"additive": false,
			"cells": [
				22
			]
		},
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 30,
			"posRadius": 3,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 2,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -3,
			"velAngMax": 3,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.4,
			"minLifespan": 0.2,
			"maxLifespan": 0.8,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 15,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.1,
				0.4
			],
			"alpha": 1,
			"colEnv0": [
				0.9882352941176471,
				0.6980392156862745,
				0.40784313725490196
			],
			"colEnv1": [
				0.996078431372549,
				0.43137254901960786,
				0.12549019607843137
			],
			"colEnv2": [
				1,
				0.1568627450980392,
				0
			],
			"colEnv3": [
				1,
				0.19215686274509805,
				0.10588235294117647
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.4
			],
			"additive": true,
			"cells": [
				9,
				10,
				23
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 10,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 80,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.984313725490196,
				0.9450980392156862,
				0.9411764705882353
			],
			"colEnv1": [
				0.996078431372549,
				0.7137254901960784,
				0.7294117647058823
			],
			"colEnv2": [
				0.7333333333333333,
				0.5764705882352941,
				0.5529411764705883
			],
			"colEnv3": [
				0.9882352941176471,
				0.9882352941176471,
				0.9882352941176471
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.6
			],
			"additive": false,
			"cells": [
				21
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.Rocket1Flash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket1Flash effect.
		*
		* @method Rocket1Flash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket1Flash
	*
	* @property Rocket1Flash.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 802,
			"minVel": -978,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6078431372549019,
				0.21568627450980393,
				0.9921568627450981
			],
			"colEnv1": [
				1,
				0.23137254901960785,
				0.6431372549019608
			],
			"colEnv2": [
				0.14901960784313725,
				0.12549019607843137,
				0.5568627450980392
			],
			"colEnv3": [
				0.6862745098039216,
				0.1450980392156863,
				0.5725490196078431
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				7,
				8
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.27450980392156865,
				0.2823529411764706,
				0.9921568627450981
			],
			"colEnv1": [
				1,
				0.23137254901960785,
				0.6431372549019608
			],
			"colEnv2": [
				0.14901960784313725,
				0.12549019607843137,
				0.5568627450980392
			],
			"colEnv3": [
				0.6862745098039216,
				0.1450980392156863,
				0.5725490196078431
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.Rocket1Impact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket1Impact effect.
		*
		* @method Rocket1Impact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket1Impact
	*
	* @property Rocket1Impact.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 1,
			"endSize": 200,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5647058823529412,
				0.12941176470588237
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 122,
			"minVel": -143,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 400,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 80,
			"endSize": 5,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.996078431372549,
				0.4980392156862745,
				0.1607843137254902
			],
			"colEnv1": [
				0.6549019607843137,
				0.34901960784313724,
				0.29411764705882354
			],
			"colEnv2": [
				0.611764705882353,
				0.3568627450980392,
				0.24705882352941178
			],
			"colEnv3": [
				0.5803921568627451,
				0.2980392156862745,
				0.25882352941176473
			],
			"alphaGradient": [
				0,
				0,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 3.1419999999999995,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 80,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				1,
				0.21176470588235294,
				0
			],
			"colEnv1": [
				1,
				0.4117647058823529,
				0
			],
			"colEnv2": [
				1,
				0.4235294117647059,
				0.06666666666666667
			],
			"colEnv3": [
				0.996078431372549,
				0.49411764705882355,
				0.19215686274509805
			],
			"alphaGradient": [
				0,
				0.6,
				0.3,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				8,
				22
			]
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 50,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5490196078431373,
				0
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5647058823529412,
				0.12941176470588237
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.Rocket2Bullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket2Bullet effect.
		*
		* @method Rocket2Bullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket2Bullet
	*
	* @property Rocket2Bullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 50,
			"posRadius": 3,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 2,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.1,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.1,
				0.4
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.34509803921568627,
				0.17647058823529413
			],
			"colEnv1": [
				0.996078431372549,
				0.25098039215686274,
				0.09019607843137255
			],
			"colEnv2": [
				1,
				0.1568627450980392,
				0
			],
			"colEnv3": [
				1,
				0.19215686274509805,
				0.10588235294117647
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.4
			],
			"additive": true,
			"cells": [
				4
			]
		},
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": 30,
			"posRadius": 3,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 2,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -2,
			"velAngMax": 2,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.3,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 120,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.2,
				0.4
			],
			"alpha": 1,
			"colEnv0": [
				0.9882352941176471,
				0.7294117647058823,
				0.39215686274509803
			],
			"colEnv1": [
				0.996078431372549,
				0.25098039215686274,
				0.09019607843137255
			],
			"colEnv2": [
				1,
				0.1568627450980392,
				0
			],
			"colEnv3": [
				1,
				0.19215686274509805,
				0.10588235294117647
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.4
			],
			"additive": true,
			"cells": [
				24
			]
		},
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 30,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 2,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -3,
			"velAngMax": 3,
			"velRadius": 40,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.4,
			"minLifespan": 0.2,
			"maxLifespan": 0.8,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.2,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.984313725490196,
				0.5803921568627451,
				0.09019607843137255
			],
			"colEnv1": [
				1,
				0.47058823529411764,
				0.0196078431372549
			],
			"colEnv2": [
				1,
				0.38823529411764707,
				0.011764705882352941
			],
			"colEnv3": [
				1,
				0.19215686274509805,
				0.10588235294117647
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.4
			],
			"additive": true,
			"cells": [
				2
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 10,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 80,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.984313725490196,
				0.8313725490196079,
				0.8313725490196079
			],
			"colEnv1": [
				1,
				0.4823529411764706,
				0.42745098039215684
			],
			"colEnv2": [
				0.7333333333333333,
				0.5058823529411764,
				0.5058823529411764
			],
			"colEnv3": [
				0.9882352941176471,
				0.8784313725490196,
				0.8666666666666667
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.3,
				0.6
			],
			"additive": false,
			"cells": [
				21
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.Rocket2Impact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket2Impact effect.
		*
		* @method Rocket2Impact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket2Impact
	*
	* @property Rocket2Impact.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 200,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9882352941176471,
				0.7725490196078432,
				0.07450980392156863
			],
			"colEnv2": [
				0.996078431372549,
				0.6823529411764706,
				0.043137254901960784
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 3.1419999999999995,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.4,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 80,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				1,
				0.21176470588235294,
				0
			],
			"colEnv1": [
				1,
				0.4117647058823529,
				0
			],
			"colEnv2": [
				1,
				0.4235294117647059,
				0.06666666666666667
			],
			"colEnv3": [
				0.996078431372549,
				0.49411764705882355,
				0.19215686274509805
			],
			"alphaGradient": [
				0,
				0.6,
				0.3,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				8,
				22
			]
		},
		{
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 50,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 122,
			"minVel": -143,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.7,
			"gravity": 0,
			"startSize": 4,
			"endSize": 2,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.2784313725490196,
				0.0784313725490196
			],
			"colEnv1": [
				0.9882352941176471,
				0.7843137254901961,
				0.4470588235294118
			],
			"colEnv2": [
				0.996078431372549,
				0.44313725490196076,
				0.15294117647058825
			],
			"colEnv3": [
				1,
				0.23137254901960785,
				0
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				6,
				7
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 122,
			"minVel": -143,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 80,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.2784313725490196,
				0.0784313725490196
			],
			"colEnv1": [
				0.9921568627450981,
				0.6627450980392157,
				0.26666666666666666
			],
			"colEnv2": [
				1,
				0.2823529411764706,
				0.06666666666666667
			],
			"colEnv3": [
				1,
				0.33725490196078434,
				0.09411764705882353
			],
			"alphaGradient": [
				0,
				0,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 50,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravity": 0,
			"startSize": 3,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.5176470588235295,
				0.00784313725490196
			],
			"colEnv1": [
				0.996078431372549,
				0.4196078431372549,
				0
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 500,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5490196078431373,
				0
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.SonarPulseBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 SonarPulseBullet effect.
		*
		* @method SonarPulseBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for SonarPulseBullet
	*
	* @property SonarPulseBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.1419999999999995,
			"posWidth": 60,
			"posHeight": 20,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": 100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 20,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 0.3,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 6,
			"endSize": 2,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.1803921568627451,
				0.9647058823529412,
				0.03137254901960784
			],
			"colEnv1": [
				0.5098039215686274,
				0.9764705882352941,
				0.043137254901960784
			],
			"colEnv2": [
				0.3607843137254902,
				0.9764705882352941,
				0.19215686274509805
			],
			"colEnv3": [
				0.5490196078431373,
				0.9803921568627451,
				0.19607843137254902
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				2
			]
		},
		{
			"numParts": 7,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 0.3,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 10,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.2235294117647059,
				0.9647058823529412,
				0
			],
			"colEnv1": [
				0.5098039215686274,
				0.9764705882352941,
				0.043137254901960784
			],
			"colEnv2": [
				0.3607843137254902,
				0.9764705882352941,
				0.19215686274509805
			],
			"colEnv3": [
				0.5490196078431373,
				0.9803921568627451,
				0.19607843137254902
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				13
			]
		}
	]
};

Kiwi.Plugins.ParticlePack3.SonarPulseImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 SonarPulseImpact effect.
		*
		* @method SonarPulseImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for SonarPulseImpact
	*
	* @property SonarPulseImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 30,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": -100,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.3,
			"maxLifespan": 0.8,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 2,
			"endSize": 80,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.2,
			"colEnv0": [
				0,
				0.9647058823529412,
				0.047058823529411764
			],
			"colEnv1": [
				0.39215686274509803,
				0.9803921568627451,
				0.1607843137254902
			],
			"colEnv2": [
				0.1411764705882353,
				0.9764705882352941,
				0
			],
			"colEnv3": [
				0.3176470588235294,
				0.9764705882352941,
				0.0784313725490196
			],
			"alphaGradient": [
				0,
				1,
				0.5,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				8,
				22,
				23
			]
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.1843137254901961,
				0.9176470588235294,
				0
			],
			"colEnv1": [
				0.9254901960784314,
				0.9882352941176471,
				0.4823529411764706
			],
			"colEnv2": [
				0.30980392156862746,
				0.9764705882352941,
				0.03529411764705882
			],
			"colEnv3": [
				0.03529411764705882,
				0.9725490196078431,
				0.047058823529411764
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9,
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 600,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 8,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.7568627450980392,
				0.9764705882352941,
				0.6980392156862745
			],
			"colEnv1": [
				0.4235294117647059,
				0.9686274509803922,
				0.23137254901960785
			],
			"colEnv2": [
				0.1450980392156863,
				0.9686274509803922,
				0.10196078431372549
			],
			"colEnv3": [
				0,
				0.9647058823529412,
				0.12156862745098039
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				1
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.StarFireBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 StarFireBullet effect.
		*
		* @method StarFireBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for StarFireBullet
	*
	* @property StarFireBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				1,
				0.23529411764705882,
				0.8196078431372549
			],
			"colEnv1": [
				0.9921568627450981,
				0.9725490196078431,
				0
			],
			"colEnv2": [
				1,
				0.9333333333333333,
				0.03137254901960784
			],
			"colEnv3": [
				0.9921568627450981,
				0.21176470588235294,
				0.7647058823529411
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 30,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 15,
			"endSize": 5,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9803921568627451,
				0.6745098039215687
			],
			"colEnv1": [
				0.996078431372549,
				0.8745098039215686,
				0
			],
			"colEnv2": [
				1,
				0.6,
				0.23137254901960785
			],
			"colEnv3": [
				0.9921568627450981,
				0.21568627450980393,
				0.33725490196078434
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				6
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 9,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.5,
			"maxLifespan": 0.8,
			"gravity": 0,
			"startSize": 30,
			"endSize": 70,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				1,
				0.23529411764705882,
				0.9098039215686274
			],
			"colEnv1": [
				0.9921568627450981,
				0.9254901960784314,
				0.611764705882353
			],
			"colEnv2": [
				1,
				0.9294117647058824,
				0.00784313725490196
			],
			"colEnv3": [
				0.9921568627450981,
				0.23137254901960785,
				0.9019607843137255
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				24
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 25,
			"endSize": 25,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.7098039215686275,
				0.9333333333333333
			],
			"colEnv1": [
				0.9921568627450981,
				0.8980392156862745,
				0.5215686274509804
			],
			"colEnv2": [
				1,
				0.9490196078431372,
				0.611764705882353
			],
			"colEnv3": [
				0.9882352941176471,
				0.6980392156862745,
				0.9568627450980393
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				6
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.StarFireFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 StarFireFlash effect.
		*
		* @method StarFireFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for StarFireFlash
	*
	* @property StarFireFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 15,
			"endSize": 10,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.9294117647058824,
				0.7333333333333333
			],
			"colEnv1": [
				1,
				0.8627450980392157,
				0
			],
			"colEnv2": [
				1,
				0.6392156862745098,
				0.16470588235294117
			],
			"colEnv3": [
				1,
				0.16470588235294117,
				0.10196078431372549
			],
			"alphaGradient": [
				0,
				1,
				0.4,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				6
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9764705882352941,
				0.8588235294117647
			],
			"colEnv1": [
				0.9921568627450981,
				0.8823529411764706,
				0.06666666666666667
			],
			"colEnv2": [
				0.5607843137254902,
				0.4,
				0.06666666666666667
			],
			"colEnv3": [
				0.6862745098039216,
				0.13333333333333333,
				0.054901960784313725
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.StarFireImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 StarFireImpact effect.
		*
		* @method StarFireImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for StarFireImpact
	*
	* @property StarFireImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.97,
			"colEnv0": [
				0.23137254901960785,
				0.27058823529411763,
				0.9882352941176471
			],
			"colEnv1": [
				0.996078431372549,
				0.7058823529411765,
				0.9803921568627451
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 7,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9803921568627451,
				0.8470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.23137254901960785,
				0.9921568627450981
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};

Kiwi.Plugins.ParticlePack3.TractorBeamFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 TractorBeamFlash effect.
		*
		* @method TractorBeamFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for TractorBeamFlash
	*
	* @property TractorBeamFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": -100,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 1,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 80,
			"endSize": 30,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.8,
			"colEnv0": [
				0.7098039215686275,
				0.2784313725490196,
				0.9921568627450981
			],
			"colEnv1": [
				0.1803921568627451,
				0.4196078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.5137254901960784,
				0.2196078431372549,
				1
			],
			"colEnv3": [
				0.13725490196078433,
				0.27450980392156865,
				0.984313725490196
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				13
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 8,
			"posOffsetX": 0,
			"posOffsetY": -100,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 40,
			"posRandomLine": false,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 200,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.6,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.39215686274509803,
				0.5764705882352941,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.5294117647058824,
				1
			],
			"colEnv2": [
				0.15294117647058825,
				0.38823529411764707,
				1
			],
			"colEnv3": [
				0.7137254901960784,
				0.2784313725490196,
				1
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				19
			]
		},
		{
			"numParts": 8,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 251.2,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 98,
			"posHeight": 69,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 40,
			"posRandomLine": false,
			"posConstrainRadial": false,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 100,
			"minVel": -99,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 3,
			"velRadius": 360,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 200,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.39215686274509803,
				0.5764705882352941,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.5294117647058824,
				1
			],
			"colEnv2": [
				0.15294117647058825,
				0.38823529411764707,
				1
			],
			"colEnv3": [
				0.7137254901960784,
				0.2784313725490196,
				1
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				8
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": -3,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 2,
			"maxLifespan": 2,
			"gravity": 0,
			"startSize": 150,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.5,
				0.6
			],
			"cells": [
				17
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
