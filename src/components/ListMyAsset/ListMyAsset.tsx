"use client";
import styles from "./ListMyAsset.module.scss";

import React from "react";

import NftAsset from "./NftAsset/NftAsset";
import images from "@/assets/images";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import classNames from "classnames/bind";
import MoreNext from "../MoreNext/MoreNext";
const cx = classNames.bind(styles);
const ListMyAsset = () => {
    const NFTs = [
        {
            id: 0,
            image_nft: images.NFT_1,

            name_nft: "NFT 0",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: true,
        },
        {
            id: 1,
            image_nft: images.NFT_2,

            name_nft: "NFT 1",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: false,
        },
        {
            id: 2,
            image_nft: images.NFT_3,

            name_nft: "NFT 3",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: true,
        },
        {
            id: 3,
            image_nft: images.NFT_4,

            name_nft: "NFT 3",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: true,
        },
        {
            id: 4,
            image_nft: images.NFT_4,

            name_nft: "NFT 4",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: true,
        },
        {
            id: 5,
            image_nft: images.NFT_5,

            name_nft: "NFT 5",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: false,
        },
        {
            id: 6,
            image_nft: images.NFT_6,

            name_nft: "NFT 6",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: true,
        },
        {
            id: 7,
            image_nft: images.NFT_7,

            name_nft: "NFT 7",

            metadatatype: "Gift",
            policyid: "qhut0...hfteh45",
            status_verify: false,
        },
    ];
    return (
        <div className={cx("container")}>
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
                            status_verify={NFT.status_verify}
                        />
                    );
                })}
            </div>
            <MoreNext />
        </div>
    );
};

export default ListMyAsset;
