"use client";
import React from "react";
import { Lucid } from "lucid-cardano";
import styles from "./Wallet.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const Wallet = function () {
    const handleConnectWallet = async () => {
        try {
            const lucid = await Lucid.new();
            const api = await window.cardano.eternl.enable();
            const address = await lucid.wallet.address();
            lucid.selectWallet(api);
            console.log(address);
            // Do something with lucid
        } catch (error) {
            console.error("An error occurred:", error);
            // Handle the error here
        }
    };
    async function wallet() {
        const lucid = await Lucid.new();
        const api = await window.cardano.eternl.enable();
        const address = await lucid.wallet.address();
        lucid.selectWallet(api);
        const reward = await lucid.wallet.rewardAddress();
        console.log(reward);
    }

    return (
        <div className={styles.container_wallet}>
            <button
                onClick={handleConnectWallet}
                className={styles.connectwallet}
            >
                ConnectWallet <IoMdArrowDropdown />
            </button>
        </div>
    );
};

export default Wallet;
