"use strict";
exports.__esModule = true;
var Page_1 = require("@/components/layouts/Page");
var PageContent_1 = require("@/components/layouts/PageContent");
var PageContentSection_1 = require("@/components/layouts/PageContentSection");
var link_1 = require("next/link");
var TrendingThreadCard_1 = require("@/components/elements/cards/TrendingThreadCard");
function Signin() {
    var trendingThreads = [
        {
            id: 0,
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            id: 2,
            imageUrl: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            id: 3,
            imageUrl: "https://images.unsplash.com/photo-1616243850909-f010afe8de3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            id: 4,
            imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        },
        {
            id: 5,
            imageUrl: "https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            user: { nickname: "Sam Smith" }
        }
    ];
    return (React.createElement(Page_1["default"], null,
        React.createElement(PageContent_1["default"], { header: React.createElement("div", null), footer: React.createElement("div", null) },
            React.createElement(PageContentSection_1["default"], { title: "Trending Today" },
                React.createElement("div", { style: {
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: 'wrap',
                        justifyContent: "space-between",
                        gap: 32
                    } }, trendingThreads.map(function (thread, index) { return (React.createElement(TrendingThreadCard_1["default"], { key: index, thread: thread })); }))),
            React.createElement(PageContentSection_1["default"], { title: "Nav", showTitle: false },
                React.createElement("div", { style: {
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 64
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 64,
                            minWidth: 500,
                            maxWidth: 1000,
                            width: '60%',
                            borderRadius: 8,
                            backgroundColor: 'white',
                            color: "black"
                        } }),
                    React.createElement(link_1["default"], { href: '/threads/create', style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 64,
                            minWidth: 200,
                            maxWidth: 500,
                            width: '35%',
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white",
                            fontSize: 16,
                            fontWeight: 700
                        } }, "Write new thread"))),
            React.createElement(PageContentSection_1["default"], { title: "Threads & Discussion" },
                React.createElement("div", { style: {
                        width: '100%',
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 64
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            minHeight: 64,
                            minWidth: 500,
                            maxWidth: 1000,
                            width: '60%',
                            borderRadius: 8,
                            color: "black"
                        } }, "TODO: Threads!!!"),
                    React.createElement("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            minWidth: 200,
                            maxWidth: 500,
                            width: '35%'
                        } },
                        React.createElement("div", { style: {
                                padding: 16,
                                width: '100%',
                                borderRadius: 8,
                                backgroundColor: 'white',
                                color: "black",
                                display: "flex",
                                flexDirection: "column",
                                gap: 16
                            } },
                            React.createElement("div", { style: {
                                    fontSize: 18,
                                    fontWeight: 700
                                } }, "Top Trending Topic"),
                            React.createElement("div", { style: {
                                    fontSize: 14,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 16
                                } },
                                React.createElement("div", null, "#1     Introduction to ESP32: Getting Started and Basics"),
                                React.createElement("div", null, "#2     ESP32 vs. ESP8266: A Comparative Analysis"),
                                React.createElement("div", null, "#3     Programming ESP32 with Arduino IDE: Tips and Tricks"),
                                React.createElement("div", null, "#4     IoT Projects with ESP32: Share Your Ideas and Experiences"),
                                React.createElement("div", null, "#5     Troubleshooting ESP32 Wi-Fi Connectivity Issues"),
                                React.createElement("div", null, "#6     Powering ESP32: Battery vs. USB vs. Solar Panel"),
                                React.createElement("div", null, "#7     Interfacing Sensors with ESP32: A Beginner`s Guide"),
                                React.createElement("div", null, "#8     Customizing the ESP32 Development Environment")))))))));
}
exports["default"] = Signin;
