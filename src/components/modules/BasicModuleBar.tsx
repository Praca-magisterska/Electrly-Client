import ModuleBar from "../layouts/ModuleBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import ModuleBarButton from "../elements/buttons/ModuleBarButton";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';

import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import ModuleBarSizeButton from "../elements/buttons/ModuleBarSizeButton";

export default function GateModuleBar() {
  return  (
    <ModuleBar
        top = {
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8,
            }}>
                <ModuleBarButton href="/" label="Home">
                    <HomeOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/categories" label="Categories">
                    <CategoryOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/thread" hidden={true} label="Thread">
                    <NewspaperOutlinedIcon />
                </ModuleBarButton>
            </div>
        }
        bottom = {
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8,
            }}>
                <ModuleBarButton href="/signup" hidden={true} label="Sign up">
                    <PersonAddOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/signin" hidden={true} label="Sign in">
                    <LoginOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/reset" hidden={true} label="Reset password">
                    <LockResetOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/signout" hidden={true} label="Sign out">
                    <LogoutOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarSizeButton />
            </div>
        }
    />
  )
}