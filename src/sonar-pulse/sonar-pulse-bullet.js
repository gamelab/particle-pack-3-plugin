Kiwi.Plugins.ParticlePack3.SonarPulseBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 SonarPulseBullet effect.
		*
		* @method SonarPulseBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for SonarPulseBullet
	*
	* @property SonarPulseBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.1419999999999995,
			"posWidth": 60,
			"posHeight": 20,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 200,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
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
			"velLength": 20,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 1,
			"minLifespan": 0.3,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 6,
			"endSize": 2,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.1803921568627451,
				0.9647058823529412,
				0.03137254901960784
			],
			"colEnv1": [
				0.5098039215686274,
				0.9764705882352941,
				0.043137254901960784
			],
			"colEnv2": [
				0.3607843137254902,
				0.9764705882352941,
				0.19215686274509805
			],
			"colEnv3": [
				0.5490196078431373,
				0.9803921568627451,
				0.19607843137254902
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
			"additive": false,
			"cells": [
				2
			]
		},
		{
			"numParts": 7,
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
			"maxStartTime": 1,
			"minLifespan": 0.3,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 10,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.2235294117647059,
				0.9647058823529412,
				0
			],
			"colEnv1": [
				0.5098039215686274,
				0.9764705882352941,
				0.043137254901960784
			],
			"colEnv2": [
				0.3607843137254902,
				0.9764705882352941,
				0.19215686274509805
			],
			"colEnv3": [
				0.5490196078431373,
				0.9803921568627451,
				0.19607843137254902
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
				13
			]
		}
	]
};
