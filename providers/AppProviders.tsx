import type { ReactNode } from "react";
import { TopicContextProvider } from "context/topic/context";
import { DevtoolsProvider } from "../devtools/context";
import React from "react";
import { AppLoadingContextProvider } from "../context/loadingContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <DevtoolsProvider>
      <AppLoadingContextProvider>
        <TopicContextProvider>{children}</TopicContextProvider>
      </AppLoadingContextProvider>
    </DevtoolsProvider>
  );
};
