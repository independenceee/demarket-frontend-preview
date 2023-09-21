import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ListHistory from "@/components/TrackHistory/ListHistory";
import Button from "@/components/Button";
import { BiCopyAlt } from "react-icons/bi";
import { VscVerified } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import IconComponent from "@/components/Icon";
import images from "@/assets/images";
import styles from "./Detail.module.scss";
import { CgCopy } from "react-icons/cg";
import { GrFormNextLink } from "react-icons/gr";
import ContainerList from "@/components/ContainerList";
import ListNft from "@/components/ListNft";

interface DetaiNftPageProps {
    product: {
        id: number;
        image_nft: StaticImageData;
        image_user: StaticImageData;
        image_creater: StaticImageData;
        name_creater: string;
        name_nft: string;
        name_user: string;
        metadatatype: string;
        price_nft: string;
        policyid: string;
        fingerprint: string;
        number_hearts: number;
        number_see: number;
        time_buy: Date;
        decription: string;
        asset_name: string;
        utxo: string;
        wallet_address: string;
    };
}
const DetaiNft = function () {
    const product = {
        id: 0,
        image_nft: images.logo,
        image_user: images.logo,
        image_creater: images.logo,
        name_creater: "user 1",
        name_nft: "NFT 1",
        name_user: "User 1", //owner
        metadatatype: "Gift",
        price_nft: "90",
        policyid: "qhut0...hfteh45",
        fingerprint: "qhut0...hfteh45",
        number_hearts: 320,
        number_see: 1003,
        time_buy: Date.now(),
        decription: "A fierce member of the Neon Punks gang",
        asset_name: "Asset Name",
        utxo: "QmXP63SGSXB44iLqB3mavtY5zwfauhSrFn",
        wallet_address: "addr1q93ku...ldzvsq44ywr",
    };
    return (
        <div className={styles.container_detailNFTPage}>
            <div className={styles.container_detailNFT}>
                <div className={styles.container_image}>
                    <Image
                        src={product.image_nft}
                        width={716}
                        height={912}
                        alt="NFT image Detail"
                    />
                    <div className={styles.cardnft_container_image_icon}>
                        <IconComponent>
                            <AiOutlineEye />
                        </IconComponent>
                        <IconComponent>
                            <VscVerified />
                        </IconComponent>
                    </div>
                </div>
                <div className={styles.container_detail_info}>
                    <div className={styles.container_detail_info_general}>
                        <h1>{product.name_nft}</h1>
                        <div className={styles.container_detail_info_one_row}>
                            <div className={styles.left}>
                                <span>Type: </span>
                                <span>{product.metadatatype}</span>
                            </div>
                            <div className={styles.right}>
                                <span>
                                    <AiOutlineEye />
                                    {product.number_see}
                                </span>
                                <span>
                                    <AiOutlineHeart />
                                    {product.number_hearts}
                                </span>
                            </div>
                        </div>
                        <div className={styles.container_detail_info_one_row}>
                            <div className={styles.left}>
                                <span>PolicyID: </span>
                                <span>{product.policyid}</span> <BiCopyAlt />
                            </div>
                        </div>
                        <div className={styles.container_detail_info_one_row}>
                            <div className={styles.left}>
                                <span>FingerPrint: </span>
                                <span>{product.fingerprint}</span> <BiCopyAlt />
                            </div>
                        </div>
                        <div
                            className={`${styles.container_detail_info_one_row} ${styles.container_owner}`}
                        >
                            <div
                                className={`${styles.owner_left} ${styles.owner}`}
                            >
                                <h2>Owner</h2>
                                <div className={styles.owner_box}>
                                    <div className={styles.avatar}>
                                        <Image
                                            src={product.image_user}
                                            width={150}
                                            height={200}
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className={styles.info_owner}>
                                        <h3>{product.name_user}</h3>
                                        <span>
                                            {product.wallet_address}
                                        </span>{" "}
                                        <BiCopyAlt />
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${styles.owner_right} ${styles.owner}`}
                            >
                                <h2>Creator</h2>
                                <div className={styles.owner_box}>
                                    <div className={styles.avatar}>
                                        <Image
                                            src={product.image_creater}
                                            width={150}
                                            height={200}
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className={styles.info_owner}>
                                        <h3>{product.name_creater}</h3>
                                        <span>
                                            {product.wallet_address}
                                        </span>{" "}
                                        <BiCopyAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_buy}>
                        <Button className="btn_config_default">
                            {product.price_nft} ADA
                        </Button>
                        <Button className="btn_config_purple ">Buy</Button>
                    </div>
                    <div className={styles.container_detail_info_detail}>
                        <nav>
                            <div
                                className="nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                            >
                                <button
                                    className="nav-link active"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-home"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-home"
                                    aria-selected="true"
                                >
                                    History
                                </button>
                                <button
                                    className="nav-link"
                                    id="nav-profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-profile"
                                    aria-selected="false"
                                >
                                    Metadata
                                </button>
                                <button
                                    className="nav-link"
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-contact"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-contact"
                                    aria-selected="false"
                                >
                                    UTXOs
                                </button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                            >
                                <div className={styles.container_content}>
                                    <ListHistory />
                                    <div className={styles.container_more}>
                                        <Link className={styles.link} href="#">
                                            More <GrFormNextLink />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="nav-profile"
                                role="tabpanel"
                                aria-labelledby="nav-profile-tab"
                            >
                                <div className={styles.container_content}>
                                    <div
                                        className={
                                            styles.detail_information_row
                                        }
                                    >
                                        <span>PolicyID:</span>
                                        <span>{product.policyid}</span>{" "}
                                        <BiCopyAlt />
                                    </div>
                                    <div
                                        className={
                                            styles.detail_information_row
                                        }
                                    >
                                        <span>Asset Name:</span>
                                        <span>{product.policyid}</span>
                                    </div>
                                    <div
                                        className={
                                            styles.detail_information_row
                                        }
                                    >
                                        <span>Description:</span>
                                        <span>{product.decription}</span>
                                    </div>
                                    <div
                                        className={
                                            styles.detail_information_row
                                        }
                                    >
                                        <span>Image:</span>
                                        <span>{product.image_nft.src}</span>
                                    </div>
                                    <div
                                        className={
                                            styles.detail_information_row
                                        }
                                    >
                                        <span>Metadata Type:</span>
                                        <span>
                                            Image/{product.metadatatype}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="nav-contact"
                                role="tabpanel"
                                aria-labelledby="nav-contact-tab"
                            >
                                <div className={styles.container_content}>
                                    <span className={styles.utxo}>
                                        {product.utxo} <BiCopyAlt />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContainerList
                title="Explore Item"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
            >
                <ListNft />
            </ContainerList>
        </div>
    );
};
export default DetaiNft;
