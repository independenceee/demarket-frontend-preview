"use client";
import React from "react";
import styles from "./Follower.module.scss";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import ButtonBorderLinear from "@/components/ButtonBorderLinear/ButtonBorderLinear";
interface FollowerPros {
    id_user: number;
    image_user: StaticImageData;
    image_bg: StaticImageData;
    name_user: string;
    price: number;
    // have_price:boolean,
}
const Follower = ({
    id_user,
    image_user,
    image_bg,
    name_user,
    price,
}: FollowerPros) => {
    return (
        <div className={styles.cardnft_container}>
            <div className={styles.cardnft_container_bg}>
                <Link href={"/pages/products/" + id_user}>
                    <Image src={image_bg} width={260} height={260} alt="BG" />
                </Link>
                <div className={styles.avatar}>
                    <Image
                        src={image_user}
                        width={50}
                        height={50}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className={styles.cardnft_container_info}>
                <div className={styles.cardnft_container_info_title}>
                    <span>{name_user}</span>
                    <span>{price}</span>
                </div>
                <ButtonBorderLinear>Follower</ButtonBorderLinear>
            </div>
        </div>
    );
};

export default Follower;
