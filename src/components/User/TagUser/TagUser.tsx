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
const TagUser = () => {
  const [openTabSelling, setOpenTabSelling] = useState(true);
  const [openTabMyAsset, setOpenTabMyAsset] = useState(false);
  const [openTabCreate, setOpenTabCreate] = useState(false);
  const [openTabCollection, setOpenTabCollection] = useState(false);
  const [openTabLike, setOpenLike] = useState(false);
  const [openTabFollowing, setOpenTabFollowing] = useState(false);
  const [openTabFollower, setOpenTabSFollower] = useState(false);

  const handleOpenTabSelling = () => {
    if (openTabSelling!=true) {
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
    if (openTabMyAsset!=true) {
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
    if (openTabCreate!=true) {
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
    if (openTabLike!=true) {
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
    if (openTabFollower!=true) {
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
    if (openTabFollowing!=true) {
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
    if (openTabCollection!=true) {
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
    <div className={styles.container_main}>
      <div className={styles.button}>
        <div className={styles.one_button} onClick={handleOpenTabSelling}>
          <button className={`${styles.btn_tag} ${openTabSelling ? styles.active : ''}`}>Selling</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabMyAsset}>
          <button className={`${styles.btn_tag} ${openTabMyAsset ? styles.active : ''}`}>My Asset</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabCreated}>
          <button className={`${styles.btn_tag} ${openTabCreate ? styles.active : ''}`}>Created</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabCollection}>
          <button className={`${styles.btn_tag} ${openTabCollection ? styles.active : ''}`}>Collection</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabLike}>
          <button className={`${styles.btn_tag} ${openTabLike ? styles.active : ''}`}>Like</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabFollowing}>
          <button className={`${styles.btn_tag} ${openTabFollowing ? styles.active : ''}`}>Following</button>
        </div>
        <div className={styles.one_button} onClick={handleOpenTabFollower}>
          <button className={`${styles.btn_tag} ${openTabFollower ? styles.active : ''}`}>Follower</button>
        </div>
      </div>
      {openTabSelling&&<div className={styles.listItem}>
        <ListNft/>
      </div>}
      {openTabMyAsset&&<div className={styles.listItem}>
        <ListMyAsset/>
      </div>}
      {openTabCreate&&<div className={styles.listItem}>
        <ListMyAsset/>
      </div>}
      {openTabFollower&&<div className={styles.listItem}>
        <ListFollower />
      </div>}
      {openTabFollowing&&<div className={styles.listItem}>
        <ListFollowing/>
      </div>}
      <div className={styles.container_more}>
                    <Link className={styles.link} href="#">
                      More <GrFormNextLink />
                    </Link>
                  </div>
    </div>
  );
};

export default TagUser;
