import classNames from "classnames/bind";
import styles from "./ButtonBorderLinear.module.scss";
import React from "react";
interface ButtonProps {
    children: React.ReactNode;
    className: string;
}
const cx = classNames.bind(styles);
const ButtonBorderLinear = ({ children, className }: ButtonProps) => {
    return (
        <div className={cx("container")}>
            <button className={cx(`${className}`)}>{children}</button>
        </div>
    );
};

export default ButtonBorderLinear;
