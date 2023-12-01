"use strict";
exports.__esModule = true;
var content_section_module_scss_1 = require("../../styles/content_section.module.scss");
function ContentSection(_a) {
    var title = _a.title, _b = _a.showTitle, showTitle = _b === void 0 ? true : _b, children = _a.children;
    return (React.createElement("div", { className: content_section_module_scss_1["default"].content_section },
        React.createElement("div", { className: content_section_module_scss_1["default"].content_section__inner },
            showTitle ?
                React.createElement("div", { className: content_section_module_scss_1["default"].content_section__title }, title)
                : null,
            React.createElement("div", { className: content_section_module_scss_1["default"].content_section__main }, children))));
}
exports["default"] = ContentSection;
