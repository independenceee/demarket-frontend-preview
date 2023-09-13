"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import { Blockfrost, Lucid } from "lucid-cardano";
const cx = classNames.bind(styles);

type Props = {};

const Home = function ({}: Props) {
    const connectWallet = async function () {
        const lucid = await Lucid.new(
            new Blockfrost(
                "https://cardano-preview.blockfrost.io/api/v0",
                process.env.BLOCKFROST_PROJECT_ID_SECRET!,
            ),
            "Preview",
        );
        const api = await window.cardano.etherum.enable();
        lucid.selectWallet(api);
    };
    return <button onClick={connectWallet}>Connect Wallet</button>;
};

export default Home;
