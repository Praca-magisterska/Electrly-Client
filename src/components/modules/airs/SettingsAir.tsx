import { useContext, useEffect, useState } from "react";

import useUser from '@/hooks/useUser';
import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";


export default function SettingsAir() {
    const userHook = useUser();
    const [user, setUser] = useState({firstName: undefined});
    useEffect(() => {
        userHook.doGetUser().then((res)=>{
            setUser((res as any).data);
        })
    }, []);
    

    return (
        <Air code='settings'>
            <AirContent>
                <AirContentSection title="Display settings">
                    
                </AirContentSection>
                <AirContentSection title="Account settings">
                    
                </AirContentSection>
            </AirContent>
        </Air>
    )
}