Kiwi.Plugins.ParticlePack3.LightningBallBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 LightningBallBullet effect.
		*
		* @method LightningBallBullet.create
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
	* Config information for LightningBallBullet
	*
	* @property LightningBallBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 15,
			"posOffsetX": 0,
			"posOffsetY": 0,
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
			"velOffsetY": 200,
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
			"maxStartTime": 0.3,
			"minLifespan": 0.2,
			"maxLifespan": 0.5,
			"gravity": 0,
			"startSize": 60,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.8,
			"colEnv0": [
				0.7137254901960784,
				0.6392156862745098,
				0.9921568627450981
			],
			"colEnv1": [
				0.1803921568627451,
				0.4196078431372549,
				0.9921568627450981
			],
			"colEnv2": [
				0.7372549019607844,
				0.8196078431372549,
				1
			],
			"colEnv3": [
				0.13725490196078433,
				0.27450980392156865,
				0.984313725490196
			],
			"alphaGradient": [
				1,
				1,
				1,
				0
			],
			"alphaStops": [
				0.4,
				0.8
			],
			"cells": [
				16
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
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
			"velAngMin": -20,
			"velAngMax": 20,
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
			"startSize": 50,
			"endSize": 60,
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
				7,
				11
			]
		}
	]
};
