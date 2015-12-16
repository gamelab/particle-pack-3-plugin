Kiwi.Plugins.ParticlePack3.OrangeBoltImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBoltImpact effect.
		*
		* @method OrangeBoltImpact.create
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
	* Config information for OrangeBoltImpact
	*
	* @property OrangeBoltImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 5,
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
			"maxVel": 0,
			"minVel": 0,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 5,
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
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 20,
			"endSize": 70,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.3,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9411764705882353
			],
			"colEnv1": [
				1,
				0.6862745098039216,
				0
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.2196078431372549,
				0.027450980392156862
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
				3
			]
		},
		{
			"numParts": 5,
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
			"maxVel": 0,
			"minVel": 0,
			"velConstrainRect": true,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -3,
			"velAngMax": 5,
			"velRadius": 200,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0,
			"minLifespan": 0.2,
			"maxLifespan": 0.4,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 40,
			"endSize": 40,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.5,
			"colEnv0": [
				0.9882352941176471,
				0.796078431372549,
				0.5803921568627451
			],
			"colEnv1": [
				1,
				0.7215686274509804,
				0.2784313725490196
			],
			"colEnv2": [
				0.9647058823529412,
				0.16862745098039217,
				0.047058823529411764
			],
			"colEnv3": [
				1,
				0.2196078431372549,
				0.027450980392156862
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
		}
	]
};
