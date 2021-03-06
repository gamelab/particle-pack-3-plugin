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
