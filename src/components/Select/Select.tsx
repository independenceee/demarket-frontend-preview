"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { BsChevronDown } from "react-icons/bs";
import styles from "./Select.module.scss";

const cx = classNames.bind(styles);
type Props = {
    label: string;
};

const Select = function ({ label }: Props) {
    const [selected, setSelected] = useState<boolean>(false);
    const [value, setValue] = useState<string>("Select Your Option");

    const options = [
        {
            name: "Github",
            Icon: BsChevronDown,
        },
    ];

    const handleOpen = function () {
        setSelected(!selected);
    };

    const handleSelected = function (option: string) {
        setValue(option);
        setSelected(false);
    };

    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("label")}>{label}</h3>
            <div className={cx("container")}>
                <div className={cx("button-container")} onClick={handleOpen}>
                    <span className={cx("button-text")}>{value}</span>
                    <BsChevronDown className={cx("button-icon")} />
                </div>
                {selected && (
                    <ul className={cx("options")}>
                        {options.map(function ({ name, Icon }, index) {
                            return (
                                <li
                                    onClick={function () {
                                        handleSelected(name);
                                    }}
                                    className={cx("option")}
                                    key={index}
                                >
                                    <Icon className={cx("icon")} />
                                    <span className={cx("option-text")}>
                                        {name}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Select;
