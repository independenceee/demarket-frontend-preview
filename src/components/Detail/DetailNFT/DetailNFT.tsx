import classNames from "classnames/bind";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";
import styles from "./DetailNFT.module.scss";
import IconComponent from "@/components/Icon";
import { AiOutlineEye } from "react-icons/ai";
import { VscVerified } from "react-icons/vsc";
const cx = classNames.bind(styles);
interface props {
    image_nft: StaticImport;
}
const DetailNFT = ({ image_nft }: props) => {
    return (
        <div className={cx("container_image")}>
            <Image
                src={image_nft}
                width={716}
                height={912}
                alt="NFT image Detail"
            />
            <div className={cx("cardnft_container_image_icon")}>
                <IconComponent>
                    <AiOutlineEye />
                </IconComponent>
                <IconComponent>
                    <VscVerified />
                </IconComponent>
            </div>
        </div>
    );
};

export default DetailNFT;
