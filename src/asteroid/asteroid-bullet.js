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
