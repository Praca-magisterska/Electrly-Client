"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserContext = react_1.createContext({
    isSignedOn: false,
    setIsSignedOn: function (isSignedOn) { },
    nickname: '',
    setNickname: function (nickname) { },
    firstName: '',
    setFirstName: function (firstName) { },
    lastName: '',
    setLastName: function (lastName) { },
    email: '',
    setEmail: function (email) { },
    phone: '',
    setPhone: function (phone) { },
    gender: '',
    setGender: function (gender) { },
    birthdate: '',
    setBirthdate: function (birthdate) { },
    zoneInfo: '',
    setZoneInfo: function (zoneInfo) { },
    locale: '',
    setLocale: function (locale) { },
    imageUrl: '',
    setImageUrl: function (imageUrl) { },
    language: '',
    setLanguage: function (language) { },
    theme: '',
    setTheme: function (theme) { },
    doGetUser: function () { }
});
exports["default"] = UserContext;
