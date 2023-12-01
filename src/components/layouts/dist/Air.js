"use strict";
exports.__esModule = true;
var react_1 = require("react");
var air_module_scss_1 = require("../../styles/air.module.scss");
var AirContext_1 = require("@/context/AirContext");
function Air(_a) {
    var code = _a.code, children = _a.children;
    var airContext = react_1.useContext(AirContext_1["default"]);
    var here = airContext.code === code;
    return (here ?
        React.createElement("div", { className: air_module_scss_1["default"].air },
            React.createElement("div", { className: air_module_scss_1["default"].air__inner },
                React.createElement("div", { className: air_module_scss_1["default"].air_content__container }, children)))
        : null);
}
exports["default"] = Air;
