"use client";
"use strict";
exports.__esModule = true;
var Page_1 = require("@/components/layouts/Page");
var Button_1 = require("@mui/material/Button");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useAuth_1 = require("@/hooks/useAuth");
function Signin() {
    var authHook = useAuth_1["default"]();
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Sign out' },
            React.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                } },
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 600
                    } }, "Do you want to log out?")),
            React.createElement(Button_1["default"], { variant: "contained", onClick: function () { authHook.doRevokeToken(); }, style: {
                    width: '100%',
                    height: 48,
                    backgroundColor: '#5448C8',
                    borderRadius: 8,
                    color: '#ffffff'
                } }, "Sign out"))));
}
exports["default"] = Signin;
