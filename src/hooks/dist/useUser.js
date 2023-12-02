"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var UserApi_1 = require("@/api/gate/UserApi");
var react_1 = require("react");
function useUser() {
    var _this = this;
    var _a = react_1.useState(false), isSignedOn = _a[0], setIsSignedOn = _a[1];
    var _b = react_1.useState(''), nickname = _b[0], setNickname = _b[1];
    var _c = react_1.useState(''), firstName = _c[0], setFirstName = _c[1];
    var _d = react_1.useState(''), lastName = _d[0], setLastName = _d[1];
    var _e = react_1.useState(''), email = _e[0], setEmail = _e[1];
    var _f = react_1.useState(''), phone = _f[0], setPhone = _f[1];
    var _g = react_1.useState(''), gender = _g[0], setGender = _g[1];
    var _h = react_1.useState(''), birthdate = _h[0], setBirthdate = _h[1];
    var _j = react_1.useState(''), zoneInfo = _j[0], setZoneInfo = _j[1];
    var _k = react_1.useState(''), locale = _k[0], setLocale = _k[1];
    var _l = react_1.useState(''), imageUrl = _l[0], setImageUrl = _l[1];
    var _m = react_1.useState(''), language = _m[0], setLanguage = _m[1];
    var _o = react_1.useState(''), theme = _o[0], setTheme = _o[1];
    var doGetUser = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    UserApi_1.getUser('me')
                        .then(function (response) {
                        setIsSignedOn(true);
                        setNickname(response.data.nickname);
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                        setEmail(response.data.email);
                        setPhone(response.data.phone);
                        setGender(response.data.gender);
                        setBirthdate(response.data.birthdate);
                        setZoneInfo(response.data.zoneInfo);
                        setLocale(response.data.locale);
                        setImageUrl(response.data.imageUrl);
                        setLanguage(response.data.language);
                        setTheme(response.data.theme);
                        resolve(response);
                    })["catch"](function (error) {
                        setIsSignedOn(false);
                        reject(error);
                    });
                })];
        });
    }); };
    react_1.useEffect(function () {
        doGetUser();
    }, []);
    return {
        isSignedOn: isSignedOn,
        setIsSignedOn: setIsSignedOn,
        nickname: nickname,
        setNickname: setNickname,
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        email: email,
        setEmail: setEmail,
        phone: phone,
        setPhone: setPhone,
        gender: gender,
        setGender: setGender,
        birthdate: birthdate,
        setBirthdate: setBirthdate,
        zoneInfo: zoneInfo,
        setZoneInfo: setZoneInfo,
        locale: locale,
        setLocale: setLocale,
        imageUrl: imageUrl,
        setImageUrl: setImageUrl,
        language: language,
        setLanguage: setLanguage,
        theme: theme,
        setTheme: setTheme,
        doGetUser: doGetUser
    };
}
exports["default"] = useUser;
