'use strict';


const Exercise = require('workshopper-exercise');
const Setup = require('../../lib/setup');


module.exports = Setup(Exercise(), {
  dir: __dirname,
	code: 'oop',
  stdout: false
});
