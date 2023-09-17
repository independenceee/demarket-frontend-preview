"use client";
import React, { ChangeEvent, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import classNames from "classnames/bind";
import styles from "./Metadata.module.scss";
import Button from "@/components/Button";

const cx = classNames.bind(styles);
type Props = {};
const Metadata = function ({}: Props) {
    const [data, setData] = useState<any>([
        {
            property: "",
            value: "",
        },
    ]);

    const hanldeAdd = function () {
        setData([
            ...data,
            {
                property: "",
                value: "",
            },
        ]);
    };
    const handleDelete = function (index: number) {
        const deleteValue = [...data];
        deleteValue.splice(index, 1);
        setData(deleteValue);
    };
    const handleChage = function (
        event: ChangeEvent<HTMLInputElement>,
        index: number,
    ) {
        if (event.target) {
            const value = event.target.value;
            const name = event.target.name;
            const onChangeValue = [...data];
            onChangeValue[index][name] = value;
            setData(onChangeValue);
        }
    };

    console.log(data);
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("label")}>Custom Metadata</h3>
            {data.map(function (value: any, index: number) {
                return (
                    <div key={index} className={cx("container")}>
                        <input
                            placeholder="Property name"
                            className={cx("property")}
                            name="property"
                            value={value.property}
                            onChange={function (event) {
                                return handleChage(event, index);
                            }}
                        />
                        <input
                            placeholder="Property value"
                            className={cx("value")}
                            name="value"
                            value={value.value}
                            onChange={function (event) {
                                return handleChage(event, index);
                            }}
                        />
                        <Button
                            className={cx("delete")}
                            onClick={function () {
                                return handleDelete(index);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                );
            })}
            <div className={cx("add")} onClick={hanldeAdd}>
                <span>
                    <IoMdAdd />
                </span>
                More information
            </div>
        </div>
    );
};

export default Metadata;
