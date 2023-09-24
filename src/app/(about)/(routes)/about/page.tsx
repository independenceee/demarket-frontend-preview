import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Heading from "@/components/Heading";
import Background from "@/components/Poster";
import images from "@/assets/images";
import Founder from "@/components/Founder";
import styles from "./About.module.scss";
import Reviews from "@/components/Reviews";
import Title from "@/components/Title";

const cx = classNames.bind(styles);

type Props = {};

const About = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <section className={cx("background")}>
                <Background
                    title={"About Us"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper pulvinar imperdiet. Fusce rhoncus vel lacus vel tempor. Nullam eu magna congue, auctor nisl ac, tristique urna. In blandit mattis massa."
                    }
                />
            </section>

            <section className={cx("title")}>
                <Title main="Home" slug="Guide" />
            </section>
            <section className={cx("heading")}>
                <Heading title="About Us" />
            </section>
            <section className={cx("about-wrapper")}>
                <div className={cx("about-container")}>
                    <section className={cx("about")}>
                        <div className={cx("about-image")}>
                            <Image
                                src={images.background}
                                alt=""
                                className={cx("image")}
                            />
                        </div>
                        <div className={cx("about-content")}>
                            <h2>Open Your Own Marketplace</h2>
                            <p>
                                In hac habitasse platea dictumst. Integer arcu
                                odio, malesuada id eros vel, hendrerit consequat
                                quam. Pellentesque volutpat quis elit at
                                tincidunt. Fusce vel velit augue. Integer
                                gravida justo nec mauris congue, sit amet
                                faucibus nisl dictum.
                            </p>
                            <p>
                                Integer ornare mauris id mauris semper, non
                                fermentum est vestibulum. Sed non laoreet
                                ligula. Praesent tempor scelerisque nulla, non
                                tristique dolor rhoncus ac. Nulla vitae ornare
                                sapien. Quisque non massa ut justo convallis
                                blandit.
                            </p>

                            <a className={cx("about-button")}>Contact Us</a>
                        </div>
                    </section>
                </div>
            </section>

            {/*  */}
            <section className={cx("wrapper-review")}>
                <Reviews />
            </section>

            <section className={cx("founder-wrapper")}>
                <Heading
                    title="Our Foundation"
                    description="We're impartial and independent, and every day we
                            create distinctive, world-class programmes and
                            develop"
                />
                <div className={cx("founder-container")}>
                    <section className={cx("three-item")}>
                        <Founder />
                        <Founder />
                        <Founder />
                    </section>
                    <section className={cx("two-item")}>
                        <Founder />
                        <Founder />
                    </section>
                </div>
            </section>
        </main>
    );
};

export default About;
