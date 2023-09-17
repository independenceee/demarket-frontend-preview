import React from "react";
import classNames from "classnames/bind";

import styles from "./TextArea.module.scss";

const cx = classNames.bind(styles);
type Props = {
    label: string;
    placeholder: string;
};

const Input = function ({ label, placeholder }: Props) {
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("label")}>{label}</h3>
            <textarea
                className={cx("control")}
                typeof="text"
                rows={15}
                placeholder={placeholder}
            />
        </div>
    );
};
export default Input;
