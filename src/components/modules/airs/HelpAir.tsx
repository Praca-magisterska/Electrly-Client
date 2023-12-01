import { useContext, useEffect, useState } from "react";

import useUser from '@/hooks/useUser';
import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";


export default function HelpAir() {
    const userHook = useUser();
    const [user, setUser] = useState({firstName: undefined});
    useEffect(() => {
        userHook.doGetUser().then((res)=>{
            setUser((res as any).data);
        })
    }, []);
    

    return (
        <Air code='help'>
            <AirContent>
                <AirContentSection title="Popular resources">
                    
                </AirContentSection>
            </AirContent>
        </Air>
    )
}