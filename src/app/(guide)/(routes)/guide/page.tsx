import React from "react";
import classNames from "classnames/bind";
import Background from "@/components/Background";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import GuideItem from "@/components/GuideItem";
import styles from "./Guide.module.scss";

type Props = {};

const cx = classNames.bind(styles);
const Guide = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <Background
                title="Guide Center"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
            />

            <Title main="Home" slug="Guide" />

            <Heading
                title="How can I help You?"
                description="You don’t Know how to use feature of pladform. Let me give you some Manual document."
            />

            <section className={cx("guide-wrapper")}>
                <GuideItem />
            </section>
        </main>
    );
};

export default Guide;
