"use client";

import Link from "next/link";
import React from "react";
import styles from "./Sidebar.module.scss";
import DropMenu from "../DropMenu";
import Search from "../Search";

import { BsSearch } from "react-icons/bs";
type SidebarProps = {};
const Sidebar = ({}: SidebarProps) => {
    return (
        <div className={styles.container_sidebar}>
            <div className={styles.container_search}>
                <Search title="Search">
                    <BsSearch />
                </Search>
            </div>
            <li>
                <Link href={"/"}>Explore</Link>
            </li>
            <li>
                <Link href={"/"}>New</Link>
            </li>
            <li>
                <Link href={"/"}>Contact</Link>
            </li>
            <DropMenu />
        </div>
    );
};

export default Sidebar;
