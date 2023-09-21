"use client";

import React from "react";
import styles from "./NftAsset.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";

import Link from "next/link";
import { BiCopyAlt } from "react-icons/bi";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import IconComponent from "@/components/Icon";
interface NftAssetPros {
    id_nft: number;
    image_nft: StaticImageData;
    name_nft: string;
    metadatatype: string;
    policyid: string;
    // have_price:boolean,
}
const NftAsset = ({
    id_nft,
    image_nft,
    name_nft,
    metadatatype,
    policyid,
}: NftAssetPros) => {
    return (
        <div className={styles.cardnft_container}>
            <div className={styles.cardnft_container_image}>
                <Link href={"/pages/products/" + id_nft}>
                    <Image
                        src={image_nft}
                        width={260}
                        height={260}
                        alt="CardNft"
                    ></Image>
                </Link>
                <div className={styles.cardnft_container_image_icon}>
                    <IconComponent>
                        <AiOutlineEye />
                    </IconComponent>
                    <IconComponent>
                        <VscVerified />
                    </IconComponent>
                </div>
            </div>
            <div className={styles.cardnft_container_info}>
                <div className={styles.cardnft_container_info_title}>
                    <span>{name_nft}</span>
                    <span>{metadatatype}</span>
                </div>
                {/* <div className={styles.cardnft_container_info_auth}>
        <div className={styles.cardnft_container_info_auth_use}>
          <div className={styles.user_image}>
            <Image
              src={image_user}
              width={200}
              height={300}
              alt="User Avatar"
            />
          </div>
            <span>{name_user}</span>
        </div>
        <div className={styles.cardnft_container_info_auth_price}>
          <span>{price_nft}</span>
          <span>ADA</span>
        </div>
      </div> */}
                <div className={styles.cardnft_container_info_PolicyID}>
                    <span>PolicyID:</span>
                    <div
                        className={styles.cardnft_container_info_PolicyID_right}
                    >
                        <span>{policyid}</span>
                        <IconComponent>
                            <BiCopyAlt />
                        </IconComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftAsset;
