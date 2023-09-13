import "./globals.scss";
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import ContextProvider from "@/contexts";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Demarket",
    description: "Demarket",
};

type Props = {
    children: ReactNode;
};
const RootLayout = function ({ children }: Props) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ContextProvider>{children}</ContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
