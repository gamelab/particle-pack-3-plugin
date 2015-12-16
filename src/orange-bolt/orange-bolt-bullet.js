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
