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
