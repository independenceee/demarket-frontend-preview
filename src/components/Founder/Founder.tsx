"use client";
import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Founder.module.scss";
import images from "@/assets/images";
import Button from "@/components/Button";
import { FaFacebookSquare ,FaTwitter} from "react-icons/fa";
import { BsGithub, BsLinkedin, BsInstagram}from "react-icons/bs"
import Link from "next/link";

const cx = classNames.bind(styles);
type Props = {
    imageUrl?: string | any;
};

const Founder = function ({ imageUrl }: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("image-container")}>
                    <Image
                        src={images.background}
                        alt=""
                        className={cx("image")}
                    />
                </div>

                <div className={cx("profession")}>
                    <span className={cx("name")}>Nguyen Khanh</span>
                    <span className={cx("description")}>
                        Blockchain Developer
                    </span>
                    <div className={cx("media-icon")}>
                        <Link href="#" className={cx("icon-link")}>
                            <FaFacebookSquare className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsInstagram className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsLinkedin className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <FaTwitter className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsGithub className={cx("icon")} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;
