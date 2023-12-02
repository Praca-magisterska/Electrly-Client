"use client";
"use strict";
exports.__esModule = true;
var Page_1 = require("@/components/layouts/Page");
var TextField_1 = require("@mui/material/TextField");
var Button_1 = require("@mui/material/Button");
var link_1 = require("next/link");
var PageFormContent_1 = require("@/components/layouts/PageFormContent");
var useAuth_1 = require("@/hooks/useAuth");
function Reset() {
    var authHook = useAuth_1["default"]();
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageFormContent_1["default"], { header: 'Reset password' }, authHook.stage === 0 ?
            React.createElement(React.Fragment, null,
                React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Email", variant: "outlined", defaultValue: authHook.email, onChange: function (event) { authHook.setEmail(event.target.value); }, style: {
                        width: '100%'
                    } }),
                React.createElement(Button_1["default"], { variant: "contained", onClick: function () { authHook.doCreateUserPasswordCode(); }, style: {
                        width: '100%',
                        height: 48,
                        backgroundColor: '#5448C8',
                        borderRadius: 8,
                        color: '#ffffff'
                    } }, "Reset"),
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
                        } }, "Do you remember your password?"),
                    React.createElement(link_1["default"], { href: '/signin' },
                        React.createElement("div", { style: {
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#2B318A'
                            } }, "Sign in"))),
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
                    React.createElement(link_1["default"], { href: '/signup' },
                        React.createElement("div", { style: {
                                fontSize: 12,
                                fontWeight: 600,
                                color: '#2B318A'
                            } }, "Sign up"))))
            : authHook.stage === 1 ?
                React.createElement(React.Fragment, null,
                    React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Code", variant: "outlined", defaultValue: authHook.passwordCode, onChange: function (event) { authHook.setPasswordCode(event.target.value); }, style: {
                            width: '100%'
                        } }),
                    React.createElement(TextField_1["default"], { id: "outlined-basic", label: "Password", variant: "outlined", defaultValue: authHook.password, onChange: function (event) { authHook.setPassword(event.target.value); }, style: {
                            width: '100%'
                        } }),
                    React.createElement(Button_1["default"], { variant: "contained", onClick: function () { authHook.doCreateUserPassword(); }, style: {
                            width: '100%',
                            height: 48,
                            backgroundColor: '#5448C8',
                            borderRadius: 8,
                            color: '#ffffff'
                        } }, "Sign up"))
                : authHook.stage === 2 &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { style: {
                                fontSize: 12,
                                fontWeight: 600
                            } }, "Congratulations! Your password has been reset."),
                        React.createElement(link_1["default"], { href: '/signin', style: {
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8
                            } },
                            React.createElement(Button_1["default"], { variant: "contained", style: {
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#5448C8',
                                    borderRadius: 8,
                                    color: '#ffffff'
                                } }, "Sign in"))))));
}
exports["default"] = Reset;
