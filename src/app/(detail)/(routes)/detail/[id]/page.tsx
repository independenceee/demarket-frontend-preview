import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { BiCopyAlt } from "react-icons/bi";
import classNames from "classnames/bind";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import IconComponent from "@/components/Icon";
import images from "@/assets/images";
import styles from "./Detail.module.scss";
import { CgCopy } from "react-icons/cg";
import { GrFormNextLink } from "react-icons/gr";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ListHistory from "@/components/TrackHistory/ListHistory";
import ListNft from "@/components/ListNft";
import ContainerList from "@/components/ContainerList";
import { DetailNFT, DetailTab } from "@/components/Detail";
import DetailInfo from "@/components/Detail/DetailInfo/DetailInfo";

const cx = classNames.bind(styles);
interface DetaiNftPageProps {
    product: {
        id?: number;
        image_nft?: StaticImport;
        image_user?: StaticImport;
        image_creater?: StaticImport;
        name_creater?: string;
        name_nft?: string;
        name_user?: string;
        metadatatype?: string;
        price_nft?: string;
        policyid?: string;
        fingerprint?: string;
        number_hearts?: number;
        number_see?: number;
        time_buy?: Date;
        decription?: string;
        asset_name?: string;
        utxo?: string;
        wallet_address?: string;
    };
}
const DetaiNft = function () {
    const product = {
        id: 0,
        image_nft: images.NFT_11,
        image_user: images.User_1,
        image_creater: images.User_1,
        name_creater: "User 1",
        name_nft: "NFT 1",
        name_user: "User 1", //owner
        metadatatype: "Gift",
        price_nft: "90",
        policyid: "qhut0...hfteh45",
        fingerprint: "qhut0...hfteh45",
        number_hearts: 320,
        number_see: 1003,
        time_buy: Date.now(),
        decription: "A fierce member of the Neon Punks gang",
        asset_name: "Asset Name",
        utxo: "QmXP63SGSXB44iLqB3mavtY5zwfauhSrFn",
        wallet_address: "addr1q93ku...ldzvsq44ywr",
    };
    return (
        <div className={cx("container")}>
            <div className={cx("detail_container")}>
                {/* <h1>Detail NFT</h1> */}
                <div className={cx("detail_left")}>
                    <DetailNFT image_nft={product.image_nft} />
                </div>
                <div className={cx("detail_right")}>
                    <DetailInfo
                        name_nft={`${product.name_nft}`}
                        policyid={`${product.policyid}`}
                        fingerprint={`${product.fingerprint}`}
                        name_user={`${product.name_user}`}
                        wallet_address={`${product.wallet_address}`}
                        name_creater={`${product.name_creater}`}
                        price_nft={`${product.price_nft}`}
                        number_see={product.number_see}
                        number_hearts={product.number_hearts}
                        metadatatype={`${product.metadatatype}`}
                        image_user={product.image_user}
                        image_creater={product.image_creater}
                    />
                    <DetailTab
                        policyid={`${product.policyid}`}
                        asset_name={`${product.asset_name}`}
                        decription={`${product.decription}`}
                        image_nft={`${product.image_nft}`}
                        metadatatype={`${product.metadatatype}`}
                        utxo={`${product.utxo}`}
                    />
                </div>
            </div>
            <ContainerList
                title="Explore Item"
                description="Beginning of the app and website design process we know it’s tempting to dive right into picking fonts."
            >
                <ListNft />
            </ContainerList>
        </div>
    );
};
export default DetaiNft;
