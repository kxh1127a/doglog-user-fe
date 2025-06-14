import React from 'react';
import Link from "next/link";
import styles from "@/styles/MemberMenu.module.scss";


const MemberMenu = () => {
    return (
        <div className={styles.memberMenu}>
            <Link href="/login">로그인</Link>
            <Link href="/join">회원가입</Link>
        </div>
    );
};

export default MemberMenu;