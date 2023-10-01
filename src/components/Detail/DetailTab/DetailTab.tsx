import React from "react";
import styles from "./DetailTab.module.scss";
import { BiCopyAlt } from "react-icons/bi";
import classNames from "classnames/bind";
import ListHistory from "@/components/TrackHistory";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import { IoCopyOutline } from "react-icons/io5";
const cx = classNames.bind(styles);
interface props {
    policyid?: string;
    asset_name?: string;
    decription?: string;
    image_nft?: string;
    metadatatype?: string;
    utxo?: string;
}
const DetailTab = ({
    policyid,
    asset_name,
    decription,
    image_nft,
    metadatatype,
    utxo,
}: props) => {
    return (
        <div className={cx("container_detail_info_detail")}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
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
                    <div className={cx("container_content")}>
                        <ListHistory />
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                >
                    <div className={cx("container_content")}>
                        <div className={cx("detail_information_row")}>
                            <span>PolicyID:</span>
                            <span>
                                {policyid} <IoCopyOutline />
                            </span>
                        </div>
                        <div className={cx("detail_information_row")}>
                            <span>Asset Name:</span>
                            <span>{asset_name}</span>
                        </div>
                        <div className={cx("detail_information_row")}>
                            <span>Description:</span>
                            <span>{decription}</span>
                        </div>
                        <div className={cx("detail_information_row")}>
                            <span>Image:</span>
                            <span>{image_nft}</span>
                        </div>
                        <div className={cx("detail_information_row")}>
                            <span>Metadata Type:</span>
                            <span>Image/{metadatatype}</span>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                >
                    <div className={cx("container_content")}>
                        <span className={cx("utxo")}>
                            {utxo} <IoCopyOutline />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTab;
