Kiwi.Plugins.ParticlePack3.AsteroidImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AsteroidImpact effect.
		*
		* @method AsteroidImpact.create
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
	* Config information for AsteroidImpact
	*
	* @property AsteroidImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
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
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.2,
			"colEnv0": [
				0.6196078431372549,
				0.40784313725490196,
				0.23529411764705882
			],
			"colEnv1": [
				0.5882352941176471,
				0.403921568627451,
				0.3764705882352941
			],
			"colEnv2": [
				0.596078431372549,
				0.43137254901960786,
				0.3058823529411765
			],
			"colEnv3": [
				0.5686274509803921,
				0.3803921568627451,
				0.2627450980392157
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
				22,
				23
			]
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
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
			"velAngMin": -10,
			"velAngMax": 10,
			"velRadius": 250,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.2,
			"minLifespan": 0.2,
			"maxLifespan": 0.6,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 100,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.5,
				0.6
			],
			"alpha": 0.5,
			"colEnv0": [
				0.6196078431372549,
				0.40784313725490196,
				0.23529411764705882
			],
			"colEnv1": [
				0.5882352941176471,
				0.403921568627451,
				0.3764705882352941
			],
			"colEnv2": [
				0.596078431372549,
				0.43137254901960786,
				0.3058823529411765
			],
			"colEnv3": [
				0.5686274509803921,
				0.3803921568627451,
				0.2627450980392157
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
				8,
				22,
				23
			],
			"textureID": "_128x128"
		}
	]
};
