"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Search from "../Navbar/Search";

import styles from "./SideBarLeft.module.scss";
import InfoData from "@/components/User/InfoUser/InfoData/InfoData";
import { Fillter } from "@/components/User/InfoUser";
import { HiOutlineFilter } from "react-icons/hi";

interface SibarLeftProps {
    sibar_left_user: boolean;
    sibar_left_marketpace: boolean;
}
const SideBarLeft = ({
    sibar_left_user,
    sibar_left_marketpace,
}: SibarLeftProps) => {
    const [openSibarLeft, setOpenSibarLeft] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 0,
    );

    const handleOpenSibarLeft = () => {
        setOpenSibarLeft(!openSibarLeft);
    };
    useEffect(() => {
        // Hàm xử lý sự kiện khi cửa sổ trình duyệt thay đổi kích thước
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (windowWidth > 992) {
            setOpenSibarLeft(true);
        } else {
            setOpenSibarLeft(false);
        }
    }, [windowWidth]);
    const dataUser = {
        policy: "qhutasfwqeasdfas...",
        stake_key: "qhutasfwqeasdfas...",
        numbers_nft: 231,
        nfts_selled: 192,
        followers: 560,
        rating: 4.9,
        joined: new Date(),
    };
    const dataFilter1 = [
        {
            title: "Default",
            id: "default",
        },
        {
            title: "Trend NFT",
            id: "trend",
        },
        {
            title: "New",
            id: "new",
        },
        {
            title: "Increase",
            id: "increase",
        },
        {
            title: "Des",
            id: "des",
        },
    ];
    const dataFilter2 = [
        {
            title: "All",
            id: "all",
        },
        {
            title: "Gift",
            id: "gift",
        },
        {
            title: "Music",
            id: "music",
        },
        {
            title: "Legend",
            id: "legend",
        },
        {
            title: "Art",
            id: "arts",
        },
    ];
    const dataFilter3 = [
        {
            title: "Yes",
            id: "yes",
        },
        {
            title: "No",
            id: "no",
        },
    ];

    return (
        <div>
            <div
                className={`${styles.button_filter} `}
                onClick={handleOpenSibarLeft}
            >
                <HiOutlineFilter />
            </div>
            {openSibarLeft && (
                <div
                    className={`${styles.container} ${
                        openSibarLeft ? styles.active : ""
                    }`}
                >
                    <div className={styles.search}>
                        <h1>Search</h1>
                        <Search title="Search">
                            <BsSearch />
                        </Search>
                    </div>
                    {sibar_left_user && (
                        <div className={styles.introduce}>
                            <InfoData data={dataUser} />
                        </div>
                    )}
                    <div className={styles.filler}>
                        <Fillter filter={dataFilter1} name_head="Sort By" />
                    </div>
                    {sibar_left_marketpace && (
                        <div className={styles.filler}>
                            <Fillter
                                filter={dataFilter2}
                                name_head="Category"
                            />
                        </div>
                    )}
                    {sibar_left_marketpace && (
                        <div className={styles.filler}>
                            <Fillter filter={dataFilter3} name_head="Verify" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SideBarLeft;
