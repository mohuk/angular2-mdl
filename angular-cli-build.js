/* global require, module */
'use strict';
require('ts-node/register');

const MergeTree     = require('broccoli-merge-trees');
const Funnel        = require('broccoli-funnel');
const Angular2App   = require('angular-cli/lib/broccoli/angular2-app');


function _buildE2EAppInputTree() {
  return new MergeTree([
    new Funnel('typings', {
      destDir: 'typings'
    }),
    new Funnel('src', {
      include: ['components/**/*'],
      destDir: 'src'
    }),
    new Funnel('src/e2e-app', {
      destDir: 'src/e2e-app'
    })
  ]);
}

module.exports = function(defaults) {

  var inputNode = _buildE2EAppInputTree();

  return new Angular2App(defaults, {
    //sourceDir: 'src/e2e-app',
		polyfills: [
			'vendor/core-js/client/core.js',
			'vendor/systemjs/dist/system.src.js',
			'vendor/zone.js/dist/zone.js'
		],
    tsCompiler: {},
    sassCompiler: {
      includePaths: [
        'src/scss-mdl'
      ]
    },
    vendorNpmFiles: [
			'systemjs/dist/system-polyfills.js',
			'systemjs/dist/system.src.js',
			'zone.js/dist/*.+(js|js.map)',
			'core-js/client/core.js',
			'rxjs/**/*.+(js|js.map)',
			'@angular/**/*.+(js|js.map)',
    ]
  });
};