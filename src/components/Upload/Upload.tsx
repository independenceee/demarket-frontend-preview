"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Button from "@/components/Button";
import styles from "./Upload.module.scss";

const cx = classNames.bind(styles);

type Props = { title: string; type: string };

const Upload = function ({ title, type }: Props) {
    return (
        <div className={cx("wrapper")}>
            <h3 className={cx("title")}>{title}</h3>
            <div className={cx("container")}>
                <p className={cx("type")}>{type}</p>
                <Button>Upload</Button>
            </div>
        </div>
    );
};

export default Upload;
