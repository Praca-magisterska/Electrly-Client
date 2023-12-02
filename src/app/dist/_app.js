"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var next_i18next_1 = require("next-i18next");
// import nextI18NextConfig from '../next-i18next.config.js'
var MyApp = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(Component, __assign({}, pageProps)));
};
// https://github.com/i18next/next-i18next#unserializable-configs
exports["default"] = next_i18next_1.appWithTranslation(MyApp /*, nextI18NextConfig */);
