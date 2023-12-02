"use client"
import './globals.css'
import type { Metadata } from 'next'

import App from "@/components/layouts/App"
import BasicAppBar from "@/components/modules/BasicAppBar"

import useAppBar from '@/hooks/useAppBar';
import AppBarContext from '@/context/AppBarContext';
import useAir from '@/hooks/useAir';
import AirContext from '@/context/AirContext';
import useModuleBar from '@/hooks/useModuleBar';
import ModuleBarContext from '@/context/ModuleBarContext';
import usePageBar from '@/hooks/usePageBar'
import PageBarContext from '@/context/PageBarContext';
import useUser from '@/hooks/useUser'
import UserContext from '@/context/UserContext';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountAir from '@/components/modules/airs/AccountAir'
import SettingsAir from '@/components/modules/airs/SettingsAir'
import HelpAir from '@/components/modules/airs/HelpAir'
import SearchAir from '@/components/modules/airs/SearchAir'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const appBarHook = useAppBar();
  const airHook = useAir();
  const moduleBarHook = useModuleBar();
  const pageBarHook = usePageBar();
  const userHook = useUser();

  return (
    <html lang="en">
      <body>
        <AppBarContext.Provider value={appBarHook}>
          <AirContext.Provider value={airHook}>
            <ModuleBarContext.Provider value={moduleBarHook}>
              <PageBarContext.Provider value={pageBarHook}>
                <UserContext.Provider value={userHook}>
                  <App bar = {
                    <BasicAppBar />
                  }
                  air = {
                    <>
                      <AccountAir/>
                      <SettingsAir/>
                      <HelpAir/>
                      <SearchAir/>
                    </>
                  }>
                    {children}
                  </App>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </UserContext.Provider>
              </PageBarContext.Provider>
            </ModuleBarContext.Provider>
          </AirContext.Provider>
        </AppBarContext.Provider>
      </body>
    </html>
  )
}
