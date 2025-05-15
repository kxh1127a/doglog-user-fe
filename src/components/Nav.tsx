import React from 'react';
import styles from '@/styles/Nav.module.scss'
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";

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
                        <FaCalendarAlt />
                        <span>Calendar</span>
                    </Link>
                </li>
                <li>
                    <Link href="/caretip" className={styles.menu}>
                        <FaLightbulb />
                        <span>Care Tip</span>
                    </Link>
                </li>
                <li>
                    <Link href="/place" className={styles.menu}>
                        <FaMapMarkedAlt />
                        <span>Place</span>
                    </Link>
                </li>
                <li>
                    <Link href="/petcard" className={styles.menu}>
                        <MdOutlinePets />
                        <span>Pet Card</span>
                    </Link>
                </li>
                <li>
                    <Link href="/chart" className={styles.menu}>
                        <FaChartLine />
                        <span>Chart</span>
                    </Link>
                </li>
            </ul>

            <div className={styles.navbanner}>
                <p>
                    회원가입을 하면<br/>
                    우리집 댕댕이만의<br/>
                    예쁜 <span>Pet Card</span>를<br/>
                    만들 수 있어요
                </p>
                <div className={styles.bannericon}>
                    <MdOutlineDesignServices/>
                </div>
            </div>


        </div>
    );
};

export default Nav;