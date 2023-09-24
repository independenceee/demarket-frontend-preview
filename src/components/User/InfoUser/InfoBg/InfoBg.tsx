import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./InfoBg.module.scss";
import Button from "@/components/Button";
import IconComponent from "@/components/Icon";
import {
    AiOutlineCamera,
    AiOutlineFacebook,
    AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
interface InfoBGProps {
    user: {
        image_bg: StaticImport;
        image_av: StaticImport;
        user_name: string;
        sologan: string;
        link_face: string;
        link_twitter: string;
    };
}
const InfoBg = ({ user }: InfoBGProps) => {
    return (
        <div className={cx("container")}>
            <div className={cx("background")}>
                <Image src={user.image_bg} alt="BG" />
                <div className={cx("avatar")}>
                    <Image
                        src={user.image_av}
                        // width={1536}
                        // height={2340}
                        alt="avatar"
                    />
                </div>
                <div className={cx("icon")}>
                    <IconComponent>
                        <AiOutlineCamera />
                    </IconComponent>
                </div>
                <div className={cx("follow")}>
                    <Button className="btn_config_default">Follow</Button>
                </div>
            </div>
            <div className={cx("description")}>
                <div className={cx("row_description")}>
                    <div className={cx("name")}>
                        <h1>{user.user_name}</h1>
                        <Link href={"#"}>
                            <HiOutlinePencilAlt />
                        </Link>
                    </div>
                    <div className={cx("contact")}>
                        <div className={cx("icon")}>
                            <Link href={user.link_face}>
                                {" "}
                                <BiLogoFacebook />
                            </Link>
                        </div>
                        <div className={cx("icon")}>
                            <Link href={user.link_twitter}>
                                <AiOutlineTwitter />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx("sologan")}>{user.sologan}</div>
            </div>
        </div>
    );
};

export default InfoBg;
