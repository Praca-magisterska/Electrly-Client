"use strict";
exports.__esModule = true;
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var ArticleOutlined_1 = require("@mui/icons-material/ArticleOutlined");
var link_1 = require("next/link");
function HelpArticleCard(_a) {
    var article = _a.article;
    return (React.createElement(link_1["default"], { href: '/answers/' + article.id, style: {
            display: "flex",
            flexDirection: "row",
            gap: 8
        } },
        React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 48,
                minWidth: 48,
                borderRadius: 8,
                backgroundColor: '#cbc7ee'
            } },
            React.createElement(ArticleOutlined_1["default"], null)),
        React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 500,
                wordWrap: "break-word",
                width: 'auto'
            } }, article.title)));
}
function HelpAir() {
    return (React.createElement(Air_1["default"], { code: 'help' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Popular resources" },
                React.createElement(HelpArticleCard, { article: {
                        id: 0,
                        title: 'Dlaczego nie mogę się zalogować?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 1,
                        title: 'Dlaczego w ogóle muszę się rejestrować?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 2,
                        title: 'Dlaczego wciąż jestem wylogowywany?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 3,
                        title: 'Mojego języka nie ma na liście!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 4,
                        title: 'Jak mogę zapobiec wyświetlaniu mojej ksywki na liście obecnych użytkowników?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 5,
                        title: 'Zgubiłem moje hasło!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 6,
                        title: 'Zarejestrowałem się, ale nie mogę się zalogować!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 7,
                        title: 'Rejestrowałem się kiedyś, ale nie mogę się już logować!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 8,
                        title: 'Jak mogę zmienić swoje ustawienia?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 9,
                        title: 'Zmieniłem strefę czasową ale czasy są nadal nieprawidłowe!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        id: 10,
                        title: 'Jak mogę napisać temat na forum?'
                    } })))));
}
exports["default"] = HelpAir;
