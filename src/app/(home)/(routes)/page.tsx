import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Background from "@/components/Background";
import images from "@/assets/images";
import Title from "@/components/Title";
import ContainerList from "@/components/ContainerList";
import ListNft from "@/components/ListNft";
import ListTopNft from "@/components/ListTopNFT";
import ListCollection from "@/components/ListCollection";
import Reviews from "@/components/Reviews";

const cx = classNames.bind(styles);

type Props = {};

const Home = function ({}: Props) {
    return (
        <div className={cx("main_home")}>
            <Background
                image_src={images.BG_1}
                image_height={640}
                image_alt="BackGround"
                title="Examples For Creating Solid UX Design"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
                name_Bg_Page="Home"
                button1_name="Explore"
                button2_name="Getting Started"
            />
            <Title main="Home" />
            <ContainerList
                title="New Item"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
            >
                <ListNft />
            </ContainerList>
            <ContainerList
                title="Trending Item"
                description="Here are the top assets that are currently trending on our exchange, which we evaluate based on the criteria of uniqueness and rarity. "
            >
                <ListTopNft />
            </ContainerList>
            <ContainerList
                title="Selling Item"
                description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
            >
                <ListNft />
            </ContainerList>
            <ContainerList
                title="Top Collection"
                description="Beginning of the app and website design process."
            >
                <ListCollection />
            </ContainerList>
            <Reviews />
        </div>
    );
};

export default Home;
