import React from "react";
import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

const cx = classNames.bind(styles);

type Props = {
    title?: string;
    description?: string;
    classNameTitle?: any;
    classNameDescription?: any;
};

const Heading = function ({
    title,
    description,
    classNameTitle,
    classNameDescription,
}: Props) {
    const classNameTitles: any = cx("title", {
        [classNameTitle]: classNameTitle,
    });

    const classNameDescriptions: any = cx("description", {
        [classNameDescription]: classNameDescription,
    });
    return (
        <header className={cx("wrapper")}>
            {title && <h2 className={classNameTitles}>{title}</h2>}
            {description && (
                <p className={classNameDescriptions}>{description}</p>
            )}
        </header>
    );
};

export default Heading;
