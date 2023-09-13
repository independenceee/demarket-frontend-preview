"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./page.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const Collection = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <h2 className="heading">Mint Your Assets</h2>
            <section className={cx("collection-left")}>

            </section>
            <section className={cx("collection-right")}>
                
            </section>
        </main>
    );
};

export default Collection;
