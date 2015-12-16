Kiwi.Plugins.ParticlePack3.AcidImpact = {

	create: function( state, x, y ) {

		/**
		* Return a ParticlePack3 AcidImpact effect.
		*
		* @method AcidImpact.create
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
	* Config information for AcidImpact
	*
	* @property AcidImpact.config
	* @type array
	*/
	config: [
		{
			"numParts": 20,
			"posOffsetX": 0,
			"posOffsetY": 0,
			"posRadius": 10,
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
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": -1,
			"velAngMax": 1,
			"velRadius": 100,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 300,
			"velHeight": 200,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.2,
			"maxLifespan": 0.3,
			"gravity": 0,
			"startSize": 80,
			"endSize": 20,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.3,
			"colEnv0": [
				0.48627450980392156,
				0.7294117647058823,
				0.2627450980392157
			],
			"colEnv1": [
				0.9137254901960784,
				0.984313725490196,
				0.10588235294117647
			],
			"colEnv2": [
				0.30980392156862746,
				0.9764705882352941,
				0.03529411764705882
			],
			"colEnv3": [
				0.03529411764705882,
				0.9725490196078431,
				0.047058823529411764
			],
			"alphaGradient": [
				0,
				0.5,
				0.5,
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
			"numParts": 30,
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
			"velConstrainRect": false,
			"velConstrainRadial": true,
			"velRandomRadial": true,
			"velShape": "rectangle",
			"velOffsetX": 0,
			"velOffsetY": 0,
			"velAngMin": 0,
			"velAngMax": 0,
			"velRadius": 300,
			"velRadialStart": 0,
			"velRadialEnd": 6.283185307179586,
			"velWidth": 600,
			"velHeight": 600,
			"velAngle": 0,
			"velLength": 50,
			"velRandomLine": true,
			"minStartTime": 0,
			"maxStartTime": 0.1,
			"minLifespan": 0.4,
			"maxLifespan": 1,
			"gravity": 0,
			"startSize": 8,
			"endSize": 1,
			"loop": false,
			"colEnvKeyframes": [
				0.4,
				0.6
			],
			"alpha": 0.7,
			"colEnv0": [
				0.9137254901960784,
				0.9803921568627451,
				0.047058823529411764
			],
			"colEnv1": [
				0.5764705882352941,
				0.9098039215686274,
				0.16470588235294117
			],
			"colEnv2": [
				0.49019607843137253,
				0.7568627450980392,
				0.10980392156862745
			],
			"colEnv3": [
				0,
				0.6823529411764706,
				0.07450980392156863
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
				1
			],
			"gravityX": 0,
			"gravityY": 0,
			"additive": false
		}
	]
};
