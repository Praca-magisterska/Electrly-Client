import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';


function HelpArticleCard({
    article,
}: {
    article: any
}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 8
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 48,
                minWidth: 48,
                borderRadius: 8,
                backgroundColor: '#cbc7ee',
            }}>
                <ArticleOutlinedIcon/>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 500,
                wordWrap: "break-word",
                width: 'auto'
            }}>
                {article.title}
            </div>
        </div>
    )
}


export default function HelpAir() {
    return (
        <Air code='help'>
            <AirContent>
                <AirContentSection title="Popular resources">
                    <HelpArticleCard
                        article={{
                        title: 'Dlaczego nie mogę się zalogować?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Dlaczego w ogóle muszę się rejestrować?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Dlaczego wciąż jestem wylogowywany?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Mojego języka nie ma na liście!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Jak mogę zapobiec wyświetlaniu mojej ksywki na liście obecnych użytkowników?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Zgubiłem moje hasło!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Zarejestrowałem się, ale nie mogę się zalogować!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Rejestrowałem się kiedyś, ale nie mogę się już logować!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Jak mogę zmienić swoje ustawienia?',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Zmieniłem strefę czasową ale czasy są nadal nieprawidłowe!',
                        }}
                    />
                    <HelpArticleCard
                        article={{
                        title: 'Jak mogę napisać temat na forum?',
                        }}
                    />
                </AirContentSection>
            </AirContent>
        </Air>
    )
}