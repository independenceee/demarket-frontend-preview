"use client";
import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./InfoBg.module.scss";
import Button from "@/components/Button";
import IconComponent from "@/components/Icon";
import {
    AiOutlineCamera,
    AiOutlineFacebook,
    AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
interface InfoBGProps {
    user: {
        image_bg: StaticImageData;
        image_av: StaticImageData;
        user_name: string;
        sologan: string;
        link_face: string;
        link_twitter: string;
    };
}
const InfoBg = ({ user }: InfoBGProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image src={user.image_bg} width={1440} height={792} alt="BG" />
                <div className={styles.avatar}>
                    <Image
                        src={user.image_av}
                        width={1536}
                        height={2340}
                        alt="AV"
                    />
                </div>
                <div className={styles.icon}>
                    <IconComponent>
                        <AiOutlineCamera />
                    </IconComponent>
                </div>
                <div className={styles.follow}>
                    <Button className="btn_config_default">Follow</Button>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.row_description}>
                    <div className={styles.name}>
                        <h1>{user.user_name}</h1>
                        <Link href={"#"}>
                            <HiOutlinePencilAlt />
                        </Link>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}>
                            <Link href={user.link_face}>
                                {" "}
                                <BiLogoFacebook />
                            </Link>
                        </div>
                        <div className={styles.icon}>
                            <Link href={user.link_twitter}>
                                <AiOutlineTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.sologan}>{user.sologan}</div>
            </div>
        </div>
    );
};

export default InfoBg;
