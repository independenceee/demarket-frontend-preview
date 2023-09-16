import React from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);
type Props = {
    label: string;
    placeholder: string;
};

const Input = function ({ label, placeholder }: Props) {
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("label")}>{label}</h3>
            <input
                className={cx("control")}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
export default Input;
