"use client";

import React from "react";
import { Lucid, Blockfrost, } from "lucid-cardano";

export default function Wallet() {
    const handleConnectWallet = async () => {
        try {
            console.log("connecting ...");
            const lucid = await Lucid.new(
                new Blockfrost(
                    "https://cardano-preview.blockfrost.io/api/v0",
                    "previewad7caqvYiu70SZAKSYQKg3EE9WsIrcF3",
                ),
                "Preview",
            );
            const api = await window.cardano.nami.enable();
            lucid.selectWallet(api);
            const utxos = await lucid.wallet.address();
            const matchingNumberScript: any = {
                type: "PlutusV2",
                script: "addr_test1wpv3qpre5qwhr9x9x5jmyu8cgkgkwg3khgq85g8zktdeg8sejge4c",
            };

            const matchingNumberAddress =
                lucid.utils.validatorToAddress(matchingNumberScript);

            const tx = await lucid
                .newTx()
                .payToContract(
                    matchingNumberAddress,
                    { inline: Data.to(100n)},
                    {
                        lovelace: 20000000n,
                    },
                )
                .complete();

            const signedTx = await tx.sign().complete();

            const txHash = await signedTx.submit();
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <button onClick={handleConnectWallet}>ConnectWallet</button>
        </div>
    );
}
