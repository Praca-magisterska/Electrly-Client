"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var UserContext_1 = require("@/context/UserContext");
var link_1 = require("next/link");
var AirContext_1 = require("@/context/AirContext");
var ThreadCard_1 = require("@/components/elements/cards/ThreadCard");
function AccountAir() {
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
                        } }, "Manage account")),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 500
                    } },
                    React.createElement(link_1["default"], { href: "/gate/signout", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        } }, "Sign out"))),
            React.createElement(AirContentSection_1["default"], { title: "Details", showTitle: false, show: !userContext.isSignedOn },
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%'
                    } }, "TODO: Photo!!!"),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 700
                    } },
                    React.createElement(link_1["default"], { href: "/gate/signin", style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white"
                        } }, "Sign in")),
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
                    React.createElement(link_1["default"], { href: "/gate/signup", style: {
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
                    React.createElement(link_1["default"], { href: "/gate/reset", style: {
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
                        } }, "Reset password"))),
            React.createElement(AirContentSection_1["default"], { title: "Your threads", show: userContext.isSignedOn },
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } }),
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } }),
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } }),
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } }),
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } }),
                React.createElement(ThreadCard_1["default"], { showUser: false, thread: {
                        id: 0,
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut dignissim massa, nec tempor metus. In viverra odio odio, ac vehicula quam congue vel.',
                        threadReactionsResult: 10,
                        user: {
                            id: 0,
                            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            nickname: 'Liteon X'
                        }
                    } })))));
}
exports["default"] = AccountAir;
