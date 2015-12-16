Kiwi.Plugins.ParticlePack3.OrangeBallImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 OrangeBallImpact effect.
		*
		* @method OrangeBallImpact.create
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
	* Config information for OrangeBallImpact
	*
	* @property OrangeBallImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 1,
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
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
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
			"maxStartTime": 0,
			"minLifespan": 0.3,
			"maxLifespan": 0.3,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 150,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.7
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8470588235294118,
				0.4196078431372549
			],
			"colEnv1": [
				1,
				0.6745098039215687,
				0.054901960784313725
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.16470588235294117,
				0.11764705882352941
			],
			"alphaGradient": [
				0,
				0.7,
				0.4,
				0
			],
			"alphaStops": [
				0.3,
				0.7
			],
			"additive": true,
			"cells": [
				20
			]
		},
		{
			"numParts": 1,
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
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
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
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 1,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.2,
			"colEnv0": [
				0.9882352941176471,
				0.9607843137254902,
				0.9411764705882353
			],
			"colEnv1": [
				0.8196078431372549,
				0.17647058823529413,
				0.01568627450980392
			],
			"colEnv2": [
				0.9647058823529412,
				0.403921568627451,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
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
			"velShape": "center",
			"velOffsetX": 0,
			"velOffsetY": 0,
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
			"maxStartTime": 0,
			"minLifespan": 0.1,
			"maxLifespan": 0.2,
			"gravityX": 0,
			"gravityY": 0,
			"startSize": 50,
			"endSize": 100,
			"loop": false,
			"colEnvKeyframes": [
				0.3,
				0.8
			],
			"alpha": 0.8,
			"colEnv0": [
				0.9882352941176471,
				0.8549019607843137,
				0.42745098039215684
			],
			"colEnv1": [
				1,
				0.5411764705882353,
				0
			],
			"colEnv2": [
				0.9647058823529412,
				0.1450980392156863,
				0
			],
			"colEnv3": [
				1,
				0.4549019607843137,
				0.06274509803921569
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
				9
			]
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
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "radial",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 200,
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
			"startSize": 2,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.9921568627450981,
				0.8156862745098039,
				0.03529411764705882
			],
			"colEnv1": [
				1,
				0.396078431372549,
				0.011764705882352941
			],
			"colEnv2": [
				1,
				0.19607843137254902,
				0
			],
			"colEnv3": [
				0.996078431372549,
				0.19215686274509805,
				0.08627450980392157
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
