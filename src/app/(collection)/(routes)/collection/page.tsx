"use client";

import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import images from "@/assets/images";
import {
    AiFillStar,
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineStar,
} from "react-icons/ai";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

const cx = classNames.bind(styles);

type Props = {};

const Collection = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <Heading />
                
            </div>
        </main>
    );
};

export default Collection;
