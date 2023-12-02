"use strict";
exports.__esModule = true;
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
function SearchAir() {
    return (React.createElement(Air_1["default"], { code: 'search' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Search bar" }),
            React.createElement(AirContentSection_1["default"], { title: "People" }),
            React.createElement(AirContentSection_1["default"], { title: "Threads" }))));
}
exports["default"] = SearchAir;
