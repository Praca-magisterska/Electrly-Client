"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useUser_1 = require("@/hooks/useUser");
var Air_1 = require("@/components/layouts/Air");
var AirContent_1 = require("@/components/layouts/AirContent");
var AirContentSection_1 = require("@/components/layouts/AirContentSection");
var ArticleOutlined_1 = require("@mui/icons-material/ArticleOutlined");
function HelpArticleCard(_a) {
    var article = _a.article;
    return (React.createElement("div", { style: {
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
    var userHook = useUser_1["default"]();
    var _a = react_1.useState({ firstName: undefined }), user = _a[0], setUser = _a[1];
    react_1.useEffect(function () {
        userHook.doGetUser().then(function (res) {
            setUser(res.data);
        });
    }, []);
    return (React.createElement(Air_1["default"], { code: 'help' },
        React.createElement(AirContent_1["default"], null,
            React.createElement(AirContentSection_1["default"], { title: "Popular resources" },
                React.createElement(HelpArticleCard, { article: {
                        title: 'Dlaczego nie mogę się zalogować?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Dlaczego w ogóle muszę się rejestrować?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Dlaczego wciąż jestem wylogowywany?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Mojego języka nie ma na liście!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Jak mogę zapobiec wyświetlaniu mojej ksywki na liście obecnych użytkowników?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Zgubiłem moje hasło!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Zarejestrowałem się, ale nie mogę się zalogować!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Rejestrowałem się kiedyś, ale nie mogę się już logować!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Jak mogę zmienić swoje ustawienia?'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Zmieniłem strefę czasową ale czasy są nadal nieprawidłowe!'
                    } }),
                React.createElement(HelpArticleCard, { article: {
                        title: 'Jak mogę napisać temat na forum?'
                    } })))));
}
exports["default"] = HelpAir;
