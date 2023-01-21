"use client";

import "./global.css";
import 'react-big-calendar/lib/css/react-big-calendar.css'

import type { ReactNode } from "react";
import styled from '@emotion/styled';
import { css, Global } from "@emotion/react";
import { Roboto_Mono } from "@next/font/google";

import { AppProviders } from "providers/AppProviders";
import { ContentFooter } from "components/layout/ContentFooter";
import { CurrentSession } from "components/layout/CurrentSesstion";
import { Sidebar } from "components/layout/Sidebar";
import { Header } from "components/layout/Header";

const robotoMono = Roboto_Mono();

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: radial-gradient(#ebebeb 1px, #fff 1px);
  background-color: #fff;
  background-size: 8px 8px;
  overflow-y: hidden;

  & > * {
    margin-bottom: 0.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function RootLayout({ children }: { children: ReactNode }) {

  // const router = useRouter();
  // const [, setLoading]= useAppLoadingContext()
  // const setAppLoading = useCallback(() => setLoading(true), [setLoading]);
  // const setAppDoneLoading = useCallback(() => setLoading(false), [setLoading]);

  // useEffect(() => {
  //   router.events.on('routeChangeStart', setAppLoading);
  //   router.events.on('routeChangeComplete', setAppDoneLoading)
    
  //   return () => {
  //     router.events.off('routeChangeStart', setAppLoading);
  //     router.events.off('routeChangeComplete', setAppDoneLoading)
  //   };
  // }, [setAppLoading, setAppDoneLoading, router.events]);

  return (
    <html lang="en" className={robotoMono.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Global
          styles={css`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: "Roboto Mono", monospace;
            }
            * {
              line-height: 16px;
              letter-spacing: 0.07em;
            }
          `}
        />
        <AppProviders>
          <div className="flex h-screen w-screen overflow-hidden">
            {/* sidebar */}
            <Sidebar />
            
            {/* main */}
            <div className="flex-1 flex flex-col">
              <Header /> 
              <div className="flex-1 overflow-y-hidden">
                <div className="flex h-full">
                  <ContentWrapper>
                    {children}
                    <ContentFooter />
                  </ContentWrapper>
                  <CurrentSession />
                </div>
              </div>
            </div>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
