"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import Icon from "@/components/Icon";
import styles from "./Notify.module.scss";
interface NotifyProps {
    // openNotifyProp:boolean,
}
const Notify = ({}: NotifyProps) => {
    const [openNotify, setOpenNotify] = useState(false);
    const handleOpenNotify = function () {
        setOpenNotify(!openNotify);
    };
    const notifies = [
        {
            id: 1,
            content: "Nguyen Tien Tung",
            status: "true",
        },
        {
            id: 2,
            content: "Nguyen Tien Tung",
            status: "true",
        },
        {
            id: 3,
            content: "Nguyen Tien Tung",
            status: "true",
        },
        {
            id: 4,
            content: "Nguyen Tien Tung",
            status: "true",
        },
        {
            id: 5,
            content: "Nguyen Tien Tung",
            status: "true",
        },
    ];
    return (
        <div className={styles.container_notify} onClick={handleOpenNotify}>
            <div className={styles.notify_icon}>
                <Icon>
                    <IoMdNotificationsOutline />
                </Icon>
            </div>
            {openNotify && (
                <div className={styles.notify_display}>
                    {notifies.map((notifi) => {
                        return (
                            <div key={notifi.id} className={styles.notify_row}>
                                <p>{notifi.content}</p>
                                <span>{notifi.status}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Notify;
