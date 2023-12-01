"use strict";
exports.__esModule = true;
var page_content_section_module_scss_1 = require("../../styles/page_content_section.module.scss");
function PageContentSection(_a) {
    var title = _a.title, _b = _a.showTitle, showTitle = _b === void 0 ? true : _b, children = _a.children;
    return (React.createElement("div", { className: page_content_section_module_scss_1["default"].page_content_section },
        React.createElement("div", { className: page_content_section_module_scss_1["default"].page_content_section__inner },
            showTitle ?
                React.createElement("div", { className: page_content_section_module_scss_1["default"].page_content_section__title }, title)
                : null,
            React.createElement("div", { className: page_content_section_module_scss_1["default"].page_content_section__main }, children))));
}
exports["default"] = PageContentSection;
