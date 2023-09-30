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
    id: number;
}

const TopNftItem = ({ image, classname, id }: TopNftItemProps) => {
    return (
        <div className={`${styles.topNftItem_container} ${styles[classname]}`}>
            <Link href={"detail/" + id}>
                <div className={styles.container_images}>
                    <Image
                        src={image}
                        // width={360}
                        // height={224}
                        alt="TopNFT"
                    ></Image>
                </div>
            </Link>
        </div>
    );
};

export default TopNftItem;
