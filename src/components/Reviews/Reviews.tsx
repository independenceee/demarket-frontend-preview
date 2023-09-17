import React from "react";
import classNames from "classnames/bind";
import styles from "./Reviews.module.scss";
const cx = classNames.bind(styles);

type Props = {};
const Reviews = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <ul className={cx("reviews")}>
                    <li className={cx("review")}>
                        <h2>500</h2>
                        <p>PRODUCT</p>
                    </li>
                    <li className={cx("review")}>
                        <h2>50K</h2>
                        <p>COLLECTION</p>
                    </li>
                    <li className={cx("review")}>
                        <h2>10</h2>
                        <p>TRENDING</p>
                    </li>
                    <li className={cx("review")}>
                        <h2>2K</h2>
                        <p>AUTHOR</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Reviews;
