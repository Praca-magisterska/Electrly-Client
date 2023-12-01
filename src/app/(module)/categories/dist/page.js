"use strict";
exports.__esModule = true;
var Content_1 = require("@/components/layouts/Content");
var Page_1 = require("@/components/layouts/Page");
var ContentSection_1 = require("@/components/layouts/ContentSection");
var ThreadCategoryCard_1 = require("@/components/elements/cards/ThreadCategoryCard");
function Signin() {
    var trendingThreads = [
        {
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Serwis Komputery"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "DIY Zrób to sam"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ogłoszenia"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Poradniki"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Programowanie"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Automatyka Przemysłowa"
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Audio i Akustyka"
        }
    ];
    return (React.createElement(Page_1["default"], null,
        React.createElement(Content_1["default"], { header: React.createElement("div", null), footer: React.createElement("div", null) },
            React.createElement(ContentSection_1["default"], { title: "Categories" }, trendingThreads.map(function (thread, index) { return (React.createElement(ThreadCategoryCard_1["default"], { key: index, category: thread })); })),
            React.createElement(ContentSection_1["default"], { title: "Category threads" }))));
}
exports["default"] = Signin;
