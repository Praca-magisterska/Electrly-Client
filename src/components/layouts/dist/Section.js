"use strict";
exports.__esModule = true;
var section_module_scss_1 = require("../../styles/section.module.scss");
function Content(_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement("div", { className: section_module_scss_1["default"].section },
        React.createElement("div", { className: section_module_scss_1["default"].section__inner },
            React.createElement("div", { className: section_module_scss_1["default"].section__title }, title),
            React.createElement("div", { className: section_module_scss_1["default"].section__main }, children))));
}
exports["default"] = Content;
