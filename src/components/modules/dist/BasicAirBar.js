"use strict";
exports.__esModule = true;
var AccountCircleOutlined_1 = require("@mui/icons-material/AccountCircleOutlined");
var SettingsOutlined_1 = require("@mui/icons-material/SettingsOutlined");
var HelpOutlineOutlined_1 = require("@mui/icons-material/HelpOutlineOutlined");
var SearchOutlined_1 = require("@mui/icons-material/SearchOutlined");
var react_1 = require("react");
var UserContext_1 = require("@/context/UserContext");
var AirBar_1 = require("../layouts/AirBar");
var AirBarButton_1 = require("../elements/buttons/AirBarButton");
function BasicAirBar() {
    var userContext = react_1.useContext(UserContext_1["default"]);
    console.log(userContext.imageUrl);
    return (React.createElement(AirBar_1["default"], null,
        React.createElement(AirBarButton_1["default"], { code: "search" },
            React.createElement(SearchOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "help" },
            React.createElement(HelpOutlineOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "settings" },
            React.createElement(SettingsOutlined_1["default"], null)),
        React.createElement(AirBarButton_1["default"], { code: "account", label: userContext.firstName }, userContext.imageUrl ?
            React.createElement("div", { style: {
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    background: 'url(' + userContext.imageUrl + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } })
            :
                React.createElement(AccountCircleOutlined_1["default"], null))));
}
exports["default"] = BasicAirBar;
