import test = require('blue-tape');

import simpleGit = require('simple-git');

const git = simpleGit();

test('shape', t => {
  t.true(git.add, 'add is defined');
  t.end();
});
