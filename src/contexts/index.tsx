import React, { ReactNode } from "react";
import WalletProvider from "./WalletProvider";
type Props = {
    children: ReactNode;
};

const ContextProvider = function ({ children }: Props) {
    return <WalletProvider>{children}</WalletProvider>;
};

export default ContextProvider;
