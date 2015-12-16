# Particles Pack 3 - Scifi Particles

	Name: ParticlesPack3
	Version: 1.0.0
	Type: GameObject Plugin
	Author: Kiwi.js Team
	Website: www.kiwijs.org
	KiwiJS last version tested: 1.4.0


## Description

The Scifi Particle Pack plugin comes with a bunch of preconfigured particle effects to add to your game. Includes 12 new sprites and 36 unique pre-configured effects to create rockets, sonar pulses, lasers, plasma balls, asteroids, acid bullets, star fire, and more.

Each effect in this pack is unique, independent of color. You can create numerous variants just by tweaking the color envelope of an effect config. It's trivial to create hundreds of different effects!

This pack also includes raw JSON files describing the individual effects that make up each pre-built effect. See `json/` for this data.

This plugin requires the ParticlesGL plugin, which is included with the pack.
If you have any problems then feel free to contact us via http://www.kiwijs.org/help

Tutorials for using particles can be found on the Kiwi.JS website at [Using the ParticlesGL Plugin](http://www.kiwijs.org/using-the-particle-effects-plugin).

Note that there are 12 sprites reproduced from Particle Pack 1. These are used in some of the pre-built effects.


## Dependencies

- Kiwi.js version 1.4.0 or greater
- ParticlesGL version 1.2.1 or greater


## Version Release Notes

1.0.0
- Initial release

## How to Include

### Copy the files you need:
- Create a folder called `plugins/` in your project folder.
- Create a folder called `assets/` in your project folder.
- Copy `particlesgl-x.x.x.js` (or `particlesgl-x.x.x.min.js`) from the `lib/` folder into your `plugins/` folder.
- Copy `particlepack3.js` (or `particlepack3.min.js`) from the `build/` folder to your `plugins/` folder.
- Copy the particle spritesheet from the `assets/` folder into your project assets folder.

### Link the files:
- Link the JavaScript files `particlesgl-x.x.x.js` and `particlepack3-x.x.x.js` (or the min versions) into your HTML file. Make sure you link them underneath the link to the main `kiwi.js` file AND underneath the Cocoon files if you are using Cocoon.

```html
<script src="plugins/particlesgl-x.x.x.js"></script>
<script src="plugins/particlepack3-x.x.x.js"></script>
```

This will add ALL the particle effects to your game. If you want to add them individually, add `src/_particlepack3-x.x.x.js` to your plugin folder instead and also include the config files that you want to use, eg.

```html
<script src="plugins/particlesgl-x.x.x.js"></script>
<script src="plugins/_particlepack3.js"></script>
<script src="plugins/particles/acid/acid-bullet.js"></script>
```

### Register the plugins:
You'll need to tell your game that it intends to use the plugins by adding their names to the plugin config option. Also remember that the effects only work with the WebGL renderer right now.

```js
var MyGame = new Kiwi.Game( "exampleGameContainer", "testGame", MyState,
	{
		renderer: Kiwi.RENDERER_WEBGL,
		plugins: [ "ParticlesGL", "ParticlePack3" ]
	} );
```

## How to use

	NOTE: This pack uses updated systems, and does not work quite the same way as packs 1 and 2. The main difference is that you now call `AcidBullet.create()` rather than `AcidBullet()`. You can also call `scheduleStop`, `startEmitting`, and `stopEmitting` directly on group effects.

Check out the example found in the `examples/` folder of this repository. View the source and run the examples. You'll need a webserver to view the example - tip: running 'grunt serve' in the root folder will bring up a webserver on `localhost:9000`.

Read the API docs found in the `docs/` folder of this repository.

The particle pack contains a number of game objects that you can add to a state. You'll need to add the spritesheet to your preloader which will look something like this:

```js
MyState.preload = function() {
	this.addSpriteSheet(
		"particlePack3SpriteSheet",
		"assets/particlepack3_128.png",
		128, 128, true, 25, 5, 5, 27, 27, 54, 54 );
// Note that we load 25 cells, but there are only 12 new sprites.
// Some cells are empty for layout reasons.
// There are also 12 sprites reproduced from Particle Pack 1
// for use in the pre-built effects.
};
```

To create a particle effect, add the following to your `create` function:

```js
// Create at 400, 300
MyState.create = function() {
	this.acidBullet =
		Kiwi.Plugins.ParticlePack3.AcidBullet.create( this, 400, 300 );
};
```

Here is a list of all available effects, and example code to create them.

Single effects (these return a single particle gameobject):

```js
acidBullet =
	Kiwi.Plugins.ParticlePack3.AcidBullet.create( this, 400, 300 );
acidFlash =
	Kiwi.Plugins.ParticlePack3.AcidFlash.create( this, 400, 300 );
acidImpact =
	Kiwi.Plugins.ParticlePack3.AcidImpact.create( this, 400, 300 );
asteroidBullet =
	Kiwi.Plugins.ParticlePack3.AsteroidBullet.create( this, 400, 300 );
asteroidImpact =
	Kiwi.Plugins.ParticlePack3.AsteroidImpact.create( this, 400, 300 );
bluePlasmaBallBullet =
	Kiwi.Plugins.ParticlePack3.BluePlasmaBallBullet.create( this, 400, 300 );
bluePlasmaBallImpact =
	Kiwi.Plugins.ParticlePack3.BluePlasmaBallImpact.create( this, 400, 300 );
lightningBallBullet =
	Kiwi.Plugins.ParticlePack3.LightningBallBullet.create( this, 400, 300 );
lightningBallImpact =
	Kiwi.Plugins.ParticlePack3.LightningBallImpact.create( this, 400, 300 );
lightningGunBullet =
	Kiwi.Plugins.ParticlePack3.LightningGunBullet.create( this, 400, 300 );
lightningGunFlash =
	Kiwi.Plugins.ParticlePack3.LightningGunFlash.create( this, 400, 300 );
lightningGunImpact =
	Kiwi.Plugins.ParticlePack3.LightningGunImpact.create( this, 400, 300 );
orangeBallBullet =
	Kiwi.Plugins.ParticlePack3.OrangeBallBullet.create( this, 400, 300 );
orangeBallImpact =
	Kiwi.Plugins.ParticlePack3.OrangeBallImpact.create( this, 400, 300 );
orangeBoltBullet =
	Kiwi.Plugins.ParticlePack3.OrangeBoltBullet.create( this, 400, 300 );
orangeBoltImpact =
	Kiwi.Plugins.ParticlePack3.OrangeBoltImpact.create( this, 400, 300 );
orangeStreaksBullet =
	Kiwi.Plugins.ParticlePack3.OrangeStreaksBullet.create( this, 400, 300 );
orangeStreaksImpact =
	Kiwi.Plugins.ParticlePack3.OrangeStreaksImpact.create( this, 400, 300 );
pinkPlasmaShotBullet =
	Kiwi.Plugins.ParticlePack3.PinkPlasmaShotBullet.create( this, 400, 300 );
pinkPlasmaShotFlash =
	Kiwi.Plugins.ParticlePack3.PinkPlasmaShotFlash.create( this, 400, 300 );
pinkPlasmaShotImpact =
	Kiwi.Plugins.ParticlePack3.PinkPlasmaShotImpact.create( this, 400, 300 );
radarScannerFlash =
	Kiwi.Plugins.ParticlePack3.RadarScannerFlash.create( this, 400, 300 );
redLaserBullet =
	Kiwi.Plugins.ParticlePack3.RedLaserBullet.create( this, 400, 300 );
redLaserFlash =
	Kiwi.Plugins.ParticlePack3.RedLaserFlash.create( this, 400, 300 );
redLaserImpact =
	Kiwi.Plugins.ParticlePack3.RedLaserImpact.create( this, 400, 300 );
rocket1Bullet =
	Kiwi.Plugins.ParticlePack3.Rocket1Bullet.create( this, 400, 300 );
rocket1Flash =
	Kiwi.Plugins.ParticlePack3.Rocket1Flash.create( this, 400, 300 );
rocket1Impact =
	Kiwi.Plugins.ParticlePack3.Rocket1Impact.create( this, 400, 300 );
rocket2Bullet =
	Kiwi.Plugins.ParticlePack3.Rocket2Bullet.create( this, 400, 300 );
rocket2Impact =
	Kiwi.Plugins.ParticlePack3.Rocket2Impact.create( this, 400, 300 );
sonarPulseBullet =
	Kiwi.Plugins.ParticlePack3.SonarPulseBullet.create( this, 400, 300 );
sonarPulseImpact =
	Kiwi.Plugins.ParticlePack3.SonarPulseImpact.create( this, 400, 300 );
starFireBullet =
	Kiwi.Plugins.ParticlePack3.StarFireBullet.create( this, 400, 300 );
starFireFlash =
	Kiwi.Plugins.ParticlePack3.StarFireFlash.create( this, 400, 300 );
starFireImpact =
	Kiwi.Plugins.ParticlePack3.StarFireImpact.create( this, 400, 300 );
tractorBeamFlash =
	Kiwi.Plugins.ParticlePack3.TractorBeamFlash.create( this, 400, 300 );
```

Note that some of these functions return a group of gameobjects and others return a single gameobject. In either case, you can add the effect to the state like so:

```js
this.addChild( acidBullet );
```

To start effects emitting, run:

```js
acidBullet.startEmitting();
```

Note that this works on group effects as well as single gameobjects. This pack adds functions to group effects, allowing you to invoke `startEmitting`, `stopEmitting`, and `scheduleStop` with all standard options. You don't need to run loops over `acidBullet.members` unless you want to do something more sophisticated.

To fully familiarize yourself with the API for controlling particle effects, you should see the documentation for the [ParticlesGL plugin](https://github.com/gamelab/WebGL-Particles-Plugin).
