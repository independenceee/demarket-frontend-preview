"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "./User.module.scss";
import images from "@/assets/images";
import {
    BiCopyAlt,
    BiSolidUserCircle,
    BiUser,
    BiEdit,
    BiLogOut,
} from "react-icons/bi";
import Icon from "@/components/Icon";
interface UserProps {
    // openUserProp:boolean,
    // handleOpenUser:()=>void
}
// openUserUnLog:boolean,

const User = ({}: UserProps) => {
    const [openBackAvatar, setOpenBackAvatar] = useState(false);
    const [useUnLog, setUserLog] = useState(false);
    const handleOpenBGAvatar = function () {
        setOpenBackAvatar(!openBackAvatar);
    };
    return (
        <div className={styles.container_user}>
            {useUnLog ? (
                <div className={styles.container_user_unlog}>
                    <Icon>
                        <BiSolidUserCircle />
                    </Icon>
                    <span>{"9"}</span>
                </div>
            ) : (
                <div className={styles.container_user_log}>
                    <div
                        className={styles.container_avatar_display}
                        onClick={handleOpenBGAvatar}
                    >
                        <Image
                            src={images.background}
                            width={400}
                            height={300}
                            alt="Avatar"
                        />
                    </div>
                    {openBackAvatar && (
                        <div className={styles.container_fullback}>
                            <div className={styles.container_background}>
                                <Image
                                    src={images.background}
                                    width={300}
                                    height={400}
                                    alt="BackGround User"
                                />
                                <div className={styles.container_avatar}>
                                    <Image
                                        src={images.background}
                                        width={400}
                                        height={300}
                                        alt="Avatar"
                                    />
                                </div>
                                <div className={styles.user_name}>
                                    @ <span>{"User_Name"}</span>
                                </div>
                            </div>

                            <div className={styles.detail_info}>
                                <div className={styles.row_info}>
                                    <span>Wallet</span>
                                    <span>
                                        {"qhut0...hfteh45"} <BiCopyAlt />
                                    </span>
                                </div>
                                <div className={styles.row_info}>
                                    <span>Balance</span>
                                    <span>{"1321.1241"} </span>
                                </div>
                                <div className={styles.row_info}>
                                    <span>Account</span>
                                    <span>
                                        <Icon>
                                            <BiSolidUserCircle />
                                        </Icon>
                                    </span>
                                </div>
                                <div className={styles.row_info}>
                                    <span>Edit Profile</span>
                                    <span>
                                        <Icon>
                                            <BiEdit />
                                        </Icon>
                                    </span>
                                </div>
                                <div className={styles.row_info}>
                                    <span>Log Out</span>
                                    <span>
                                        <Icon>
                                            <BiLogOut />
                                        </Icon>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default User;
