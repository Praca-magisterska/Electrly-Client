"use strict";
exports.__esModule = true;
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var SearchOutlined_1 = require("@mui/icons-material/SearchOutlined");
var link_1 = require("next/link");
function UserSearchCard(_a) {
    var user = _a.user;
    return (React.createElement(link_1["default"], { href: '/users/' + user.id, style: {
            height: 48,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 16,
            width: 176
        } },
        React.createElement("div", { style: {
                minWidth: 48,
                width: 48,
                height: 48,
                borderRadius: 100,
                background: 'url(' + user.imageUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } }),
        React.createElement("div", { style: {
                fontSize: 14,
                fontWeight: 600
            } }, user.nickname)));
}
function SearchAir() {
    var searchedPeople = [
        {
            id: 0,
            imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteon X'
        },
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteona'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'MeLiteon'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'LiteonAbc'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Liteon!'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nickname: 'Yo Liteon'
        },
    ];
    return (React.createElement(Air_1["default"], { code: 'search' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Search bar", showTitle: false },
                React.createElement("div", { style: {
                        height: 48,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#E9E9E9'
                    } },
                    React.createElement("div", { style: {
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 8
                        } },
                        React.createElement("div", { style: {
                                minWidth: 24,
                                minHeight: 24,
                                padding: 12,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 8,
                                borderRadius: 8,
                                backgroundColor: 'transparent'
                            } },
                            React.createElement(SearchOutlined_1["default"], null)),
                        React.createElement("div", { style: {
                                width: '100%',
                                height: '100%',
                                fontSize: 14,
                                fontWeight: 600,
                                paddingRight: 12
                            } },
                            React.createElement("input", { style: {
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'transparent',
                                    outline: 'none'
                                } }))))),
            React.createElement(AirContentSection_1["default"], { title: "People" },
                React.createElement("div", { style: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 16
                    } }, searchedPeople.map(function (user) { return (React.createElement(UserSearchCard, { key: user.id, user: user })); }))),
            React.createElement(AirContentSection_1["default"], { title: "Threads" }, "TODO: Threads!!!"))));
}
exports["default"] = SearchAir;
