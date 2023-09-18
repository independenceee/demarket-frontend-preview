import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import GuideItem from "@/components/GuideItem";

const cx = classNames.bind(styles);

type Props = {};

const Home = function ({}: Props) {
    return <GuideItem />;
};

export default Home;
