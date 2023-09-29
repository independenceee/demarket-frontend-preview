"use client";

import React from "react";
import images from "@/assets/images";
import styles from "./ListFollower.module.scss";
import Follower from "./Follower/Follower";
import classNames from "classnames/bind";
import MoreNext from "../MoreNext/MoreNext";
interface ListFollowerProps {}
const cx = classNames.bind(styles);
const ListFollower = ({}: ListFollowerProps) => {
    const Followers = [
        {
            id_user: 0,
            image_user: images.User_1,
            image_bg: images.NFT_1,
            name_user: "User 1",
            price: 1327.124,
        },
        {
            id_user: 1,
            image_user: images.User_2,
            image_bg: images.NFT_2,
            name_user: "User 2",
            price: 1327.124,
        },
        {
            id_user: 2,
            image_user: images.User_3,
            image_bg: images.NFT_3,
            name_user: "User 3",
            price: 1327.124,
        },
        {
            id_user: 3,
            image_user: images.User_4,
            image_bg: images.NFT_4,
            name_user: "User 4",
            price: 1327.124,
        },
        {
            id_user: 4,
            image_user: images.User_5,
            image_bg: images.NFT_5,
            name_user: "User 5",
            price: 1327.124,
        },
        {
            id_user: 5,
            image_user: images.User_6,
            image_bg: images.NFT_6,
            name_user: "User 6",
            price: 1327.124,
        },
        {
            id_user: 6,
            image_user: images.User_7,
            image_bg: images.NFT_7,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 7,
            image_user: images.User_1,
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
                        <Follower
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

export default ListFollower;
