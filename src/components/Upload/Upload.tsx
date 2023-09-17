"use client";
import React, { ReactNode } from "react";
import classNames from "classnames/bind";

import Button from "@/components/Button";
import styles from "./Upload.module.scss";

const cx = classNames.bind(styles);

type Props = {
    title: string;
    type: string;
    children: ReactNode;
};

const Upload = function ({ title, type, children }: Props) {
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("title")}>{title}</h3>
            <div className={cx("container")}>
                {type && <p className={cx("type")}>{type}</p>}
                <Button className={cx("button")}>{children}</Button>
            </div>
        </div>
    );
};

export default Upload;
