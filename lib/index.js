
var lodash = require('lodash');
var wordListSample = require('./_data-sample');
var wordList3k = require('./_data3k');

module.exports = {

  sample: wordListSample,
  data: wordList3k,

  getAll: function () {
    return wordList3k;
  },

  find: function (params) {
    return lodash.filter(wordList3k, params);
  }
};
