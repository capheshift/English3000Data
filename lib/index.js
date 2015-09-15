
var lodash = require('lodash');
var wordListSample = require('./_data-sample');
// var wordList3k = require('./_data3k');

module.exports = {
  data: wordListSample,

  getLength: function() {
    return wordListSample.length;
  },

  getAll: function () {
    return wordListSample;
  },

  find: function (params) {
    return lodash.filter(wordListSample, params);
  }
};
