"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useUser_1 = require("@/hooks/useUser");
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
function SettingsAir() {
    var userHook = useUser_1["default"]();
    var _a = react_1.useState({ firstName: undefined }), user = _a[0], setUser = _a[1];
    react_1.useEffect(function () {
        userHook.doGetUser().then(function (res) {
            setUser(res.data);
        });
    }, []);
    return (React.createElement(Air_1["default"], { code: 'settings' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Display settings" }),
            React.createElement(AirContentSection_1["default"], { title: "Account settings" }))));
}
exports["default"] = SettingsAir;
