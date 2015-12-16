Kiwi.Plugins.ParticlePack3.StarFireFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 StarFireFlash effect.
		*
		* @method StarFireFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for StarFireFlash
	*
	* @property StarFireFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 15,
			"endSize": 10,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.9294117647058824,
				0.7333333333333333
			],
			"colEnv1": [
				1,
				0.8627450980392157,
				0
			],
			"colEnv2": [
				1,
				0.6392156862745098,
				0.16470588235294117
			],
			"colEnv3": [
				1,
				0.16470588235294117,
				0.10196078431372549
			],
			"alphaGradient": [
				0,
				1,
				0.4,
				0
			],
			"alphaStops": [
				0.1,
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
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9764705882352941,
				0.8588235294117647
			],
			"colEnv1": [
				0.9921568627450981,
				0.8823529411764706,
				0.06666666666666667
			],
			"colEnv2": [
				0.5607843137254902,
				0.4,
				0.06666666666666667
			],
			"colEnv3": [
				0.6862745098039216,
				0.13333333333333333,
				0.054901960784313725
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
