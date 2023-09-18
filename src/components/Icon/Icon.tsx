"use client";
import React from "react";
interface Icon {
    children: React.ReactNode;
}
import styles from "./Icon.module.scss";
const IconComponent = ({ children }: Icon) => {
    return <div className={styles.icon_container}>{children}</div>;
};

export default IconComponent;
