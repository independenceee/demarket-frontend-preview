"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";
import styles from "./DropMenu.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
interface DropMenuPros {}
const DropMenu = ({}: DropMenuPros) => {
    const [openDropMenu, setOpenDropMenu] = useState(false);
    const handleOpenDrop = function () {
        setOpenDropMenu(!openDropMenu);
    };
    const dropmenus = [
        { id: 1, link: "/Mint", title: "Mint" },
        {
            id: 2,
            link: "/Guide",
            title: "Guide",
        },
        {
            id: 3,
            link: "/About",
            title: "About",
        },
    ];
    return (
        <div className={styles.container_dropmenu}>
            <li onClick={handleOpenDrop}>
                More <IoMdArrowDropdown />
            </li>
            {openDropMenu && (
                <div className={styles.box_dropmenu}>
                    {dropmenus.map((dropmenu) => {
                        return (
                            <li key={dropmenu.id}>
                                <Link href={dropmenu.link}>
                                    {" "}
                                    {dropmenu.title}
                                </Link>
                            </li>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DropMenu;
