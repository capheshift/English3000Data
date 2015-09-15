
var assert = require('assert');
var wordList = require('../lib');

describe('English3000Data', function () {
  it('should have unit test!', function () {
    assert(true, 'we expected this package author to add actual unit tests.');
  });

  it('can acess data!', function () {
    assert((wordList.getLength() === wordList.data.length), 'we expected that word list can return the length of this.');
  });
});
