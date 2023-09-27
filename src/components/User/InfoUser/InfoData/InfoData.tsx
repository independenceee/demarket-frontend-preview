"use client";
import React from "react";
import styles from "./InfoData.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiIdBadge } from "react-icons/tfi";
import { GrKey, GrTransaction } from "react-icons/gr";
import {
    AiOutlineFileImage,
    AiOutlineStar,
    AiOutlineFieldTime,
} from "react-icons/ai";
import { SlUserFollow } from "react-icons/sl";
import { BiCopyAlt } from "react-icons/bi";
import { Data } from "lucid-cardano";
import IconComponent from "@/components/Icon";
import classNames from "classnames/bind";
interface InfoDataProps {
    data: {
        policy: string;
        stake_key: string;
        numbers_nft: number;
        nfts_selled: number;
        followers: number;
        rating: number;
        joined: Date;
    };
}
const cx = classNames.bind(styles);
const InfoData = ({ data }: InfoDataProps) => {
    const currentDate = data.joined;
    const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    return (
        <div className={cx("container")}>
            <div className={cx("row_data_header")}>
                <h1>Introduce</h1>
                <IoMdArrowDropdown />
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <TfiIdBadge />
                    <span>Policy</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.policy}</span>
                    <IconComponent>
                        <BiCopyAlt />
                    </IconComponent>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <GrKey />
                    <span>Stake Key</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.stake_key}</span>
                    <IconComponent>
                        <BiCopyAlt />
                    </IconComponent>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <AiOutlineFileImage />
                    <span>NFTs</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.numbers_nft}</span>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <GrTransaction />
                    <span>NFTs Selled</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.nfts_selled}</span>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <SlUserFollow />
                    <span>Followers</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.followers}</span>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <AiOutlineStar />
                    <span>Rating</span>
                </div>
                <div className={cx("right_data")}>
                    <span>{data.rating}</span>
                </div>
            </div>
            <div className={cx("row_data")}>
                <div className={cx("left_data")}>
                    <AiOutlineFieldTime />
                    <span>Time Joined</span>
                </div>
                <div className={cx("Time")}>
                    <span>
                        {formattedDate} {formattedTime}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoData;
