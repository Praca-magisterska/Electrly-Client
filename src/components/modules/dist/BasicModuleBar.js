"use strict";
exports.__esModule = true;
var ModuleBar_1 = require("../layouts/ModuleBar");
var HomeOutlined_1 = require("@mui/icons-material/HomeOutlined");
var LogoutOutlined_1 = require("@mui/icons-material/LogoutOutlined");
var LoginOutlined_1 = require("@mui/icons-material/LoginOutlined");
var PersonAddOutlined_1 = require("@mui/icons-material/PersonAddOutlined");
var ModuleBarButton_1 = require("../elements/buttons/ModuleBarButton");
var CategoryOutlined_1 = require("@mui/icons-material/CategoryOutlined");
var NewspaperOutlined_1 = require("@mui/icons-material/NewspaperOutlined");
var LockResetOutlined_1 = require("@mui/icons-material/LockResetOutlined");
var ModuleBarSizeButton_1 = require("../elements/buttons/ModuleBarSizeButton");
function GateModuleBar() {
    return (React.createElement(ModuleBar_1["default"], { top: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/", activeHrefPattern: "^/$", label: "Home" },
                React.createElement(HomeOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/community/threads/categories", activeHrefPattern: "/community/threads/categories", label: "Categories" },
                React.createElement(CategoryOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { activeHrefPattern: "/community/threads", disactiveHrefPattern: "/community/threads/categories", hidden: true, label: "Thread" },
                React.createElement(NewspaperOutlined_1["default"], null))), bottom: React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8
            } },
            React.createElement(ModuleBarButton_1["default"], { href: "/gate/signup", activeHrefPattern: "/gate/signup", hidden: true, label: "Sign up" },
                React.createElement(PersonAddOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/gate/signin", activeHrefPattern: "/gate/signin", hidden: true, label: "Sign in" },
                React.createElement(LoginOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/gate/reset", activeHrefPattern: "/gate/reset", hidden: true, label: "Reset password" },
                React.createElement(LockResetOutlined_1["default"], null)),
            React.createElement(ModuleBarButton_1["default"], { href: "/gate/signout", activeHrefPattern: "/gate/signout", hidden: true, label: "Sign out" },
                React.createElement(LogoutOutlined_1["default"], null)),
            React.createElement(ModuleBarSizeButton_1["default"], null)) }));
}
exports["default"] = GateModuleBar;
