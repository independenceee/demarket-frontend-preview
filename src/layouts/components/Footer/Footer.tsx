import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import images from "@/assets/images";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LuSendHorizonal} from "react-icons/lu"

const cx = classNames.bind(styles);
type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("aboutus")}>
                    <div className={cx("image-container")}>
                        <Image
                            src={images.logo}
                            alt="Logo"
                            className={cx("image")}
                        />
                    </div>
                    <p className={cx("description")}>
                        Buy, sell and discover exclusive digital assets by the
                        top artists of
                    </p>
                </section>

                <section className={cx("content")}>
                    <h2 className={cx("heading")}>Main Page</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>
                <section className={cx("content")}>
                    <h2 className={cx("heading")}>Useful Page</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>

                <section className={cx("content")}>
                    <h2 className={cx("heading")}>
                        Please give us some feedback
                    </h2>
                    <div className={cx("input-wrapper")}>
                        <input
                            type="text"
                            placeholder="Your feedback"
                            className={cx("input")}
                        />
                        <div className={cx("icon-container")}>
                        <LuSendHorizonal className={cx("icon")}/>
                        </div>
                    </div>
                    <h2 className={cx("contact")}>Contact With us here</h2>
                    <div className={cx("list-icon")}>
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
                </section>
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
