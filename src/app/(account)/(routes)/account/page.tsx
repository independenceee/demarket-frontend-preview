import React from "react";
import styles from "./Account.module.scss";
import images from "@/assets/images";
import { InfoBg } from "@/components/User/InfoUser";
import SideBarLeft from "@/layouts/components/SidebarLeft";
import TagUser from "@/components/User/TagUser/TagUser";
import Follower from "@/components/ListFollower/ListFollower";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Account = () => {
    const userInfo = {
        image_bg: images.logo,
        image_av: images.logo,
        user_name: "TienTung",
        sologan: "Nguyen Tien Tung",
        link_face: "/facebook.com",
        link_twitter: "/twitter.com",
    };

    return (
        <div className={cx("container")}>
            <InfoBg user={userInfo} />
            <div className={cx("container_body")}>
                <SideBarLeft
                    sibar_left_user={true}
                    sibar_left_marketpace={false}
                />
                <TagUser />
            </div>
        </div>
    );
};

export default Account;
