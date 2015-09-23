
var assert = require('assert');
var wordList = require('../lib');

describe('English3000Data', function () {
  it('should have unit test!', function () {
    assert(true, 'we expected this package author to add actual unit tests.');
  });

  it('can acess data!', function () {
    console.log('wordlist', wordList.getLength());
    assert((wordList.getLength()), 'we expected that word list can return the length of this.');
  });
});
