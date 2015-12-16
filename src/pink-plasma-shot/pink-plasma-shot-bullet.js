Kiwi.Plugins.ParticlePack3.PinkPlasmaShotBullet = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 PinkPlasmaShotBullet effect.
		*
		* @method PinkPlasmaShotBullet.create
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
	* Config information for PinkPlasmaShotBullet
	*
	* @property PinkPlasmaShotBullet.config
	* @type array
	*/
	config: [
		{
			"numParts": 2,
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
			"startSize": 40,
			"endSize": 40,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 1,
			"colEnv0": [
				1,
				0.24313725490196078,
				0.9254901960784314
			],
			"colEnv1": [
				0.7215686274509804,
				0.2235294117647059,
				0.9882352941176471
			],
			"colEnv2": [
				0.3764705882352941,
				0.24313725490196078,
				0.9921568627450981
			],
			"colEnv3": [
				1,
				0.22745098039215686,
				0.8431372549019608
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
				4
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
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
			"startSize": 80,
			"endSize": 80,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				1,
				0.24313725490196078,
				0.9254901960784314
			],
			"colEnv1": [
				0.8941176470588236,
				0.3686274509803922,
				0.9882352941176471
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				1,
				0.22745098039215686,
				0.8431372549019608
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
				9
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		},
		{
			"numParts": 10,
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
			"minLifespan": 0.1,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 20,
			"endSize": 1,
			"loop": true,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.4,
			"colEnv0": [
				0.23137254901960785,
				0.27058823529411763,
				0.9882352941176471
			],
			"colEnv1": [
				0.8941176470588236,
				0.3686274509803922,
				0.9882352941176471
			],
			"colEnv2": [
				1,
				0.4,
				0.9019607843137255
			],
			"colEnv3": [
				0.996078431372549,
				0.19607843137254902,
				0.6784313725490196
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
				7,
				8
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": true
		}
	]
};
