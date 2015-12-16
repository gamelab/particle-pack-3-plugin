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
