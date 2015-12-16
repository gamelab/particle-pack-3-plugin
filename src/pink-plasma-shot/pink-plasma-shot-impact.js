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
