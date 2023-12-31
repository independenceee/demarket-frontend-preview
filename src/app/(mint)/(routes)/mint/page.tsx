import React from "react";
import classNames from "classnames/bind";
import styles from "./Mint.module.scss";
import Upload from "@/components/Upload";
import NftItem from "@/components/NftItem";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Select from "@/components/Select";
import Metadata from "@/components/Metadata";
import Bill from "@/components/Bill";
import Button from "@/components/Button";

const cx = classNames.bind(styles);

type Props = {};

const Mint = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("left")}>
                    <header className={cx("header")}>Mint Your Asset</header>
                    <Upload
                        title="Upload Item File"
                        type="PNG, Video, Music, GIF, MP4 or MP3. Max 100mb"
                    >
                        Upload
                    </Upload>
                    <Input label="Title" placeholder="Title of your item" />
                    <Select label="Media Type" />
                    <TextArea
                        label="Description"
                        placeholder="Description of your item"
                    />
                    <Metadata />
                    {/* <Bill />
                    <div className={cx("mint")}>
                        <Button>Mint</Button>
                    </div> */}
                </section>
                <section className={cx("right")}>
                    <div className={cx("content")}>
                        <header className={cx("network")}>Preview</header>
                        <NftItem />
                    </div>
                </section>
            </div>
            <div className={cx("bill")}>
                <Bill />
                <div className={cx("checkbox-wrapper")}>
                    <div className={cx("checkbox-input")}>
                        <input type="checkbox" />
                    </div>
                    <h3>Are you sure want to mint Nft ?</h3>
                </div>
                <div className={cx("mint")}>
                    <Button>Mint</Button>
                </div>
            </div>
        </main>
    );
};

export default Mint;
