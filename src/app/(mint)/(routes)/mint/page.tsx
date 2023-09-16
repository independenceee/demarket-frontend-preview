import React from "react";
import classNames from "classnames/bind";
import styles from "./page.module.scss";
import Upload from "@/components/Upload";
import NftItem from "@/components/NftItem";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
const cx = classNames.bind(styles);

type Props = {};

const Mint = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <h3 className={cx("heading")}>Mint Your Assets</h3>
                <div className={cx("inner")}>
                    <section className={cx("form")}>
                        <Upload />
                        <Input label="Title" placeholder="Title of your item" />
                        <TextArea
                            label="Description"
                            placeholder="Description  of your item"
                        />
                    </section>
                    <section className={cx("revirew")}>
                        <Heading title="Preview" />
                        <NftItem />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Mint;
