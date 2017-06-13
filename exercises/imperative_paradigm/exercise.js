'use strict';


const Exercise = require('workshopper-exercise');
const Setup = require('../../lib/setup');


module.exports = Setup(Exercise(), {
  dir: __dirname,
	code: 'imperative',
  stdout: true
});
