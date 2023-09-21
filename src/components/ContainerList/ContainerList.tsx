"use client";

import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import styles from "./ContainerList.module.scss";
import Link from "next/link";
interface ContainerListProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const ContainerList = ({
    title,
    description,
    children,
}: ContainerListProps) => {
    return (
        <div className={styles.containerList_container}>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
            <div className={styles.container_more}>
                <Link className={styles.link} href="#">
                    More <GrFormNextLink />
                </Link>
            </div>
        </div>
    );
};

export default ContainerList;
