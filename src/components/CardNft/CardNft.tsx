"use client";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import { BiCopyAlt } from "react-icons/bi";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import IconComponent from "@/components/Icon";
import styles from "./CardNft.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import classNames from "classnames/bind";
import { verify } from "crypto";
const cx = classNames.bind(styles);
interface CardNftPros {
    id_nft: number;
    image_nft: StaticImport;
    image_user: StaticImport;
    name_nft: string;
    name_user: string;
    metadatatype: string;
    price_nft: number;
    policyid: string;
    status_verify: boolean;
    // have_price:boolean,
}
const CardNft = ({
    id_nft,
    image_nft,
    image_user,
    name_nft,
    name_user,
    metadatatype,
    price_nft,
    policyid,
    status_verify,
}: CardNftPros) => {
    return (
        <div className={cx("cardnft_container")}>
            <div className={cx("cardnft_container_image")}>
                <Link href={"detail/" + id_nft}>
                    <Image
                        src={image_nft}
                        // width={260}
                        // height={260}
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
                <div className={cx("cardnft_container_info_auth")}>
                    <div className={cx("cardnft_container_info_auth_use")}>
                        <div className={cx("user_image")}>
                            <Link href={"/account"}>
                                <Image
                                    src={image_user}
                                    // width={200}
                                    // height={300}
                                    alt="User Avatar"
                                />
                            </Link>
                        </div>
                        <span>{name_user}</span>
                    </div>
                    <div className={cx("cardnft_container_info_auth_price")}>
                        <span>{price_nft}</span>
                        <span>ADA</span>
                    </div>
                </div>
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

export default CardNft;
