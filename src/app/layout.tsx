import "./globals.scss";
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import ContextProvider from "@/contexts";
import { Open_Sans } from "next/font/google";
import DefaultLayout from "@/layouts/DefaultLayouts";
import Script from "next/script";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DEMARKET",
    description: "Demarket",
};

type Props = {
    children: ReactNode;
};
const RootLayout = function ({ children }: Props) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ContextProvider>
                    <DefaultLayout>{children}</DefaultLayout>
                </ContextProvider>
            </body>
            <Script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
                integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
                crossOrigin="anonymous"
            ></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
                integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
                crossOrigin="anonymous"
            ></Script>
        </html>
    );
};

export default RootLayout;
