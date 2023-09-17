import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const cx = classNames.bind(styles);
type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("aboutus")}></section>
            </div>
            <div className={cx("origin")}>
                <p>
                    © 2023 Marketplace. Design & Develop with{" "}
                    <AiFillHeart className={cx("icon")} /> by Blockreate
                </p>
            </div>
        </footer>
    );
};

export default Footer;
