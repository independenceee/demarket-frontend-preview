import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import images from "@/assets/images";
import Button from "@/components/Button";
import styles from "./Background.module.scss";
import classNames from "classnames/bind";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const cx = classNames.bind(styles);
type Props = {
    image_width?: number;
    image_height?: number;
    title?: string;
    image_alt: string;
    description?: string;
    image_src: StaticImport;
    name_Bg_Page?: string;
    button1_name?: string;
    button2_name?: string;
};
const Background = ({
    image_width,
    image_height,
    title,
    image_alt,
    description,
    image_src,
    name_Bg_Page,
    button1_name,
    button2_name,
}: Props) => {
    return (
        <div className={cx("background_container")}>
            <div className={cx("background_container_header")}>
                <div className={cx("background_container_image")}>
                    <Image
                        src={image_src}
                        width={image_width}
                        height={image_height}
                        alt={image_alt}
                        // layout="responsive"
                    />
                </div>
                <div className={cx("background_content_container")}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className={cx("background_content_button_container")}>
                        <Link href="#">
                            <Button className="primary">{button1_name}</Button>
                        </Link>
                        <Link href="#">
                            <Button className="primary">{button2_name}</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className={cx("background_container_bottom")}>
                <h4>{name_Bg_Page}</h4>
            </div> */}
        </div>
    );
};

export default Background;
