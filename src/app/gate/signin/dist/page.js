"use client";
"use strict";
exports.__esModule = true;
var Page_1 = require("@/components/layouts/Page");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
var link_1 = require("next/link");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useAuth_1 = require("@/hooks/useAuth");
function Signin() {
    var authHook = useAuth_1["default"]();
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Sign in' },
            React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Email", variant: "outlined", defaultValue: authHook.email, onChange: function (event) { authHook.setEmail(event.target.value); }, style: {
                    width: '100%'
                } }),
            React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Password", variant: "outlined", type: "password", defaultValue: authHook.password, onChange: function (event) { authHook.setPassword(event.target.value); }, style: {
                    width: '100%'
                } }),
            React.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                } },
                React.createElement(link_1["default"], { href: '/gate/reset' },
                    React.createElement("div", { style: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A'
                        } }, "Forgot password?"))),
            React.createElement(Button_1["default"], { variant: "contained", onClick: function () { authHook.doAuthorize(); }, style: {
                    width: '100%',
                    height: 48,
                    backgroundColor: '#5448C8',
                    borderRadius: 8,
                    color: '#ffffff'
                } }, "Sign in"),
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
                    } }, "Do not have an account?"),
                React.createElement(link_1["default"], { href: '/gate/signup' },
                    React.createElement("div", { style: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A'
                        } }, "Sign up"))))));
}
exports["default"] = Signin;
