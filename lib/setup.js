'use strict';


const Fs = require('fs');
const Path = require('path');
const Mocha = require('mocha');
const Boilerplate = require('workshopper-boilerplate');
const Filecheck = require('workshopper-exercise/filecheck');
const Execute = require('workshopper-exercise/execute');
const Comparestdout = require('workshopper-exercise/comparestdout');
const Wrappedexec = require('workshopper-wrappedexec');


const internals = {};


internals.submissionFname = (args) => Path.join(
  process.cwd(),
  args.code + '.js'
);


internals.addBoilerplate = (exercise, args) => {

  if (Fs.existsSync(internals.submissionFname(args))) {
    return exercise;
  }

  exercise = Boilerplate(exercise);
	exercise.addBoilerplate(require.resolve(args.dir + '/boilerplate/' + args.code));

  return exercise;
};


internals.runTests = (exercise, args, testDir, next) => {

  const mocha = new Mocha();

  try {
    global.Assert = require('assert');
    global.Submission = require(internals.submissionFname(args));
  }
  catch (err) {
    return next(err);
  }

  // Add each *.spec.js file to the mocha instance
  Fs.readdirSync(testDir)
    .filter((file) => file.substr(-8) === '.spec.js')
    .forEach((file) => mocha.addFile(Path.join(testDir, file)));

  mocha.run(next);
};


internals.addTestsVerifyProcessor = (exercise, args) => {

  const testDir = Path.join(args.dir, 'test');

  if (!Fs.existsSync(testDir) || !Fs.statSync(testDir).isDirectory()) {
    return exercise;
  }

  exercise.addVerifyProcessor((next) => {

    internals.runTests(exercise, args, testDir, (err) => {

      if (err) {
        exercise.emit('fail', err);
        return next(null, false);
      }

      next(null, true);
    });
  });

  return exercise;
};


module.exports = (exercise, args) => {

  if (!args.dir) {
    throw new Error('missing args.dir');
  }

	if (!args.code) {
    throw new Error('missing args.code');
  }

  // create the boilerplate file for the user
	exercise = internals.addBoilerplate(exercise, args);

  // checks that the submission file actually exists
  exercise = Filecheck(exercise);

  if (args.stdout) {
    // execute the solution and submission in parallel with spawn()
    exercise = Execute(exercise);
    // compare stdout of solution and submission
    exercise = Comparestdout(exercise);
  }

  // wrap up the child process in a phantom wrapper that can
	// mess with the global environment and inspect execution
	//exercise = Wrappedexec(exercise);

  exercise = internals.addTestsVerifyProcessor(exercise, args);

  return exercise;
};
