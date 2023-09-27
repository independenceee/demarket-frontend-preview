"use client";

import React from "react";
import styles from "./NftAsset.module.scss";
import Image from "next/image";
import Link from "next/link";
import { BiCopyAlt } from "react-icons/bi";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import IconComponent from "@/components/Icon";
import classNames from "classnames/bind";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const cx = classNames.bind(styles);
interface NftAssetPros {
    id_nft: number;
    image_nft: StaticImport;
    name_nft: string;
    metadatatype: string;
    policyid: string;
    status_verify: boolean;
    // have_price:boolean,
}
const NftAsset = ({
    id_nft,
    image_nft,
    name_nft,
    metadatatype,
    policyid,
    status_verify,
}: NftAssetPros) => {
    return (
        <div className={cx("cardnft_container")}>
            <div className={cx("cardnft_container_image")}>
                <Link href={"/pages/products/" + id_nft}>
                    <Image
                        src={image_nft}
                        width={260}
                        height={260}
                        alt="CardNft"
                    ></Image>
                </Link>
                <div className={cx("cardnft_container_image_icon")}>
                    <IconComponent>
                        <AiOutlineEye />
                    </IconComponent>
                    {status_verify && (
                        <IconComponent>
                            <VscVerified />
                        </IconComponent>
                    )}
                </div>
            </div>
            <div className={cx("cardnft_container_info")}>
                <div className={cx("cardnft_container_info_title")}>
                    <span>{name_nft}</span>
                    <span>{metadatatype}</span>
                </div>
                {/* <div className={cx("cardnft_container_info_auth")}>
        <div className={cx("cardnft_container_info_auth_use")}>
          <div className={cx("user_image")}>
            <Image
              src={image_user}
              width={200}
              height={300}
              alt="User Avatar"
            />
          </div>
            <span>{name_user}</span>
        </div>
        <div className={cx("cardnft_container_info_auth_price")}>
          <span>{price_nft}</span>
          <span>ADA</span>
        </div>
      </div> */}
                <div className={cx("cardnft_container_info_PolicyID")}>
                    <span>PolicyID:</span>
                    <div
                        className={cx("cardnft_container_info_PolicyID_right")}
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
