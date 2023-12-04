import Link from "next/link"
import ThreadReactionCard from "./ThreadReactionCard"
import Page from "@/components/layouts/Page"
import PageContent from "@/components/layouts/PageContent"
import PageContentSection from "@/components/layouts/PageContentSection"
import ThreadCommentReactionCard from "./ThreadCommentReactionCard"

export default function ThreadMainCard({
    comment,
    showUser = true
}: {
    comment: any,
    showUser?: boolean
}) {
    return(
                <div title="Answers">
                    <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 8,
                    minHeight: 176,
                    width: '85%'
                    }}>
                        <div style={{
                            width: 'calc(100% - 32px)',
                            height: 'calc(100% - 32px)',
                            margin: 16,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: 16
                        }}>
                            <ThreadCommentReactionCard comment={comment}/>
                            <div style={{
                                width: '100%',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: 8
                            }}>
                                <div style={{
                                    width: '100%',
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 16
                                }}>
                                    {showUser ?
                                        <Link href={'/community/people/'+comment.user.id} style={{
                                            height: 48,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            gap: 16,
                                        }}>
                                            <div style={{
                                                minWidth: 48,
                                                width: 48,
                                                height: 48,
                                                borderRadius: 100,
                                                background: 'url(' + comment.user.imageUrl + ')',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}/>
                                            <div style={{
                                                fontSize: 12,
                                                fontWeight: 500
                                            }}>
                                                Answered by {comment.user.nickname}
                                            </div>
                                        </Link>
                                    :null}
                                    <div style={{
                                        fontSize: 12,
                                        fontWeight: 500
                                    }}>
                                        1 Hour Ago
                                    </div>
                                </div>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: 400
                                }}>
                                    {comment.content}  
                                </div>
                            </div>  
                        </div>
                    </div>  
                </div>

                
            
       
    )
}