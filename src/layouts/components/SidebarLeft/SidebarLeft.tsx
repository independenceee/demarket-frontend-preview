"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Search from "../Navbar/Search";

import styles from "./SidebarLeft.module.scss";
import InfoData from "@/components/User/InfoUser/InfoData/InfoData";
import { Fillter } from "@/components/User/InfoUser";
import { HiOutlineFilter } from "react-icons/hi";
import classNames from "classnames/bind";
import { C } from "lucid-cardano";
const cx = classNames.bind(styles);
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
    const [isFixedTop, setIsFixedTop] = useState(false);
    const [isFixedBottom, setIsFixedBottom] = useState(false);
    const handleOpenSibarLeft = () => {
        setOpenSibarLeft(!openSibarLeft);
    };
    // hàm xử lý khi cửa sổ trình duyệt thay đổi chiều cao:

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
        if (windowWidth > 1470) {
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

    // Theo dõi sự kiện cuộn
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 725) {
                setIsFixedTop(true);
            }
            if (scrollY < 725) {
                setIsFixedTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Loại bỏ sự kiện cuộn khi component bị hủy
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={cx("container")}>
            <div className={cx("button_filter")} onClick={handleOpenSibarLeft}>
                <HiOutlineFilter />
            </div>
            {openSibarLeft && (
                <div
                    className={cx(
                        "container_sibarleft",
                        openSibarLeft ? "active" : "",
                        isFixedTop ? "scrollTop" : "",
                        // isFixedBottom ? "scrollBottom" : "",
                    )}
                >
                    <div className={cx("search")}>
                        <h1>Search</h1>
                        <Search title="Search">
                            <LuSearch />
                        </Search>
                    </div>
                    {sibar_left_user && (
                        <div className={cx("introduce")}>
                            <InfoData data={dataUser} />
                        </div>
                    )}
                    <div className={cx("filler")}>
                        <Fillter filter={dataFilter1} name_head="Sort By" />
                    </div>
                    {sibar_left_marketpace && (
                        <div className={cx("filler")}>
                            <Fillter
                                filter={dataFilter2}
                                name_head="Category"
                            />
                        </div>
                    )}
                    {sibar_left_marketpace && (
                        <div className={cx("filler")}>
                            <Fillter filter={dataFilter3} name_head="Verify" />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SideBarLeft;
