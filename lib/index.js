
var lodash = require('lodash');
var wordList = require('./infowordlist');

module.exports = {
  data: wordList,

  getLength: function() {
    return wordList.length;
  },

  getAll: function () {
    return wordList;
  },

  find: function (params) {
    return lodash.filter(wordList, params);
  }
};
