"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { IoMdNotificationsOutline } from "react-icons/io";
import Icon from "@/components/Icon";
import styles from "./Notify.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
interface NotifyProps {
    // openNotifyProp:boolean,
}
const Notify = ({}: NotifyProps) => {
    const [openNotify, setOpenNotify] = useState(false);
    const handleOpenNotify = function () {
        setOpenNotify(!openNotify);
    };
    const handleCloseUser = function () {
        if (openNotify === true) setOpenNotify(false);
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
        <div className={cx("container_notify")} onClick={handleOpenNotify}>
            <div className={cx("notify_icon")}>
                <Icon>
                    <IoMdNotificationsOutline />
                </Icon>
            </div>
            {openNotify && (
                <div className={cx("notify_display")}>
                    <div
                        className={cx("close_button")}
                        onClick={handleCloseUser}
                    >
                        <Icon>x</Icon>
                    </div>
                    {notifies.map((notifi) => {
                        return (
                            <div key={notifi.id} className={cx("notify_row")}>
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
