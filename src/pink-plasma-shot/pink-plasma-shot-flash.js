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
