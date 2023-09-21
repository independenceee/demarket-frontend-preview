"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./TopNftItem.module.scss";
import { StaticImageData } from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import IconComponent from "@/components/Icon";

interface TopNftItemProps {
    image: StaticImageData;
    classname: string;
}

const TopNftItem = ({ image, classname }: TopNftItemProps) => {
    return (
        <div className={`${styles.topNftItem_container} ${styles[classname]}`}>
            <Link href={"#"}>
                <div className={styles.container_images}>
                    <Image
                        src={image}
                        width={360}
                        height={224}
                        alt="TopNFT"
                    ></Image>
                </div>
            </Link>
        </div>
    );
};

export default TopNftItem;
