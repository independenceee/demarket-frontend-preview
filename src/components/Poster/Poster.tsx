import React from "react";
import classNames from "classnames/bind";
import styles from "./Poster.module.scss";

const cx = classNames.bind(styles);

type Props = {
    title: string;
    description: string;
};

const Poster = function ({ title, description }: Props) {
    return (
        <section className={cx("wrapper")}>
            <div className={cx("container")}>
                <h2 className={cx("title")}>{title}</h2>
                <p className={cx("description")}>{description}</p>
            </div>
        </section>
    );
};

export default Poster;
