"use client";

import { Blockfrost, Lucid } from "lucid-cardano";
import React, { createContext, ReactNode } from "react";

export const LucidContext = createContext<any>(null!);

type Props = {
    children: React.ReactNode;
};
const LucidProvider = function ({ children }: Props) {
    return <LucidContext.Provider value={{}}>{children}</LucidContext.Provider>;
};

export default LucidProvider;
