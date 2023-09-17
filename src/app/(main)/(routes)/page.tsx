import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import Bill from "@/components/Bill";
import Metadata from "@/components/Metadata";
import NftItem from "@/components/NftItem";
const cx = classNames.bind(styles);
const WalletButton = React.lazy(() => import("@/components/Wallet/Wallet"));
type Props = {};

const Home = function ({}: Props) {
    return (
        <>
            <Metadata />
            <Bill />
            <NftItem />
        </>
    );
};

export default Home;
