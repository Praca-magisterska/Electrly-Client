"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var UserContext_1 = require("@/context/UserContext");
function SettingsAir() {
    var userContext = react_1.useContext(UserContext_1["default"]);
    return (React.createElement(Air_1["default"], { code: 'settings' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Display settings" }, "TODO: Display setting!!!"),
            React.createElement(AirContentSection_1["default"], { title: "Account settings" }, "TODO: Account settings!!!"))));
}
exports["default"] = SettingsAir;
