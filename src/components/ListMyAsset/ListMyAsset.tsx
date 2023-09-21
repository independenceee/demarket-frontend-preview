"use client";
import styles from "./ListMyAsset.module.scss";

import React from "react";

import NftAsset from "./NftAsset/NftAsset";
import images from "@/assets/images";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
const ListMyAsset = () => {
    const NFTs = [
        {
            id: 0,
            image_nft: images.logo,

            name_nft: "NFT 1",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 1,
            image_nft: images.logo,

            name_nft: "NFT 2",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 2,
            image_nft: images.logo,

            name_nft: "NFT 3",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 3,
            image_nft: images.logo,

            name_nft: "NFT 4",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 4,
            image_nft: images.logo,

            name_nft: "NFT 5",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 5,
            image_nft: images.logo,

            name_nft: "NFT 6",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 6,
            image_nft: images.logo,

            name_nft: "NFT 7",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
        {
            id: 7,
            image_nft: images.logo,

            name_nft: "NFT 7",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
        },
    ];
    return (
        <div className={styles.listnft_container_box}>
            {NFTs.map((NFT) => {
                return (
                    <NftAsset
                        key={NFT.id}
                        id_nft={NFT.id}
                        image_nft={NFT.image_nft}
                        name_nft={`${NFT.name_nft}`}
                        metadatatype={`${NFT.metadatatype}`}
                        policyid={`${NFT.policyid}`}
                    />
                );
            })}
        </div>
    );
};

export default ListMyAsset;
