import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useContext } from "react";
import AppBarContext from "@/context/AppBarContext";
import AirContext from "@/context/AirContext";
import ModuleBarContext from "@/context/ModuleBarContext";
import PageBarContext from "@/context/PageBarContext";

import AirBar from "../layouts/AirBar";
import AirBarButton from '../elements/AirBarButton';

export default function BasicAirBar() {
    const appBarContext = useContext(AppBarContext);
    const airContext = useContext(AirContext);
    const moduleBarContext = useContext(ModuleBarContext);
    const pageBarContext = useContext(PageBarContext);

    return (
        <AirBar>
            <AirBarButton code="search">
                <SearchOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="help">
                <HelpOutlineOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="settings">
                <SettingsOutlinedIcon />
            </AirBarButton>
            <AirBarButton code="account" label='Jakub'>
                <AccountCircleOutlinedIcon />
            </AirBarButton>
        </AirBar>
    )
}