"use client";

import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.scss";
import DropMenu from "../DropMenu";
import Search from "../Search";

import { BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import classNames from "classnames/bind";
import Notify from "../Notify";
import User from "../User";
import Wallet from "../Wallet";
const cx = classNames.bind(styles);
type SidebarProps = {};
const Sidebar = ({}: SidebarProps) => {
    return (
        <div className={cx("container_sidebar")}>
            <div className={cx("container_search")}>
                <Search title="Search">
                    <LuSearch />
                </Search>
            </div>
            <li>
                <Link href={"/marketplace"}>Explore</Link>
            </li>
            <li>
                <Link href={"/guide"}>New</Link>
            </li>
            <li>
                <Link href={"/about"}>Contact</Link>
            </li>
            <DropMenu />
            <div className={styles.container_list}>
                <div className={styles.container_notify}>
                    <Notify />
                </div>
                <div className={styles.container_user}>
                    <User />
                </div>
                <div className={styles.container_wallet}>
                    <Wallet />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
