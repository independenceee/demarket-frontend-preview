import React from "react";
import classNames from "classnames/bind";
import Background from "@/components/Background";
import styles from "./Guide.module.scss";
import Heading from "@/components/Heading";

type Props = {};

const cx = classNames.bind(styles);
const Guide = function ({}: Props) {
    return (
        <main className={cx("wrapper")}>
            <Background
                title="Guide Center"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit."
            />

            <Heading title="Home - Guide page" />

            <Heading
                title="How can I help You?"
                description="You don’t Know how to use feature of pladform. Let me give you some Manual document."
            />
        </main>
    );
};

export default Guide;
