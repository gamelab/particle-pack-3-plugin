# Particles Pack 3 - Scifi Particles

	Name: ParticlesPack3
	Version: 1.0.0
	Type: GameObject Plugin
	Author: Kiwi.js Team
	Website: www.kiwijs.org
	KiwiJS last version tested: 1.4.0


## Description

The Scifi Particle Pack plugin comes with a bunch of preconfigured particle effects to add to your game. Includes XXX sprites and XXX pre-configured effects to create XXX and more.

This plugin requires the ParticlesGL plugin, which is included with the pack.
If you have any problems then feel free to contact us via http://www.kiwijs.org/help

Tutorials for using particles can be found on the Kiwi.JS website at [Using the ParticlesGL Plugin](http://www.kiwijs.org/using-the-particle-effects-plugin).


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
<script src="plugins/particles/bam.js"></script>
```

### Register the plugins:
You'll need to tell you game that it intends to use the plugins by adding their names to the plugin config option. Also remember that the effects only work with the WebGL renderer.

```js
var MyGame = new Kiwi.Game( "exampleGameContainer",
	"testGame", MyState, { renderer: Kiwi.RENDERER_WEBGL,
	plugins: [ "ParticlesGL", "ParticlePack3" ] } );
```

## How to use

Check out the example found in the `examples/` folder of this repository. View the source and run the examples. You'll need a webserver to view the example - tip: running 'grunt serve' in the root folder will bring up a webserver on `localhost:9000`.

Read the API docs found in the `docs/` folder of this repository.

The particle pack contains a number of game objects that you can add to a state. You'll need to add the spritesheet to your preloader which will look something like this:

```js
MyState.preload = function() {
	this.addSpriteSheet(
		"particlePack3SpriteSheet",
		"assets/particlepack3_128.png",
		128, 128, true, 25, 5, 5, 27, 27, 54, 54 );
// Note that we load 25 cells, but there are only 24 sprites.
// Some cells are empty for layout reasons.
};
```

To create a particle effect, add the following to your `create` function:

```js
// Create at 400, 300
MyState.create = function() {
	this.bam = Kiwi.Plugins.ParticlePack3.Bam( this, 400, 300 );
};
```

Here is a list of all available effects, and example code to create them.

Single effects (these return a single particle gameobject):

```js
this.explosion = Kiwi.Plugins.ParticlePack3.Explosion( this, 400, 300 );
xxx
```

Group effects (these return a group of particle gameobjects):

```js
this.bam = Kiwi.Plugins.ParticlePack3.Bam( this, 400, 300 );
xxx
```

Note that some of these functions return a group of gameobjects and others return a single gameobject. In either case, you can add the effect to the state like so:

```js
this.addChild( this.XXX );
```

If the effect is a single object, you can start it emitting like this:

```js
this.XXX.startEmitting();
```

If it's a group you'll need to start each individually - for example:

```js
for ( var i = 0; i < this.XXX.members.length; i++ ) {
	this.XXX.members[ i ].startEmitting()
}
```

To fully familiarize yourself with the API for controlling particle effects, you should see the documentation for the [ParticlesGL plugin](https://github.com/gamelab/WebGL-Particles-Plugin).
