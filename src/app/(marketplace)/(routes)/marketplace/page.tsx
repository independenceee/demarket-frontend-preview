import React from "react";
import Background from "@/components/Background";
import images from "@/assets/images";
import SideBarLeft from "@/layouts/components/SidebarLeft";
import ListNft from "@/components/ListNft";
import styles from "./Marketplace.module.scss";
import Title from "@/components/Title";
import classNames from "classnames/bind";
import ListFollower from "@/components/ListFollower/ListFollower";
const cx = classNames.bind(styles);
const page = () => {
    return (
        <div className={cx("container")}>
            <Background
                image_src={images.BG_1}
                image_width={1500}
                image_height={640}
                image_alt="BackGround"
                title="Examples For Creating Solid UX Design"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
                name_Bg_Page="Home / Marketplace"
                button1_name="Buy"
                button2_name="Sell"
                href_btn_1="account"
                href_btn_2="marketplace"
            />
            <Title main="Home" slug="Market" />
            <div className={cx("container_body")}>
                <SideBarLeft
                    sibar_left_user={false}
                    sibar_left_marketpace={true}
                />
                <div className={cx("container_list")}>
                    <ListNft />
                    <div className={cx("popular_collector")}>
                        <h2>Popular Creater</h2>
                        <ListFollower />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
