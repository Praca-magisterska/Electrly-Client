"use strict";
exports.__esModule = true;
var air_content_module_scss_1 = require("../../styles/air_content.module.scss");
function AirContent(_a) {
    var header = _a.header, children = _a.children, footer = _a.footer;
    return (React.createElement("div", { className: air_content_module_scss_1["default"].air_content },
        React.createElement("div", { className: air_content_module_scss_1["default"].air_content__inner },
            header ?
                React.createElement("div", { className: air_content_module_scss_1["default"].air_content__header }, header)
                : null,
            React.createElement("div", { className: air_content_module_scss_1["default"].air_content__main }, children),
            React.createElement("div", { className: air_content_module_scss_1["default"].air_content__footer }, footer))));
}
exports["default"] = AirContent;
