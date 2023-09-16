import React from "react";
import classNames from "classnames/bind";
import Heading from "@/components/Heading";
import styles from "./Background.module.scss";

const cx = classNames.bind(styles);

type Props = {
    title: string;
    description: string;
};

const Background = function ({ title, description }: Props) {
    return (
        <section className={cx("wrapper")}>
            <Heading
                title={title}
                description={description}
                classNameTitle={cx("title")}
                classNameDescription={cx("description")}
            />
        </section>
    );
};

export default Background;
