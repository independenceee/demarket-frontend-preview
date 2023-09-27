"use client";

import images from "@/assets/images";
import History from "./History";
import React, { useTransition } from "react";
import styles from "./ListHistory.module.scss";
import MoreNext from "../MoreNext/MoreNext";
const ListHistory = () => {
    const listHs = [
        {
            id: "0",
            avatar_image: images.User_1,
            typeofTransaction: "Buy",
            useTransaction: "Tung",
            price: 100,
            timeTransaction: new Date(),
        },
        {
            id: "1",
            avatar_image: images.User_2,
            typeofTransaction: "Sell",
            useTransaction: "Son",
            price: 100,
            timeTransaction: new Date(),
        },
        {
            id: "2",
            avatar_image: images.User_3,
            typeofTransaction: "Buy",
            useTransaction: "Thanh",
            price: 100,
            timeTransaction: new Date(),
        },
        {
            id: "3",
            avatar_image: images.User_4,
            typeofTransaction: "Sell",
            useTransaction: "Tung",
            price: 100,
            timeTransaction: new Date(),
        },
    ];
    return (
        <div className={styles.container}>
            {listHs.map((listH) => {
                return (
                    <History
                        key={listH.id}
                        avatar_image={listH.avatar_image}
                        typeofTransaction={listH.typeofTransaction}
                        useTransaction={listH.useTransaction}
                        price={listH.price}
                        timeTransaction={listH.timeTransaction}
                    />
                );
            })}
            <MoreNext />
        </div>
    );
};
export default ListHistory;
