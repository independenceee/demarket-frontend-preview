"use client";
import React from "react";
interface Icon {
    children: React.ReactNode;
}
const cx = classNames.bind(styles);
import styles from "./Icon.module.scss";
import classNames from "classnames/bind";
const IconComponent = ({ children }: Icon) => {
    return <div className={cx("icon_container")}>{children}</div>;
};

export default IconComponent;
