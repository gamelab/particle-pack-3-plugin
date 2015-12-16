Kiwi.Plugins.ParticlePack3.StarFireBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 StarFireBullet effect.
		*
		* @method StarFireBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for StarFireBullet
	*
	* @property StarFireBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
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
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -20,
			"velAngMax": 20,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				1,
				0.23529411764705882,
				0.8196078431372549
			],
			"colEnv1": [
				0.9921568627450981,
				0.9725490196078431,
				0
			],
			"colEnv2": [
				1,
				0.9333333333333333,
				0.03137254901960784
			],
			"colEnv3": [
				0.9921568627450981,
				0.21176470588235294,
				0.7647058823529411
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
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
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 150,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 30,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 15,
			"endSize": 5,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9803921568627451,
				0.6745098039215687
			],
			"colEnv1": [
				0.996078431372549,
				0.8745098039215686,
				0
			],
			"colEnv2": [
				1,
				0.6,
				0.23137254901960785
			],
			"colEnv3": [
				0.9921568627450981,
				0.21568627450980393,
				0.33725490196078434
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				6
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 9,
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
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.5,
			"maxLifespan": 0.8,
			"gravity": 0,
			"startSize": 30,
			"endSize": 70,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				1,
				0.23529411764705882,
				0.9098039215686274
			],
			"colEnv1": [
				0.9921568627450981,
				0.9254901960784314,
				0.611764705882353
			],
			"colEnv2": [
				1,
				0.9294117647058824,
				0.00784313725490196
			],
			"colEnv3": [
				0.9921568627450981,
				0.23137254901960785,
				0.9019607843137255
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				24
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
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
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 4.1887902047863905,
			"velRadialEnd": 5.23598775598299,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 25,
			"endSize": 25,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.7098039215686275,
				0.9333333333333333
			],
			"colEnv1": [
				0.9921568627450981,
				0.8980392156862745,
				0.5215686274509804
			],
			"colEnv2": [
				1,
				0.9490196078431372,
				0.611764705882353
			],
			"colEnv3": [
				0.9882352941176471,
				0.6980392156862745,
				0.9568627450980393
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
			],
			"alphaStops": [
				0.4,
				0.6
			],
			"cells": [
				6
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
