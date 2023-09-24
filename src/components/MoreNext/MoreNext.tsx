import React from "react";

import styles from "./MoreNext.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
const cx = classNames.bind(styles);
const MoreNext = () => {
    return (
        <div className={cx("container_more")}>
            <Link className={cx("link")} href="#">
                More
                <GrFormNextLink />
            </Link>
        </div>
    );
};

export default MoreNext;
