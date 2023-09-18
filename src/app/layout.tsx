import "./globals.scss";
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import ContextProvider from "@/contexts";
import { Open_Sans } from "next/font/google";
import DefaultLayout from "@/layouts/DefaultLayouts";

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
        </html>
    );
};

export default RootLayout;
