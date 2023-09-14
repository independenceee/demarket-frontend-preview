"use client";

import { Blockfrost, Lucid } from "lucid-cardano";
import React, { createContext } from "react";

export const WalletContext = createContext<any>(null!);

const WalletProvider = function ({ children }: { children: React.ReactNode }) {
    return (
        <WalletContext.Provider value={{}}>{children}</WalletContext.Provider>
    );
};

export default WalletProvider;
