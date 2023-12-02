"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var UserContext_1 = require("@/context/UserContext");
var link_1 = require("next/link");
var AirContext_1 = require("@/context/AirContext");
var react_i18next_1 = require("react-i18next");
function AccountAir() {
    var t = react_i18next_1.useTranslation().t;
    var airContext = react_1.useContext(AirContext_1["default"]);
    var userContext = react_1.useContext(UserContext_1["default"]);
    return (React.createElement(Air_1["default"], { code: 'account' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Details", showTitle: false, show: userContext.isSignedOn },
                userContext.imageUrl ?
                    React.createElement("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            width: '100%'
                        } },
                        React.createElement("div", { style: {
                                width: 100,
                                height: 100,
                                borderRadius: 20,
                                background: 'url(' + userContext.imageUrl + ')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            } }))
                    : null,
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 20,
                        fontWeight: 700
                    } },
                    userContext.firstName,
                    " ",
                    userContext.lastName),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 700
                    } },
                    React.createElement("button", { onClick: function () { airContext.toggleAir('settings'); }, style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white"
                        } }, t('Manage account'))),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 500
                    } },
                    React.createElement(link_1["default"], { href: "/signout", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        } }, t('Sign out')))),
            React.createElement(AirContentSection_1["default"], { title: "Details", showTitle: false, show: !userContext.isSignedOn },
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%'
                    } }),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 700
                    } },
                    React.createElement(link_1["default"], { href: "/signin", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white"
                        } }, t('Sign in'))),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 500,
                        gap: 13
                    } },
                    React.createElement(link_1["default"], { href: "/signup", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 130,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        } }, "Sign up"),
                    React.createElement(link_1["default"], { href: "/reset", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            height: 48,
                            width: 130,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        } }, t('Reset password')))),
            React.createElement(AirContentSection_1["default"], { title: t("Your threads") }, "TODO: Threads!!!"))));
}
exports["default"] = AccountAir;
