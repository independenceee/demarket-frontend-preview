import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);
type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className={cx("wrapper")}>
            {/* <div className={cx("container")}>
                <section className={cx("aboutus")}>
                    <Logo />
                    <p className={cx("description")}>
                        Change anything you like. Even entire out-of-the-box
                        tasks, or just parts of them. Flexible and customizable
                        design, with little constraints.
                    </p>
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
            </div> */}
        </footer>
    );
};

export default Footer;
