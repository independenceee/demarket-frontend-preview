import React from "react";
import Background from "@/components/Background";
import images from "@/assets/images";
import SideBarLeft from "@/layouts/components/SidebarLeft";
import ListNft from "@/components/ListNft";
import styles from "./Marketplace.module.scss";
import Title from "@/components/Title";

const page = () => {
    return (
        <div className={styles.container}>
            <Background
                image_src={images.background}
                image_width={1500}
                image_height={640}
                image_alt="BackGround"
                title="Examples For Creating Solid UX Design"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
                name_Bg_Page="Home / Marketplace"
                button1_name="Buy"
                button2_name="Sell"
            />
            <Title main="Home" slug="Market" />
            <div className={styles.container_body}>
                <SideBarLeft
                    sibar_left_user={false}
                    sibar_left_marketpace={true}
                />
                <div className={styles.container_list}>
                    <ListNft />

                    {/* Paging bar */}
                </div>
            </div>
        </div>
    );
};

export default page;