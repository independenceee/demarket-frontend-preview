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
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 1",
            price: 1327.124,
        },
        {
            id_user: 1,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 2",
            price: 1327.124,
        },
        {
            id_user: 2,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 3",
            price: 1327.124,
        },
        {
            id_user: 3,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 4",
            price: 1327.124,
        },
        {
            id_user: 4,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 5",
            price: 1327.124,
        },
        {
            id_user: 5,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 6",
            price: 1327.124,
        },
        {
            id_user: 6,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 7",
            price: 1327.124,
        },
        {
            id_user: 7,
            image_user: images.logo,
            image_bg: images.logo,
            name_user: "User 7",
            price: 1327.124,
        },
    ];
    return (
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
            <MoreNext />
        </div>
    );
};

export default ListFollower;
