Kiwi.Plugins.ParticlePack3.LightningBallImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningBallImpact effect.
		*
		* @method LightningBallImpact.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		return Kiwi.Plugins.ParticlePack3._create( state, x, y, this.config );
	},

	/**
	* Config information for LightningBallImpact
	*
	* @property LightningBallImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 3,
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
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -100,
			"velAngMax": 100,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 180,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.592156862745098,
				0.803921568627451,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.796078431372549,
				0.792156862745098,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
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
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 5,
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
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -26,
			"velAngMax": 26,
			"velRadius": 30,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 150,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.2823529411764706,
				0.4196078431372549,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.7294117647058823,
				0.596078431372549,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
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
				8,
				22,
				23
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 2,
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
			"posShape": "radial",
			"maxVel": 272,
			"minVel": 80,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "point",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -100,
			"velAngMax": 100,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0.1,
			"maxStartTime": 0.2,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravity": 0,
			"startSize": 20,
			"endSize": 200,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.5058823529411764,
				0.26666666666666666,
				0.984313725490196
			],
			"colEnv1": [
				0.047058823529411764,
				0.0392156862745098,
				0.06274509803921569
			],
			"colEnv2": [
				0.5333333333333333,
				0.7019607843137254,
				1
			],
			"colEnv3": [
				0.3058823529411765,
				0.2784313725490196,
				0.3764705882352941
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
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
