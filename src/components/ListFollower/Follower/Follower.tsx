"use client";
import React from "react";
import styles from "./Follower.module.scss";

import Link from "next/link";
import Image from "next/image";
import ButtonBorderLinear from "@/components/ButtonBorderLinear/ButtonBorderLinear";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
interface FollowerPros {
    id_user: number;
    image_user: StaticImport;
    image_bg: StaticImport;
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
        <div className={cx("cardnft_container")}>
            <div className={cx("cardnft_container_bg")}>
                <Link href={"/pages/products/" + id_user}>
                    <Image src={image_bg} alt="BG" />
                </Link>
                <div className={cx("avatar")}>
                    <Link href={"/account"}>
                        <Image
                            src={image_user}
                            width={50}
                            height={50}
                            alt="Avatar"
                        />
                    </Link>
                </div>
            </div>
            <div className={cx("cardnft_container_info")}>
                <div className={cx("cardnft_container_info_title")}>
                    <span>{name_user}</span>
                    <span>{price}</span>
                </div>
                <div className={cx("button")}>
                    <ButtonBorderLinear className="border_linear">
                        Follow
                    </ButtonBorderLinear>
                </div>
            </div>
        </div>
    );
};

export default Follower;
