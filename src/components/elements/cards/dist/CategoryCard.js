"use strict";
exports.__esModule = true;
function TrendingThread(_a) {
    var thread = _a.thread;
    return (React.createElement("div", { style: {
            width: 226,
            height: 206,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            background: 'url(' + thread.imageUrl + ')',
            backgroundColor: '#555555',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        } },
        React.createElement("div", { style: {
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 32px)',
                margin: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                color: "white",
                gap: 8
            } },
            React.createElement("div", { style: {
                    fontSize: 16,
                    fontWeight: 700
                } }, thread.title),
            React.createElement("div", { style: {
                    fontSize: 12,
                    fontWeight: 500
                } },
                "Posted by ",
                thread.user.nickname))));
}
exports["default"] = TrendingThread;
