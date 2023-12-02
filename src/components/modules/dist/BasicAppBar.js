"use strict";
exports.__esModule = true;
var AppBar_1 = require("../layouts/AppBar");
var BasicAirBar_1 = require("./BasicAirBar");
function BasicAppBar() {
    return (React.createElement(AppBar_1["default"], { left: React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                gap: 8
            } },
            React.createElement("div", { style: {
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 30,
                    color: '#5448C8'
                } }, "E!"),
            React.createElement("div", { style: {
                    fontSize: 16,
                    fontWeight: 600
                } }, "Electrly")), right: React.createElement(BasicAirBar_1["default"], null) }));
}
exports["default"] = BasicAppBar;
