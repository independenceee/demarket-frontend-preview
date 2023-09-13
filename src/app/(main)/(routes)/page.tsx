"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import { Blockfrost, Lucid } from "lucid-cardano";
const cx = classNames.bind(styles);

type Props = {};

const Home = function ({}: Props) {
    const connectWallet = async function () {
        const api = await window.cardano.nami.enable();
    };
    return <button onClick={connectWallet}>Connect Wallet</button>;
};

export default Home;
