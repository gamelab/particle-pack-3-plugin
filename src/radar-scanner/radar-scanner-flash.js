Kiwi.Plugins.ParticlePack3.RadarScannerFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 RadarScannerFlash effect.
		*
		* @method RadarScannerFlash.create
		* @param state {Kiwi.State} Current game state
		* @param x {number} Horizontal coordinate
		* @param y {number} Vertical coordinate
		* @static
		* @return Kiwi.Group
		*/

		var effect, i,
			group = new Kiwi.Group( state );

		for ( i in this.config ) {
			effect = new Kiwi.GameObjects.StatelessParticles(
				state, state.textures.particlePack3SpriteSheet,
				0, 0,
				this.config[ i ] );
			group.addChild( effect );
		}

		group.x = x;
		group.y = y;

		return group;
	},

	/**
	* Config information for RadarScannerFlash
	*
	* @property RadarScannerFlash.config
	* @type array
	*/
	config: [
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
			"velOffsetY": -100,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 100,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.6,
			"maxLifespan": 0.6,
			"gravity": 0,
			"startSize": 1,
			"endSize": 100,
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
				0.1,
				0.6
			],
			"cells": [
				13
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
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
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 272.7,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 100,
			"velHeight": 100,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 1,
			"endSize": 150,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
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
				0.1,
				0.6
			],
			"cells": [
				20
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
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
			"velAngMin": 0,
			"velAngMax": 0,
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
			"minLifespan": 1,
			"maxLifespan": 1,
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
				18
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
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