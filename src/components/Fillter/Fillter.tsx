"use client";

import React from "react";
import styles from "./Fillter.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";
import { HiOutlineTrendingDown } from "react-icons/hi";
interface FillterProps {
    filter: {
        id: string;
        title: String;
    }[];
    name_head: string;
}
const Fillter = ({ filter, name_head }: FillterProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.row_data_header}>
                <h1>{name_head}</h1>
                <IoMdArrowDropdown />
            </div>
            {filter.map((fil) => {
                return (
                    <div className={styles.row_data} key={fil.id}>
                        <div className={styles.left_data}>
                            <label htmlFor={`${fil.id}`}>{fil.title}</label>
                        </div>
                        <div className={styles.right_data}>
                            <input
                                type="radio"
                                id={`${fil.id}`}
                                name="Category"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Fillter;
