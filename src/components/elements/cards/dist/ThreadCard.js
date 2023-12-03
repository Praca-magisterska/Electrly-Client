"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var ThreadReactionCard_1 = require("./ThreadReactionCard");
function ThreadCard(_a) {
    var thread = _a.thread, _b = _a.showUser, showUser = _b === void 0 ? true : _b;
    return (React.createElement(link_1["default"], { href: '/community/threads/' + thread.id, style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 8,
            minHeight: 176,
            width: '100%'
        } },
        React.createElement("div", { style: {
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 32px)',
                margin: 16,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 16
            } },
            React.createElement(ThreadReactionCard_1["default"], { thread: thread }),
            React.createElement("div", { style: {
                    width: '100%',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 8
                } },
                React.createElement("div", { style: {
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16
                    } },
                    showUser ?
                        React.createElement(link_1["default"], { href: '/community/people/' + thread.user.id, style: {
                                height: 48,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 16
                            } },
                            React.createElement("div", { style: {
                                    minWidth: 48,
                                    width: 48,
                                    height: 48,
                                    borderRadius: 100,
                                    background: 'url(' + thread.user.imageUrl + ')',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                } }),
                            React.createElement("div", { style: {
                                    fontSize: 12,
                                    fontWeight: 500
                                } },
                                "Posted by ",
                                thread.user.nickname))
                        : null,
                    React.createElement("div", { style: {
                            fontSize: 12,
                            fontWeight: 500
                        } }, "3 Hours Ago")),
                React.createElement("div", { style: {
                        fontSize: 16,
                        fontWeight: 700
                    } }, thread.title),
                React.createElement("div", { style: {
                        fontSize: 12,
                        fontWeight: 400
                    } }, thread.content)))));
}
exports["default"] = ThreadCard;
