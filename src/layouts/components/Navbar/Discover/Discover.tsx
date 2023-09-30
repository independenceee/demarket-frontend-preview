"use client";

import Link from "next/link";
import React from "react";

import styles from "./Discover.module.scss";
import DropMenu from "../DropMenu/DropMenu";
interface DiscoverProps {}
const Discover = ({}: DiscoverProps) => {
    return (
        <div className={styles.container_discover}>
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
        </div>
    );
};

export default Discover;
