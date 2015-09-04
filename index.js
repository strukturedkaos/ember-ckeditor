/* jshint node: true */
'use strict';
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-ckeditor',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/ckeditor/ckeditor.js');
  },

  contentFor: function(type, config) {
    if (type === 'vendor-prefix') {
      if (config.environment === 'development') {
        return "window.CKEDITOR_BASEPATH = '/assets/ckeditor/';";
      } else {
        return "window.CKEDITOR_BASEPATH = 'https://s3.amazonaws.com/kevy-assets/assets/ckeditor/';";
      }
    }
  },

  isDevelopingAddon: function() {
    return true;
  }
};
