"use strict";
exports.__esModule = true;
var PageContent_1 = require("@/components/layouts/PageContent");
var Page_1 = require("@/components/layouts/Page");
var PageContentSection_1 = require("@/components/layouts/PageContentSection");
var ThreadCategoryCard_1 = require("@/components/elements/cards/ThreadCategoryCard");
function Categories() {
    var trendingThreads = [
        {
            id: 0,
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Serwis Komputery"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "DIY Zrób to sam"
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Ogłoszenia"
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Poradniki"
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Programowanie"
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Automatyka Przemysłowa"
        },
        {
            id: 6,
            imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Audio i Akustyka"
        },
        {
            id: 7,
            imageUrl: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Smart Home IoT"
        },
        {
            id: 8,
            imageUrl: "https://images.unsplash.com/photo-1615903214534-582a77a2a85e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Pojazdy Elektryczne"
        },
        {
            id: 9,
            imageUrl: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Dla Początkujących"
        },
        {
            id: 10,
            imageUrl: "https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Serwis RTV"
        },
        {
            id: 11,
            imageUrl: "https://images.unsplash.com/photo-1458007683879-47560d7e33c3?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Retro elektronika"
        },
        {
            id: 12,
            imageUrl: "https://images.unsplash.com/photo-1602429438429-3def765b84d4?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Sprzęt Medyczny"
        },
        {
            id: 13,
            imageUrl: "https://images.unsplash.com/photo-1564215381436-9e34e5593eea?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Elektroenergetyka"
        }
    ];
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageContent_1["default"], { header: React.createElement("div", null), footer: React.createElement("div", null) },
            React.createElement(PageContentSection_1["default"], { title: "Categories" }, trendingThreads.map(function (thread) { return (React.createElement(ThreadCategoryCard_1["default"], { key: thread.id, category: thread })); })))));
}
exports["default"] = Categories;
