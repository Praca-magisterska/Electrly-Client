import { useContext, useEffect, useState } from "react";

import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";
import UserContext from "@/context/UserContext";
import Link from "next/link";
import AirContext from "@/context/AirContext";


export default function AccountAir() {
    const airContext = useContext(AirContext);
    const userContext = useContext(UserContext);
    
    return (
        <Air code='account'>
            <AirContent>
                <AirContentSection title="Details" showTitle={false} show={userContext.isSignedOn}>
                    {userContext.imageUrl ?
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            width: '100%'
                        }}>
                            <div style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            background: 'url('+userContext.imageUrl+')',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}/>
                        </div>
                    :null}
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 20,
                        fontWeight: 700
                    }}>
                        {userContext.firstName} {userContext.lastName}
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 700
                    }}>
                        <button onClick={()=>{airContext.toggleAir('settings')}} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white"
                        }}>
                            Manage account
                        </button>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 500
                    }}>
                        <Link href={"/signout"} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        }}>
                            Sign out
                        </Link>
                    </div>
                </AirContentSection>
                <AirContentSection title="Details" showTitle={false} show={!userContext.isSignedOn}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%'
                    }}></div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 700
                    }}>
                        <Link href={"/signin"} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 273,
                            borderRadius: 8,
                            backgroundColor: '#5448C8',
                            color: "white"
                        }}>
                            Sign in
                        </Link>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '100%',
                        fontSize: 16,
                        fontWeight: 500,
                        gap: 13
                    }}>
                        <Link href={"/signup"} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: 48,
                            minWidth: 130,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black"
                        }}>
                            Sign up
                        </Link>
                        <Link href={"/reset"} style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            height: 48,
                            width: 130,
                            borderRadius: 8,
                            border: '2px solid #5448C8',
                            color: "black",

                        }}>
                            Reset password
                        </Link>
                    </div>
                </AirContentSection>
                <AirContentSection title="Your threads">
                    
                </AirContentSection>
            </AirContent>
        </Air>
    )
}