"use strict";
exports.__esModule = true;
var Page_1 = require("@/components/layouts/Page");
var PageContent_1 = require("@/components/layouts/PageContent");
var PageContentSection_1 = require("@/components/layouts/PageContentSection");
function CreateThread() {
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageContent_1["default"], { header: React.createElement("div", null), footer: React.createElement("div", null) },
            React.createElement(PageContentSection_1["default"], { title: "Form" }))));
}
exports["default"] = CreateThread;
