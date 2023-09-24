import React from "react";
import classNames from "classnames/bind";
import Poster from "@/components/Poster";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import GuideItem from "@/components/GuideItem";
import styles from "./Guide.module.scss";

type Props = {};

const cx = classNames.bind(styles);
const Guide = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <section className={cx("background")}>
                <Poster
                    title="Guide Center"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
                />
            </section>

            <section className={cx("title")}>
                <Title main="Home" slug="Guide" />
            </section>

            <section className={cx("heading")}>
                <Heading
                    title="How can I help You?"
                    description="You don’t Know how to use feature of pladform. Let me give you some Manual document."
                />
            </section>

            <section className={cx("guide-wrapper")}>
                <GuideItem />
                <GuideItem />
                <GuideItem />
                <GuideItem />
                <GuideItem />
            </section>
        </main>
    );
};

export default Guide;
