"use client";

import React from "react";
import images from "@/assets/images";
import styles from "./ListCollection.module.scss";
import CollectionOne from "./CollectionOne";
const ListCollection = () => {
    const collections = [
        {
            id: 1,
            image: images.logo,
            usename: "USER 1",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 2,
            image: images.logo,
            usename: "USER 2",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 3,
            image: images.logo,
            usename: "USER 3",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 4,
            image: images.logo,
            usename: "USER 4",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 5,
            image: images.logo,
            usename: "USER 5",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 6,
            image: images.logo,
            usename: "USER 6",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
        {
            id: 7,
            image: images.logo,
            usename: "USER 7",
            volume_trace: 100,
            number_item: 110,
            price: 500,
            follow: 541,
        },
    ];
    return (
        <div className={styles.container_listcollection}>
            <table className={`table ${styles.table_changebgcolor}`}>
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Number Item</th>
                        <th scope="col">Volume Trace</th>
                        <th scope="col">Price</th>
                        <th scope="col">Follow</th>
                    </tr>
                </thead>
                <tbody>
                    {collections.map((collection) => {
                        return (
                            <CollectionOne
                                key={collection.id}
                                image={collection.image}
                                usename={`${collection.usename}`}
                                volume_trace={collection.volume_trace}
                                number_item={collection.number_item}
                                price={collection.price}
                                follow={collection.follow}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListCollection;
