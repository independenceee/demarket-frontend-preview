"use client";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames/bind";
import styles from "./CollectionOne.module.scss";
const cx = classNames.bind(styles);
interface CollectionOneProps {
    image: StaticImageData;
    usename: string;
    number_item: number;
    volume_trace: number;
    price: number;
    follow: number;
}
const CollectionOne = ({
    image,
    usename,
    number_item,
    volume_trace,
    price,
    follow,
}: CollectionOneProps) => {
    return (
        <tr className={cx("container_row")}>
            <th scope="row">
                <Link href={"#"}>
                    <Image
                        src={image}
                        width={50}
                        height={50}
                        alt="Avatar"
                    ></Image>
                </Link>
            </th>
            <td>
                <Link href={"#"}>{usename}</Link>
            </td>
            <td>{number_item}</td>
            <td>{volume_trace}</td>
            <td>{price}</td>
            <td>{follow}</td>
        </tr>
    );
};

export default CollectionOne;
