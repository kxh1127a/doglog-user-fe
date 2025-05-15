import React from 'react';
import styles from '@/styles/Nav.module.scss'
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href="/">
                    <img src="/logo.png" alt="doglog logo"/>
                </Link>
            </h1>
            <ul className={styles.menulist}>
                <li>
                    <Link href="/" className={styles.menu}>
                        <FaHome />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar" className={styles.menu}>
                        <FaHome />
                        <span>Calendar</span>
                    </Link>
                </li>
                <li>
                    <Link href="/caretip" className={styles.menu}>
                        <FaHome />
                        <span>Care Tip</span>
                    </Link>
                </li>
                <li>
                    <Link href="/place" className={styles.menu}>
                        <FaHome />
                        <span>Place</span>
                    </Link>
                </li>
                <li>
                    <Link href="/petcard" className={styles.menu}>
                        <FaHome />
                        <span>Pet Card</span>
                    </Link>
                </li>
                <li>
                    <Link href="/" className={styles.menu}>
                        <FaHome />
                        <span>Chart</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;