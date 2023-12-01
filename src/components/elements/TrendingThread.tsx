export default function TrendingThread({
    title,
    user,
    imageUrl,
}: {
    title?: string,
    user?: string,
    imageUrl?: string,
}) {
    return (
        <div style={{
            width: 226,
            height: 206,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            background: 'url('+imageUrl+')',
            backgroundColor: 'grey',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div style={{
                width: 'calc(100% - 32px)',
                height: 'calc(100% - 32px)',
                margin: 16,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                color: "white",
                gap: 8
            }}>
                <div style={{
                    fontSize: 16,
                    fontWeight: 700
                }}>
                    {title}
                </div>
                <div style={{
                    fontSize: 12,
                    fontWeight: 500
                }}>
                    Posted by {user}
                </div>
            </div>
        </div>
    )
}