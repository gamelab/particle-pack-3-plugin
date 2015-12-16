Kiwi.Plugins.ParticlePack3.LightningGunFlash = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningGunFlash effect.
		*
		* @method LightningGunFlash.create
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
	* Config information for LightningGunFlash
	*
	* @property LightningGunFlash.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
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
			"velOffsetY": -200,
			"velAngMin": -0.5,
			"velAngMax": 0.5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 1,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
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
				15
			]
		},
		{
			"numParts": 3,
			"posOffsetX": 0,
			"posOffsetY": 20,
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
			"velShape": "line",
			"velOffsetX": 0,
			"velOffsetY": -20,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 20,
			"velHeight": 20,
			"velAngle": 0,
			"velLength": 10,
			"velRandomLine": false,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 156,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
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
				9
			]
		},
		{
			"numParts": 6,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 100,
			"posRadialStart": 0,
			"posRadialEnd": 3.142,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 20,
			"posRandomLine": true,
			"posConstrainRadial": true,
			"posRandomRadial": true,
			"posShape": "line",
			"maxVel": 100,
			"minVel": 70,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -8,
			"velAngMax": 8,
			"velRadius": 39.4,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 150,
			"endSize": 50,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.5
			],
			"alpha": 0.3,
			"colEnv0": [
				0.6705882352941176,
				0.6470588235294118,
				0.9882352941176471
			],
			"colEnv1": [
				0,
				0,
				0
			],
			"colEnv2": [
				0.8313725490196079,
				0.8627450980392157,
				1
			],
			"colEnv3": [
				0.10196078431372549,
				0.10196078431372549,
				0.10196078431372549
			],
			"alphaGradient": [
				1,
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
				16
			]
		}
	]
};
