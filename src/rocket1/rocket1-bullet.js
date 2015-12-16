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
