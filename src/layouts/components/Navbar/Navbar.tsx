"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import classNames from "classnames/bind";
import Search from "./Search";
import Discover from "./Discover";
import Notify from "./Notify";
import Wallet from "./Wallet";
import User from "./User";
import Sidebar from "./Sidebar";
import images from "@/assets/images";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);
const NavBar = () => {
    const [openSibar, setOpenSibar] = useState(false);

    const handleOpenSibar = function () {
        setOpenSibar(!openSibar);
    };
    return (
        <div className={cx("container_navbar")}>
            <div className={cx("container_logo")}>
                <Link href={"/"}>
                    <Image
                        src={images.logo}
                        width={300}
                        height={80}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className={cx("container_search")}>
                <Search title="Search">
                    <BsSearch />
                </Search>
            </div>
            <div className={cx("container_discover")}>
                <Discover />
            </div>

            <div className={cx("container_list")}>
                <div className={cx("container_notify")}>
                    <Notify />
                </div>
                <div className={cx("container_user")}>
                    <User />
                </div>
                <div className={cx("container_wallet")}>
                    <Wallet />
                </div>
            </div>
            {openSibar && (
                <div className={cx("container_sidebar")}>
                    <Sidebar />
                </div>
            )}
            <div className={cx("container_button_menu")}>
                <button className={cx("button_menu")} onClick={handleOpenSibar}>
                    <BsFillMenuButtonWideFill />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
