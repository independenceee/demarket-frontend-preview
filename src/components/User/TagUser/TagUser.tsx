"use client";
import { useState } from "react";
import React from "react";
import styles from "./TagUser.module.scss";
import ListNft from "../../ListNft/ListNft";
import ListMyAsset from "../../ListMyAsset/ListMyAsset";
import Follower from "../../ListFollower/Follower/Follower";
import ListFollower from "../../ListFollower/ListFollower";
import ListFollowing from "../../ListFollowing/ListFollowing";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const TagUser = () => {
    const [openTabSelling, setOpenTabSelling] = useState(true);
    const [openTabMyAsset, setOpenTabMyAsset] = useState(false);
    const [openTabCreate, setOpenTabCreate] = useState(false);
    const [openTabCollection, setOpenTabCollection] = useState(false);
    const [openTabLike, setOpenLike] = useState(false);
    const [openTabFollowing, setOpenTabFollowing] = useState(false);
    const [openTabFollower, setOpenTabSFollower] = useState(false);

    const handleOpenTabSelling = () => {
        if (openTabSelling != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(false);
            setOpenTabCollection(false);
            setOpenLike(false);
            setOpenTabFollowing(false);
            setOpenTabSFollower(false);
            setOpenTabSelling(true);
        }
        //   else setOpenTabSelling(false);
    };
    const handleOpenTabMyAsset = () => {
        if (openTabMyAsset != true) {
            setOpenTabMyAsset(true);
            setOpenTabCreate(false);
            setOpenTabCollection(false);
            setOpenLike(false);
            setOpenTabFollowing(false);
            setOpenTabSFollower(false);
            setOpenTabSelling(false);
        }
        //     else setOpenTabMyAsset(false);
    };
    const handleOpenTabCreated = () => {
        if (openTabCreate != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(true);
            setOpenTabCollection(false);
            setOpenLike(false);
            setOpenTabFollowing(false);
            setOpenTabSFollower(false);
            setOpenTabSelling(false);
        }
        //     else setOpenTabCreate(false);
    };
    const handleOpenTabLike = () => {
        if (openTabLike != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(false);
            setOpenTabCollection(false);
            setOpenLike(true);
            setOpenTabFollowing(false);
            setOpenTabSFollower(false);
            setOpenTabSelling(false);
        }
        //     else setOpenLike(false);
    };
    const handleOpenTabFollower = () => {
        if (openTabFollower != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(false);
            setOpenTabCollection(false);
            setOpenLike(false);
            setOpenTabFollowing(false);
            setOpenTabSFollower(true);
            setOpenTabSelling(false);
        }
        //     else setOpenTabSFollower(false);
    };
    const handleOpenTabFollowing = () => {
        if (openTabFollowing != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(false);
            setOpenTabCollection(false);
            setOpenLike(false);
            setOpenTabFollowing(true);
            setOpenTabSFollower(false);
            setOpenTabSelling(false);
        }
        //     else setOpenTabFollowing(false);
    };
    const handleOpenTabCollection = () => {
        if (openTabCollection != true) {
            setOpenTabMyAsset(false);
            setOpenTabCreate(false);
            setOpenTabCollection(true);
            setOpenLike(false);
            setOpenTabFollowing(false);
            setOpenTabSFollower(false);
            setOpenTabSelling(false);
        }
        //     else setOpenTabCollection(false);
    };
    return (
        <div className={cx("container_main")}>
            <div className={cx("container_button")}>
                <div
                    className={cx("one_button")}
                    onClick={handleOpenTabSelling}
                >
                    <button
                        className={cx(
                            "btn_tag",
                            openTabSelling ? "active" : "",
                        )}
                    >
                        Selling
                    </button>
                </div>
                <div
                    className={cx("one_button")}
                    onClick={handleOpenTabMyAsset}
                >
                    <button
                        className={cx(
                            "btn_tag",
                            openTabMyAsset ? "active" : "",
                        )}
                    >
                        My Asset
                    </button>
                </div>
                <div
                    className={cx("one_button")}
                    onClick={handleOpenTabCreated}
                >
                    <button
                        className={cx("btn_tag", openTabCreate ? "active" : "")}
                    >
                        Created
                    </button>
                </div>
                {/* <div
                    className={cx("one_button")}
                    onClick={handleOpenTabCollection}
                >
                    <button
                        className={cx(
                            "btn_tag",
                            openTabCollection ? "active" : "",
                        )}
                    >
                        Collection
                    </button>
                </div> */}
                {/* <div className={cx("one_button")} onClick={handleOpenTabLike}>
                    <button
                        className={cx("btn_tag", openTabLike ? "active" : "")}
                    >
                        Like
                    </button>
                </div> */}
                <div
                    className={cx("one_button")}
                    onClick={handleOpenTabFollowing}
                >
                    <button
                        className={cx(
                            "btn_tag",
                            openTabFollowing ? "active" : "",
                        )}
                    >
                        Following
                    </button>
                </div>
                <div
                    className={cx("one_button")}
                    onClick={handleOpenTabFollower}
                >
                    <button
                        className={cx(
                            "btn_tag",
                            openTabFollower ? "active" : "",
                        )}
                    >
                        Follower
                    </button>
                </div>
            </div>
            {openTabSelling && (
                <div className={cx("listItem")}>
                    <ListNft />
                    <div className={cx("popular_collector")}>
                        <h2>Popular Creater</h2>
                        <ListFollower />
                    </div>
                </div>
            )}
            {openTabMyAsset && (
                <div className={cx("listItem")}>
                    <ListMyAsset />
                </div>
            )}
            {openTabCreate && (
                <div className={cx("listItem")}>
                    <ListMyAsset />
                </div>
            )}
            {openTabFollower && (
                <div className={cx("listItem")}>
                    <ListFollower />
                </div>
            )}
            {openTabFollowing && (
                <div className={cx("listItem")}>
                    <ListFollowing />
                </div>
            )}
        </div>
    );
};

export default TagUser;
