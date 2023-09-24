import React, { ReactNode } from "react";
import WalletProvider from "./LucidProvider";
type Props = {
    children: ReactNode;
};

const ContextProvider = function ({ children }: Props) {
    return <WalletProvider>{children}</WalletProvider>;
};

export default ContextProvider;
