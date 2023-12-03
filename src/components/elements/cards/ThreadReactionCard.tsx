import Link from "next/link"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export default function ThreadReactionCard({
    thread
}: {
    thread: any
}) {
    return (
        <div style={{
            width: 48,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
        }}>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center"
            }}>
                <ThumbUpOutlinedIcon/>
            </div>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center",
                fontSize: 12,
                fontWeight: 500
            }}>
                {thread.threadReactionsResult}
            </div>
            <div style={{
                height: 48,
                display: "flex",
                alignItems: "center"
            }}>
                <ThumbDownOutlinedIcon/>
            </div>
        </div>
        // <Link href={'/threads/'+thread.id} style={{
        //     display: "flex",
        //     flexDirection: "row",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     backgroundColor: "white",
        //     borderRadius: 8,
        //     minHeight: 176,
        //     width: '100%'
        // }}>
        //     <div style={{
        //         width: 'calc(100% - 32px)',
        //         height: 'calc(100% - 32px)',
        //         margin: 16,
        //         display: "flex",
        //         flexDirection: "row",
        //         alignItems: "flex-start",
        //         justifyContent: "flex-start",
        //         gap: 16
        //     }}>
        //         <div style={{
        //             width: '100%',
        //             display: "flex",
        //             flexDirection: "column",
        //             alignItems: "flex-start",
        //             justifyContent: "flex-start",
        //             gap: 8
        //         }}>
        //             <div style={{
        //                 width: '100%',
        //                 display: "flex",
        //                 flexDirection: "row",
        //                 alignItems: "center",
        //                 justifyContent: "space-between",
        //                 gap: 16
        //             }}>
        //                 <Link href={'/users/'+thread.user.id} style={{
        //                     height: 48,
        //                     display: 'flex',
        //                     flexDirection: 'row',
        //                     alignItems: 'center',
        //                     justifyContent: 'flex-start',
        //                     gap: 16,
        //                 }}>
        //                     <div style={{
        //                         minWidth: 48,
        //                         width: 48,
        //                         height: 48,
        //                         borderRadius: 100,
        //                         background: 'url(' + thread.user.imageUrl + ')',
        //                         backgroundSize: 'cover',
        //                         backgroundPosition: 'center',
        //                     }}/>
        //                     <div style={{
        //                         fontSize: 12,
        //                         fontWeight: 500
        //                     }}>
        //                         Posted by {thread.user.nickname}
        //                     </div>
        //                 </Link>
        //                 <div style={{
        //                     fontSize: 12,
        //                     fontWeight: 500
        //                 }}>
        //                     3 Hours Ago
        //                 </div>
        //             </div>
        //             <div style={{
        //                 fontSize: 16,
        //                 fontWeight: 700
        //             }}>
        //                 {thread.title}
        //             </div>
        //             <div style={{
        //                 fontSize: 12,
        //                 fontWeight: 400
        //             }}>
        //                 {thread.content}
        //             </div>
        //         </div>
        //     </div>
        // </Link>
    )
}