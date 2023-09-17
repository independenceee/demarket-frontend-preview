import React from "react";
import classNames from "classnames/bind";
import styles from "./Collection.module.scss";
import images from "@/assets/images";
import Image from "next/image";

const cx = classNames.bind(styles);

type Props = {
    imageBackground?: string | any;
    imageAvatar?: string | any;
    name?: string;
    description?: string;
};

const Collection = function ({
    imageAvatar,
    imageBackground,
    name,
    description,
}: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Image
                    className={cx("background")}
                    src={images.background}
                    alt="Image"
                />

                <div className={cx("image-container")}>
                    <Image
                        className={cx("image")}
                        src={images.background}
                        alt="Image"
                    />
                </div>
                <h3 className={cx("title")}>Your Collection</h3>
                <p className={cx("description")}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                </p>
            </div>
        </div>
    );
};

export default Collection;
