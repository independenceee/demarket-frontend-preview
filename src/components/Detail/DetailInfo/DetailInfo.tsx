import React from "react";

import styles from "./DetailInfo.module.scss";
import classNames from "classnames/bind";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiCopyAlt } from "react-icons/bi";
import Button from "@/components/Button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface props {
    name_nft?: string;
    policyid?: string;
    fingerprint?: string;
    image_user: StaticImport;
    name_user?: string;
    wallet_address?: string;
    image_creater: StaticImport;
    name_creater?: string;
    price_nft?: string;
    number_see?: number;
    number_hearts?: number;
    metadatatype?: string;
}

const cx = classNames.bind(styles);
const DetailInfo = ({
    name_nft,
    policyid,
    fingerprint,
    name_user,
    wallet_address,
    name_creater,
    price_nft,
    number_see,
    number_hearts,
    metadatatype,
    image_user,
    image_creater,
}: props) => {
    return (
        <div className={cx("container")}>
            <div className={cx("container_detail_info_general")}>
                <h1>{name_nft}</h1>
                <div className={cx("container_detail_info_one_row")}>
                    <div className={cx("left")}>
                        <span>Type: </span>
                        <span>{metadatatype}</span>
                    </div>
                    <div className={cx("right")}>
                        <span>
                            <AiOutlineEye />
                            {number_see}
                        </span>
                        <span>
                            <AiOutlineHeart />
                            {number_hearts}
                        </span>
                    </div>
                </div>
                <div className={cx("container_detail_info_one_row")}>
                    <div className={cx("left")}>
                        <span>PolicyID: </span>
                        <span>{policyid}</span> <BiCopyAlt />
                    </div>
                </div>
                <div className={cx("container_detail_info_one_row")}>
                    <div className={cx("left")}>
                        <span>FingerPrint: </span>
                        <span>{fingerprint}</span> <BiCopyAlt />
                    </div>
                </div>
                <div
                    className={`${cx("container_detail_info_one_row")} ${cx(
                        "container_owner",
                    )}`}
                >
                    <div className={`${cx("owner_left")} ${cx("owner")}`}>
                        <h2>Owner</h2>
                        <div className={cx("owner_box")}>
                            <div className={cx("avatar")}>
                                <Image
                                    src={image_user}
                                    // width={150}
                                    // height={200}
                                    alt="avatar"
                                />
                            </div>
                            <div className={cx("info_owner")}>
                                <h3>{name_user}</h3>
                                <span>{wallet_address}</span> <BiCopyAlt />
                            </div>
                        </div>
                    </div>
                    <div className={`${cx("owner_right")} ${cx("owner")}`}>
                        <h2>Creator</h2>
                        <div className={cx("owner_box")}>
                            <div className={cx("avatar")}>
                                <Image
                                    src={image_creater}
                                    // width={150}
                                    // height={200}
                                    alt="avatar"
                                />
                            </div>
                            <div className={cx("info_owner")}>
                                <h3>{name_creater}</h3>
                                <span>{wallet_address}</span> <BiCopyAlt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("box_buy")}>
                <Button className={cx("primary")}>{price_nft}ADA</Button>
                <Button className={cx("primary")}>Buy</Button>
            </div>
        </div>
    );
};

export default DetailInfo;