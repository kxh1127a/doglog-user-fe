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
                    <IoSearch />
                    <input type="text" placeholder="검색어를 입력해주세요" />
                </div>
                <Link href="/likes" className={styles.likebtn}>
                    <FaRegHeart />
                </Link>
            </div>
            <div className={styles.categories}>
                <div className={styles.categoryBox}>
                    <img src="/caretip_first.png" alt="초보자를 위한 가이드"/>
                    <div className={styles.indexArea}>
                        <span>1</span>
                    </div>
                </div>
                <div className={styles.categoryBox}>
                    <div className={styles.indexArea}>
                        <span>2</span>
                    </div>
                </div>
                <div className={styles.categoryBox}>cc</div>
                <div className={styles.categoryBox}>dd</div>
                <div className={styles.categoryBox}>cc</div>
            </div>
        </div>
    );
};

export default Caretip;