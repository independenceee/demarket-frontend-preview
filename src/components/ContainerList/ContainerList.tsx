import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import styles from "./ContainerList.module.scss";
import Link from "next/link";
import classNames from "classnames/bind";
interface ContainerListProps {
    title: string;
    description: string;
    children: React.ReactNode;
}
const cx = classNames.bind(styles);
const ContainerList = ({
    title,
    description,
    children,
}: ContainerListProps) => {
    return (
        <div className={cx("containerList_container")}>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default ContainerList;
