Kiwi.Plugins.ParticlePack3.Rocket2Bullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket2Bullet effect.
		*
		* @method Rocket2Bullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket2Bullet
	*
	* @property Rocket2Bullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 10,
			"posOffsetX": 0,
			"posOffsetY": 50,
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
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.1,
			"maxLifespan": 0.5,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.1,
				0.4
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.34509803921568627,
				0.17647058823529413
			],
			"colEnv1": [
				0.996078431372549,
				0.25098039215686274,
				0.09019607843137255
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
				1,
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
				4
			]
		},
		{
			"numParts": 5,
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
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -2,
			"velAngMax": 2,
			"velRadius": 20,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.3,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 120,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.2,
				0.4
			],
			"alpha": 1,
			"colEnv0": [
				0.9882352941176471,
				0.7294117647058823,
				0.39215686274509803
			],
			"colEnv1": [
				0.996078431372549,
				0.25098039215686274,
				0.09019607843137255
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
				1,
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
				24
			]
		},
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 30,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 2,
			"posRandomLine": true,
			"posConstrainRadial": true,
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
			"velAngMin": -3,
			"velAngMax": 3,
			"velRadius": 40,
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
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.2,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.984313725490196,
				0.5803921568627451,
				0.09019607843137255
			],
			"colEnv1": [
				1,
				0.47058823529411764,
				0.0196078431372549
			],
			"colEnv2": [
				1,
				0.38823529411764707,
				0.011764705882352941
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
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.984313725490196,
				0.8313725490196079,
				0.8313725490196079
			],
			"colEnv1": [
				1,
				0.4823529411764706,
				0.42745098039215684
			],
			"colEnv2": [
				0.7333333333333333,
				0.5058823529411764,
				0.5058823529411764
			],
			"colEnv3": [
				0.9882352941176471,
				0.8784313725490196,
				0.8666666666666667
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
