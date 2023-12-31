"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

import Search from "./Search";
import Discover from "./Discover";
import Notify from "./Notify";
import Wallet from "./Wallet";
import User from "./User";
import Sidebar from "./Sidebar";

import images from "@/assets/images";

import styles from "./Navbar.module.scss";
import { LuSearch } from "react-icons/lu";
import classNames from "classnames";

const cx = classNames.bind(styles);

const NavBar = () => {
    const [openSibar, setOpenSibar] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [openDropMenu, setOpenDropMenu] = useState(false);

    const handleOpenUser = function () {
        if (openSibar === true) {
            setOpenSibar(false);
        }
        setOpenUser(!openUser);
    };
    const handleOpenSibar = function () {
        if (openUser === true) {
            setOpenUser(false);
        }
        setOpenSibar(!openSibar);
    };

    return (
        <div className={styles.container_navbar}>
            <div className={styles.container_logo}>
                <Link href={"/"}>
                    <Image
                        src={images.logo}
                        // width={300}
                        // height={80}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className={styles.container_search}>
                <Search title="Search">
                    <LuSearch />
                </Search>
            </div>
            <div className={styles.container_discover}>
                <Discover />
            </div>

            <div className={styles.container_list}>
                <div className={styles.container_user} onClick={handleOpenUser}>
                    <User openUser={openUser} />
                </div>
                <div className={styles.container_wallet}>
                    <Wallet />
                </div>
            </div>
            {openSibar && (
                <div className={styles.container_sidebar}>
                    <Sidebar />
                </div>
            )}
            <div className={styles.container_button_menu}>
                <button
                    className={styles.button_menu}
                    onClick={handleOpenSibar}
                >
                    <BsFillMenuButtonWideFill />
                </button>
            </div>
        </div>
    );
};

export default NavBar;
