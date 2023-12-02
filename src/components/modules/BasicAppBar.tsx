import AppBar from "../layouts/AppBar";
import BasicAirBar from "./BasicAirBar";

export default function BasicAppBar() {

    return (
        <AppBar
                left = {
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                    }}>
                        <div style={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: 30,
                            color: '#5448C8'
                        }}>
                            {/* <Image
                                src="/logo.png"
                                width={24}
                                height={24}
                                alt="Logo"
                                /> */}
                                E!
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: 600,
                        }}>
                            Electrly
                        </div>
                    </div>
                }
                right = {
                    <BasicAirBar />
                }
            />
    )
}