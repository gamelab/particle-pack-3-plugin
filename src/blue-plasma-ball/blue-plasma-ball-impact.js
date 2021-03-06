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
