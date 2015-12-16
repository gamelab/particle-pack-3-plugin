/**
* For a walkthrough on setting up the particle pack plugin check the README
*
* @module Kiwi
* @submodule Kiwi.Plugins
* @namespace Kiwi.Plugins
* @class ParticlePack3
* @main
*/
Kiwi.Plugins.ParticlePack3 = {

	/**
	* The name of this plugin.
	* @property name
	* @type String
	* @public
	*/
	name: "ParticlePack3",

	/**
	* The version of this plugin in semver (semantic versioning) format
	* @property version
	* @type String
	* @public
	*/
	version: "0.1.0",

	/**
	* The minimum version of Kiwi.js required to run this plugin in semver
	* (semantic versioning) format
	* @property minimumKiwiVersion
	* @type String
	* @public
	*/
	minimumKiwiVersion: "1.4.0",

	/**
	* Other plugins required for this plugin to run. 
	* @property pluginDependencies
	* @type Array
	* @public
	*/
	pluginDependencies: [
		{
			name: "ParticlesGL",
			minimumVersion: "1.2.1"
		}
	]
};
Kiwi.PluginManager.register( Kiwi.Plugins.ParticlePack3 );
