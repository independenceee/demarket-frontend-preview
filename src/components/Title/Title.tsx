import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.module.scss";
const cx = classNames.bind(styles);
type Props = {
    main?: string;
    slug?: string;
};

const Title = function ({ main, slug }: Props) {
    return (
        <section className={cx("wrapper")}>
            <span className={cx("main")}>{main}</span>
            {slug && (
                <>
                    <span className={cx("bulkhead")}></span>
                    <span className={cx("slug")}>{slug}</span>
                </>
            )}
        </section>
    );
};

export default Title;
