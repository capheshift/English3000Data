'use strict';

var wordsList = require('./sample-list.json');
var lodash = require('lodash');

module.exports = {

  getLength: function () {
    return wordsList.length;
  },

  getAll: function () {
    return wordsList;
  },

  find: function (params) {
    return lodash.filter(wordsList, params);
  }
};
