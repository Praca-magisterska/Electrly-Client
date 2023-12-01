"use strict";
exports.__esModule = true;
var Module_1 = require("@/components/layouts/Module");
var BasicModuleBar_1 = require("@/components/modules/BasicModuleBar");
function GateModuleLayout(_a) {
    var children = _a.children;
    return (React.createElement(Module_1["default"], { bar: React.createElement(BasicModuleBar_1["default"], null) }, children));
}
exports["default"] = GateModuleLayout;
