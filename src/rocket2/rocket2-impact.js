Kiwi.Plugins.ParticlePack3.Rocket2Impact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 Rocket2Impact effect.
		*
		* @method Rocket2Impact.create
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
	* Config information for Rocket2Impact
	*
	* @property Rocket2Impact.config
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
			"minLifespan": 0.5,
			"maxLifespan": 0.5,
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
				0.9882352941176471,
				0.7725490196078432,
				0.07450980392156863
			],
			"colEnv2": [
				0.996078431372549,
				0.6823529411764706,
				0.043137254901960784
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
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 200,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 200,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.4,
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
			"numParts": 30,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 50,
			"posRadialStart": 0,
			"posRadialEnd": 6.283185307179586,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 122,
			"minVel": -143,
			"velConstrainRect": true,
			"velConstrainRadial": false,
			"velRandomRadial": true,
			"velShape": "center",
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
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.7,
			"gravity": 0,
			"startSize": 4,
			"endSize": 2,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.2784313725490196,
				0.0784313725490196
			],
			"colEnv1": [
				0.9882352941176471,
				0.7843137254901961,
				0.4470588235294118
			],
			"colEnv2": [
				0.996078431372549,
				0.44313725490196076,
				0.15294117647058825
			],
			"colEnv3": [
				1,
				0.23137254901960785,
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
				6,
				7
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 25,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 20,
			"posRadialStart": 0,
			"posRadialEnd": 0,
			"posWidth": 200,
			"posHeight": 200,
			"posConstrainRect": true,
			"posAngle": 0,
			"posLength": 1,
			"posRandomLine": true,
			"posConstrainRadial": false,
			"posRandomRadial": true,
			"posShape": "radial",
			"maxVel": 122,
			"minVel": -143,
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
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.1,
			"maxLifespan": 0.4,
			"gravity": 0,
			"startSize": 80,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.2784313725490196,
				0.0784313725490196
			],
			"colEnv1": [
				0.9921568627450981,
				0.6627450980392157,
				0.26666666666666666
			],
			"colEnv2": [
				1,
				0.2823529411764706,
				0.06666666666666667
			],
			"colEnv3": [
				1,
				0.33725490196078434,
				0.09411764705882353
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
			"additive": true
		},
		{
			"numParts": 50,
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
			"velRadius": 250,
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
			"startSize": 3,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				0.996078431372549,
				0.5176470588235295,
				0.00784313725490196
			],
			"colEnv1": [
				0.996078431372549,
				0.4196078431372549,
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
				2
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
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
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
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
		}
	]
};
