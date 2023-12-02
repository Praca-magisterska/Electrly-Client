"use strict";

/** @type {import('next').NextConfig} */
var _require = require('./next-i18next.config.js'),
    i18n = _require.i18n;

var path = require('path');

var nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')]
  } // i18n

};
module.exports = nextConfig;