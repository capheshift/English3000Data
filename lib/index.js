'use strict';

var wordsList = require('./sample-list.json');

module.exports = {

  getLength: function () {
    return wordsList.length;
  },

  wordsList: function () {
    return wordsList;
  }

};
