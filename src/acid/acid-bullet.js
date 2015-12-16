Kiwi.Plugins.ParticlePack3.AcidBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AcidBullet effect.
		*
		* @method AcidBullet.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for AcidBullet
	*
	* @property AcidBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 5,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 10,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": 250,
			"velAngMin": -7,
			"velAngMax": 7,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 80,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 40,
			"endSize": 10,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.34509803921568627,
				0.9686274509803922,
				0
			],
			"colEnv3": [
				0.8862745098039215,
				0.9725490196078431,
				0
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
				10,
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.7686274509803922,
				0.9725490196078431,
				0.047058823529411764
			],
			"colEnv3": [
				0.2784313725490196,
				0.9647058823529412,
				0.058823529411764705
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
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 5,
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
			"velAngMin": -6.3,
			"velAngMax": 6.3,
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
			"maxLifespan": 1.5,
			"gravity": 0,
			"startSize": 1,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.20784313725490197,
				0.9647058823529412,
				0
			],
			"colEnv1": [
				0.796078431372549,
				0.9686274509803922,
				0
			],
			"colEnv2": [
				0.7490196078431373,
				0.9725490196078431,
				0
			],
			"colEnv3": [
				0.4117647058823529,
				0.9686274509803922,
				0
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
				22
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		},
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 20,
			"posHeight": 50,
			"posConstrainRect": false,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "rectangle",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 250,
			"velRadialStart": 1.2217304763960306,
			"velRadialEnd": 1.9198621771937625,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 5,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.34901960784313724,
				0.9647058823529412,
				0.07450980392156863
			],
			"colEnv1": [
				0.803921568627451,
				0.9686274509803922,
				0.00784313725490196
			],
			"colEnv2": [
				0.7686274509803922,
				0.9725490196078431,
				0.047058823529411764
			],
			"colEnv3": [
				0.2784313725490196,
				0.9647058823529412,
				0.058823529411764705
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
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
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
			"startSize": 15,
			"endSize": 15,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.6,
				0.9764705882352941,
				0.403921568627451
			],
			"colEnv1": [
				0.8196078431372549,
				0.9764705882352941,
				0.36470588235294116
			],
			"colEnv2": [
				0.9019607843137255,
				0.9764705882352941,
				0.4588235294117647
			],
			"colEnv3": [
				0.5098039215686274,
				0.9686274509803922,
				0.3764705882352941
			],
			"alphaGradient": [
				1,
				1,
				1,
				1
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
