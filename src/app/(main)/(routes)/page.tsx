"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);
const WalletButton = React.lazy(
    () => import("@/components/Wallet/Wallet"),
);
type Props = {};

const Home = function ({}: Props) {
    return <WalletButton />;
};

export default Home;
