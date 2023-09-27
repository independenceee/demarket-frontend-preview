"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./History.module.scss";
import Avatar from "../../Avatar/Avatar";
interface HistoryProps {
    avatar_image: StaticImageData;
    typeofTransaction: string;
    useTransaction: string;
    price: number;
    timeTransaction: Date;
}
const History = function ({
    avatar_image,
    typeofTransaction,
    useTransaction,
    price,
    timeTransaction,
}: HistoryProps) {
    const currentDate = timeTransaction;
    const formattedDate = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    return (
        <div className={styles.container_history}>
            <div className={styles.container_image}>
                <Avatar avatar={avatar_image} />
            </div>
            <div className={styles.container_info}>
                <div className={styles.container_row}>
                    <span>{typeofTransaction} by</span>
                    <span>{useTransaction}</span>
                </div>
                <div className={styles.container_row}>
                    <span>Price</span>
                    <span>{price} ADA</span>
                </div>
                <div className={styles.container_row}>
                    <span>
                        {formattedDate} {formattedTime}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default History;
