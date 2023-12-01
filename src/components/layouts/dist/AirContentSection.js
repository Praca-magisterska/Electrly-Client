"use strict";
exports.__esModule = true;
var air_content_section_module_scss_1 = require("../../styles/air_content_section.module.scss");
function AirContentSection(_a) {
    var title = _a.title, _b = _a.showTitle, showTitle = _b === void 0 ? true : _b, children = _a.children;
    return (React.createElement("div", { className: air_content_section_module_scss_1["default"].air_content_section },
        React.createElement("div", { className: air_content_section_module_scss_1["default"].air_content_section__inner },
            showTitle ?
                React.createElement("div", { className: air_content_section_module_scss_1["default"].air_content_section__title }, title)
                : null,
            React.createElement("div", { className: air_content_section_module_scss_1["default"].air_content_section__main }, children))));
}
exports["default"] = AirContentSection;
