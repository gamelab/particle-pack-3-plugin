Kiwi.Plugins.ParticlePack3.SonarPulseImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 SonarPulseImpact effect.
		*
		* @method SonarPulseImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for SonarPulseImpact
	*
	* @property SonarPulseImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 30,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": -100,
			"velAngMin": -5,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.3,
			"maxLifespan": 0.8,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 2,
			"endSize": 80,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.2,
			"colEnv0": [
				0,
				0.9647058823529412,
				0.047058823529411764
			],
			"colEnv1": [
				0.39215686274509803,
				0.9803921568627451,
				0.1607843137254902
			],
			"colEnv2": [
				0.1411764705882353,
				0.9764705882352941,
				0
			],
			"colEnv3": [
				0.3176470588235294,
				0.9764705882352941,
				0.0784313725490196
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
			"additive": false,
			"cells": [
				8,
				22,
				23
			]
		},
		{
			"numParts": 20,
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
			"posConstrainRadial": true,
			"posRandomRadial": false,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.1843137254901961,
				0.9176470588235294,
				0
			],
			"colEnv1": [
				0.9254901960784314,
				0.9882352941176471,
				0.4823529411764706
			],
			"colEnv2": [
				0.30980392156862746,
				0.9764705882352941,
				0.03529411764705882
			],
			"colEnv3": [
				0.03529411764705882,
				0.9725490196078431,
				0.047058823529411764
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
				9,
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 30,
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
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 600,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 8,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.7568627450980392,
				0.9764705882352941,
				0.6980392156862745
			],
			"colEnv1": [
				0.4235294117647059,
				0.9686274509803922,
				0.23137254901960785
			],
			"colEnv2": [
				0.1450980392156863,
				0.9686274509803922,
				0.10196078431372549
			],
			"colEnv3": [
				0,
				0.9647058823529412,
				0.12156862745098039
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
				1
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
