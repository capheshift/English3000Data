'use strict';

var assert = require('assert');
var wordsList = require('../lib');

describe('3000-words-list', function () {
  it('should have unit test!', function () {
    assert(true, 'we expected this package author to add actual unit tests.');
  });

  it('should have 16 words', function () {
    assert((wordsList.getLength() === 16), 'we expected this package return 16 fluquent words.');
  });

  it('should access all of words', function () {
    assert((wordsList.wordsList().length === 16), 'we expected this package return 16 fluquent words.');
  });
});
