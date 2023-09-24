import Link from "next/link";
import styles from "./Pagination.module.scss";
import React from "react";

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <Link href="#" className={`${styles.page} ${styles.active}`}>
                1
            </Link>
            <Link href="#" className={styles.page}>
                2
            </Link>
            <Link href="#" className={styles.page}>
                3
            </Link>
            <span>...</span>
            <Link href={"#"} className={styles.page}>
                10
            </Link>
        </div>
    );
};

export default Pagination;
