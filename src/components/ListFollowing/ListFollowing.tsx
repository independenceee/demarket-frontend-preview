"use client";

import React from "react";
import images from "@/assets/images";
import styles from "./ListFollowing.module.scss";
import Following from "./Following/Following";
import MoreNext from "../MoreNext/MoreNext";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
interface ListFollowingProps {}
const ListFollowing = ({}: ListFollowingProps) => {
    const Followers = [
        {
            id_user: 0,
            image_user: images.NFT_1,
            image_bg: images.NFT_1,
            name_user: "User 1",
            price: 1327.124,
        },
        {
            id_user: 1,
            image_user: images.NFT_2,
            image_bg: images.NFT_2,
            name_user: "User 1",
            price: 1327.124,
        },
        {
            id_user: 2,
            image_user: images.NFT_3,
            image_bg: images.NFT_3,
            name_user: "User 2",
            price: 1327.124,
        },
        {
            id_user: 3,
            image_user: images.NFT_4,
            image_bg: images.NFT_4,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 4,
            image_user: images.NFT_5,
            image_bg: images.NFT_5,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 5,
            image_user: images.NFT_6,
            image_bg: images.NFT_6,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 6,
            image_user: images.NFT_7,
            image_bg: images.NFT_7,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 7,
            image_user: images.NFT_8,
            image_bg: images.NFT_8,
            name_user: "User 7",
            price: 1327.124,
        },
    ];
    return (
        <div className={cx("container")}>
            <div className={cx("listnft_container_box")}>
                {Followers.map((Fol) => {
                    return (
                        <Following
                            key={Fol.id_user}
                            id_user={Fol.id_user}
                            image_user={Fol.image_user}
                            image_bg={Fol.image_bg}
                            name_user={`${Fol.name_user}`}
                            price={Fol.price}
                        />
                    );
                })}
            </div>
            <MoreNext />
        </div>
    );
};

export default ListFollowing;
