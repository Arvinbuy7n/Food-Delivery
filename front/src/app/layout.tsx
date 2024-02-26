import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

import { Header } from "../components/layout/Header";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "../theme";
import { Footer } from "../components/layout/Footer";
import { AuthProvider } from "../components/providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FoodProvider } from "../components/providers/FoodProvider";
import { CardProvider } from "../components/providers/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <Box sx={{ minHeight: "100vh" }} m={"auto"}>
                <FoodProvider>
                  <CardProvider>
                    <Header />
                    {children}
                    <Footer />
                  </CardProvider>
                </FoodProvider>

                <ToastContainer />
              </Box>
            </AuthProvider>
          </ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
