Kiwi.Plugins.ParticlePack3.Rocket1Impact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket1Impact effect.
		*
		* @method Rocket1Impact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for Rocket1Impact
	*
	* @property Rocket1Impact.config
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
			"startSize": 1,
			"endSize": 200,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5647058823529412,
				0.12941176470588237
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
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
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 10,
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
			"maxVel": 122,
			"minVel": -143,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 400,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 80,
			"endSize": 5,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.996078431372549,
				0.4980392156862745,
				0.1607843137254902
			],
			"colEnv1": [
				0.6549019607843137,
				0.34901960784313724,
				0.29411764705882354
			],
			"colEnv2": [
				0.611764705882353,
				0.3568627450980392,
				0.24705882352941178
			],
			"colEnv3": [
				0.5803921568627451,
				0.2980392156862745,
				0.25882352941176473
			],
			"alphaGradient": [
				0,
				0,
				1,
				0
			],
			"alphaStops": [
				0.1,
				0.6
			],
			"cells": [
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 3.1419999999999995,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 200,
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
			"velOffsetY": 0,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 150,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 80,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				1,
				0.21176470588235294,
				0
			],
			"colEnv1": [
				1,
				0.4117647058823529,
				0
			],
			"colEnv2": [
				1,
				0.4235294117647059,
				0.06666666666666667
			],
			"colEnv3": [
				0.996078431372549,
				0.49411764705882355,
				0.19215686274509805
			],
			"alphaGradient": [
				0,
				0.6,
				0.3,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": false,
			"cells": [
				8,
				22
			]
		},
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
			"minLifespan": 0.2,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 50,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5490196078431373,
				0
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
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
		},
		{
			"numParts": 20,
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
			"velShape": "radial",
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
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.9254901960784314,
				0.8745098039215686
			],
			"colEnv1": [
				0.9921568627450981,
				0.5647058823529412,
				0.12941176470588237
			],
			"colEnv2": [
				1,
				0.4196078431372549,
				0.03529411764705882
			],
			"colEnv3": [
				0.996078431372549,
				0.2235294117647059,
				0.08235294117647059
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
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
