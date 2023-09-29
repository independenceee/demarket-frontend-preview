import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import React from "react";
interface SearchProps {
    title: string;
    children: React.ReactNode;
}
const cx = classNames.bind(styles);
const Search = ({ title, children }: SearchProps) => {
    return (
        <form className={cx("container_search")}>
            <input
                className={cx("search_input")}
                type="search"
                placeholder={`${title}`}
            />
            <button type="submit" className={cx("icon_search_nav")}>
                <span>|</span>
                {children}
            </button>
        </form>
    );
};

export default Search;
