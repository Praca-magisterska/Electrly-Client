"use strict";
exports.__esModule = true;
function TrendingThreadCard(_a) {
    var category = _a.category;
    return (React.createElement("div", { style: {
            width: 200,
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            background: 'url(' + category.imageUrl + ')',
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
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: 8
            } },
            React.createElement("div", { style: {
                    fontSize: 16,
                    fontWeight: 700,
                    textAlign: "center"
                } }, category.name))));
}
exports["default"] = TrendingThreadCard;
