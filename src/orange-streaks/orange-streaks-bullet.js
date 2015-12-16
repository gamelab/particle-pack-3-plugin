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
