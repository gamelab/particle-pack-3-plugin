Kiwi.Plugins.ParticlePack3.TractorBeamFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 TractorBeamFlash effect.
		*
		* @method TractorBeamFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for TractorBeamFlash
	*
	* @property TractorBeamFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
			"posOffsetX": 0,
			"posOffsetY": -100,
			"posRadius": 100,
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
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 100,
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
			"maxStartTime": 1,
			"minLifespan": 1,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 80,
			"endSize": 30,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.8,
			"colEnv0": [
				0.7098039215686275,
				0.2784313725490196,
				0.9921568627450981
			],
			"colEnv1": [
				0.1803921568627451,
				0.4196078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.5137254901960784,
				0.2196078431372549,
				1
			],
			"colEnv3": [
				0.13725490196078433,
				0.27450980392156865,
				0.984313725490196
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
				13
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 8,
			"posOffsetX": 0,
			"posOffsetY": -100,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 40,
			"posRandomLine": false,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 200,
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
			"maxStartTime": 0.5,
			"minLifespan": 0.6,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.39215686274509803,
				0.5764705882352941,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.5294117647058824,
				1
			],
			"colEnv2": [
				0.15294117647058825,
				0.38823529411764707,
				1
			],
			"colEnv3": [
				0.7137254901960784,
				0.2784313725490196,
				1
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
				19
			]
		},
		{
			"numParts": 8,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 251.2,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 98,
			"posHeight": 69,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 40,
			"posRandomLine": false,
			"posConstrainRadial": false,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 100,
			"minVel": -99,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": false,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 3,
			"velRadius": 360,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.5,
			"minLifespan": 0.5,
			"maxLifespan": 1,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 200,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.39215686274509803,
				0.5764705882352941,
				0.9882352941176471
			],
			"colEnv1": [
				0.6235294117647059,
				0.5294117647058824,
				1
			],
			"colEnv2": [
				0.15294117647058825,
				0.38823529411764707,
				1
			],
			"colEnv3": [
				0.7137254901960784,
				0.2784313725490196,
				1
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
				8
			]
		},
		{
			"numParts": 1,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 6.283185307179586,
			"posRadialEnd": 0,
			"posWidth": 51,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "point",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": -3,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 2,
			"maxLifespan": 2,
			"gravity": 0,
			"startSize": 150,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0,
				0.9607843137254902,
				0.15294117647058825
			],
			"colEnv1": [
				0,
				0.9529411764705882,
				0.11372549019607843
			],
			"colEnv2": [
				0,
				0.9764705882352941,
				0.09019607843137255
			],
			"colEnv3": [
				0.13725490196078433,
				0.9764705882352941,
				0.12156862745098039
			],
			"alphaGradient": [
				0,
				1,
				1,
				0
			],
			"alphaStops": [
				0.5,
				0.6
			],
			"cells": [
				17
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
