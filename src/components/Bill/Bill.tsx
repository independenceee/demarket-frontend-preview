import React from "react";
import classNames from "classnames/bind";
import styles from "./Bill.module.scss";

const cx = classNames.bind(styles);
type Props = {};

const Bill = function ({}: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("title")}>Fees</h2>
                <div className={cx("fee")}>
                    <p>Plaform fee</p>
                    <span>0.0</span>
                </div>
                <div className={cx("fee")}>
                    <p>Estimated Gas Fe</p>
                    <span>0.3</span>
                </div>
                <div className={cx("fee-total")}>
                    <p>Estimated Gas Fe</p>
                    <span>0.3</span>
                </div>
            </div>
        </div>
    );
};

export default Bill;
