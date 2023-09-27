import classNames from "classnames/bind";
import styles from "./ButtonBorderLinear.module.scss";
import React from "react";
interface ButtonProps {
    children: React.ReactNode;
}
const cx = classNames.bind(styles);
const ButtonBorderLinear = ({ children }: ButtonProps) => {
    return (
        <div className={cx("container")}>
            <button className={cx("button_linear")}>{children}</button>
        </div>
    );
};

export default ButtonBorderLinear;
