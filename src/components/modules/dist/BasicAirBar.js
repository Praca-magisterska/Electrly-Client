"use strict";
exports.__esModule = true;
var AccountCircleOutlined_1 = require("@mui/icons-material/AccountCircleOutlined");
var SettingsOutlined_1 = require("@mui/icons-material/SettingsOutlined");
var HelpOutlineOutlined_1 = require("@mui/icons-material/HelpOutlineOutlined");
var SearchOutlined_1 = require("@mui/icons-material/SearchOutlined");
var react_1 = require("react");
var AppBarContext_1 = require("@/context/AppBarContext");
var AirContext_1 = require("@/context/AirContext");
var ModuleBarContext_1 = require("@/context/ModuleBarContext");
var PageBarContext_1 = require("@/context/PageBarContext");
var AirBar_1 = require("../layouts/AirBar");
var AirBarButton_1 = require("../elements/buttons/AirBarButton");
function BasicAirBar() {
    var appBarContext = react_1.useContext(AppBarContext_1["default"]);
    var airContext = react_1.useContext(AirContext_1["default"]);
    var moduleBarContext = react_1.useContext(ModuleBarContext_1["default"]);
    var pageBarContext = react_1.useContext(PageBarContext_1["default"]);
    return (React.createElement(AirBar_1["default"], null,
        React.createElement(AirBarButton_1["default"], { code: "search" },
            React.createElement(SearchOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "help" },
            React.createElement(HelpOutlineOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "settings" },
            React.createElement(SettingsOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "account", label: 'Jakub' },
            React.createElement(AccountCircleOutlined_1["default"], null))));
}
exports["default"] = BasicAirBar;
