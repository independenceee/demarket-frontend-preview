import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import { GrAddCircle } from "react-icons/gr";
import Upload from "@/components/Upload";
import TextArea from "@/components/TextArea";
import Input from "@/components/Input";
import styles from "./Collection.module.scss";
import CollectionItem from "@/components/Collection";
import Button from "@/components/Button";

const cx = classNames.bind(styles);

type Props = {};

const Collection = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("left")}>
                    <header className={cx("header")}>Collections</header>
                    <Upload title="Upload BackGround" type="">
                        Upload
                    </Upload>
                    <Upload
                        title="Upload avatar"
                        type="PNG, GIF, WEBP, MP4 or MP3. Max 100mb"
                    >
                        <GrAddCircle />
                    </Upload>
                    <Input
                        placeholder="Titile of your item @NFT Legendary"
                        label="Title"
                    />

                    <TextArea
                        label="Description"
                        placeholder={
                            "Description of your item @NFT Legendary is the NFT specialy...."
                        }
                    />

                    <Input placeholder="Url of your item" label="Url" />
                </section>
                <section className={cx("right")}>
                    <CollectionItem />
                </section>
            </div>
            <div className={cx("button-container")}>
                <Button>Create</Button>
            </div>
        </main>
    );
};

export default Collection;
