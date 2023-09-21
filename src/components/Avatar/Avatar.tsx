"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    avatar: string | any;
}
const Avatar = function ({ avatar }: AvatarProps) {
    return (
        <div className={styles.container_avatar}>
            <Image src={avatar} width={150} height={200} alt="Avatar" />
        </div>
    );
};
export default Avatar;
