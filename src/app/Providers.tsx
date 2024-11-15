"use client";

// Register all client providers wrapper here

import { Provider as StoreProvider } from "react-redux";
import { store } from "@/store";

import theme from "@/styles/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StoreProvider>
    </AppRouterCacheProvider>
  );
}
