import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./NftItem.module.scss";

const cx = classNames.bind(styles);

type Props = {
    imageUrl?: string;
    type?: string;
    title?: string;
    description?: string;
};

const NftItem = function ({ title, description, imageUrl, type }: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("image-container")}>
                <img src={imageUrl} alt="Image Url" className={cx("image")} />
            </div>
            <div className={cx("container")}>
                <section className={cx("content")}>
                    <div className={cx("title")}>{title}</div>
                    <div className={cx("type")}>{type}</div>
                </section>
                <section className={cx("description")}>{description}</section>
            </div>
        </div>
    );
};

export default NftItem;
