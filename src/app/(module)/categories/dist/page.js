"use strict";
exports.__esModule = true;
var Content_1 = require("@/components/layouts/Content");
var Page_1 = require("@/components/layouts/Page");
var ContentSection_1 = require("@/components/layouts/ContentSection");
var TrendingThread_1 = require("@/components/elements/cards/TrendingThread");
function Signin() {
    var trendingThreads = [
        {
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        }
    ];
    return (React.createElement(Page_1["default"], null,
        React.createElement(Content_1["default"], { header: React.createElement("div", null), footer: React.createElement("div", null) },
            React.createElement(ContentSection_1["default"], { title: "Categories" }, trendingThreads.map(function (thread, index) { return (React.createElement(TrendingThread_1["default"], { key: index, thread: thread })); })),
            React.createElement(ContentSection_1["default"], { title: "Category threads" }))));
}
exports["default"] = Signin;
