"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Button from "@/components/Button";
import styles from "./Upload.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const Upload = function ({}: Props) {
    const [imagePath, setImagePath] = useState<string | null>(null!);
    const [image, setImage] = useState<File>(null!);
    const [fileName, setFileName] = useState<string>("Choose file");
    const handleChangeFile = function (event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        if (event.target.files !== null) {
            setImage(event.target.files[0]);
            setImagePath(URL.createObjectURL(event.target.files[0]));
        }
    };
    const handleChooseFile = function () {
        const fileImageElement: any = document.querySelector(".file-input");
        fileImageElement?.click();
    };

    return (
        <div onClick={handleChooseFile} className={cx("wrapper")}>
            <div className={cx("container")}>
                <input
                    type="file"
                    className={cx("file-input")}
                    accept="image/*"
                    hidden
                    onChange={handleChangeFile}
                />
                {imagePath ? (
                    <div className={cx("image-container")}>
                        <img
                            className={cx("image")}
                            src={imagePath}
                            alt="Upload Image"
                        />
                    </div>
                ) : (
                    <div className={cx("inner")}>
                        <AiOutlineCloudUpload className={cx("icon")} />
                        <div className="text-center mt-[24px]">
                            <span className="leading-[1.5] text-[#fff] font-[400]">
                                Chọn vào để tải lên
                            </span>
                        </div>
                        <div className="mt-[4px] mb-[24px]">
                            <span className="leading-[1.5] text-[14px] font-[400] text-[#fff]">
                                Hoặc kéo và thả tập tin
                            </span>
                        </div>
                        <div>
                            <div className="mb-[6px] text-center">
                                <span className="leading-[1.5] text-[14px] font-[400] text-[#fff]">
                                    Image hoặc Url
                                </span>
                            </div>
                            <div className="mb-[6px] text-center">
                                <span className="leading-[1.5] text-[14px] font-[400] text-[#fff]">
                                    Độ phân giải 720x1280 trở lên
                                </span>
                            </div>
                            <div className="mb-[6px] text-center">
                                <span className="leading-[1.5] text-[14px] font-[400] text-[#fff]">
                                    Nhỏ hơn 2 GB
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Upload;
