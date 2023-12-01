import { useContext, useEffect, useState } from "react";

import useUser from '@/hooks/useUser';
import Air from '@/components/layouts/Air';
import AirContent from "@/components/layouts/AirContent";
import AirContentSection from "@/components/layouts/AirContentSection";


export default function AccountAir() {
    const userHook = useUser();
    const [user, setUser] = useState({firstName: undefined});
    useEffect(() => {
        userHook.doGetUser().then((res)=>{
            setUser((res as any).data);
        })
    }, []);
    

    return (
        <Air code='account'>
            <AirContent>
                <AirContentSection title="Details">
                    
                    </AirContentSection>
                <AirContentSection title="Your threads">
                    
                </AirContentSection>
            </AirContent>
        </Air>
    )
}