import React from 'react';
import MemberMenu from "@/components/MemberMenu";
import styles from "../styles/caretip.module.scss";
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Caretip = () => {
    return (
        <div className="main-container">
            <MemberMenu />
            <div className={styles.searchContainer}>
                <div className={styles.searchBox}>
                    <input type="text"/>
                    <IoSearch />
                </div>
                <Link href="/likes">
                    <FaRegHeart />
                </Link>
            </div>
        </div>
    );
};

export default Caretip;