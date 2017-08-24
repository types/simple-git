import * as test from 'blue-tape';

import * as simpleGit from 'simple-git';

const git = simpleGit();

test('shape', t => {
  t.true(git.add, 'add is defined');
  t.end();
});
