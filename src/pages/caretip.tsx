import React, {useEffect, useState} from 'react';
import MemberMenu from "@/components/MemberMenu";
import styles from "../styles/caretip.module.scss";
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import { FaDog, FaBone, FaTooth, FaHome, FaHeartbeat, FaScroll, FaHandHoldingHeart, FaBookOpen, FaTools, FaUserShield } from "react-icons/fa";
import { GiDogBowl, GiJumpingDog } from "react-icons/gi";

const categoryIcons: { [key: string]: JSX.Element } = {
    "건강관리": <FaHeartbeat />,
    "훈련·교육": <FaBookOpen />,
    "사료·간식·영양": <GiDogBowl />,
    // "초보 애견인을 위한 핵심 가이드": <FaDog />,
    "애견 용품": <FaTools />,
    "위생/미용": <FaTooth />,
    "생활환경/주거": <FaHome />,
    "분양/입양": <FaHandHoldingHeart />,
    "보험/비용": <FaUserShield />,
    "법/정책/등록": <FaScroll />,
    "사회화/놀이·운동": <GiJumpingDog />,
};

const Caretip = () => {

    // 카테고리 데이터 상태 저장
    const [categories, setCategories] = useState<string[]>([]);

    // 컴포넌트 마운트 시 API 호출
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("http://localhost:8089/api/caretip/category");
                const result = await response.json();

                if (result.isSuccess && Array.isArray(result.list)) {
                    // 전체 이름 리스트 추출
                    const names: string[] = result.list.map((item: any) => item.categoryName);

                    // "초보 애견인을 위한 핵심 가이드"를 맨 앞으로...
                    const firstItem = "초보 애견인을 위한 핵심 가이드";
                    const sorted = [
                        firstItem,
                        ...names.filter(name => name !== firstItem)
                    ];

                    setCategories(sorted);
                } else {
                    console.error("API 응답 형식 오류");
                }
            } catch (error) {
                console.error("API 호출 실패:", error);
            }
        };


        fetchCategories();
    }, []);

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
            {/* 카테고리 리스트 보여주기 - 글이 없으면 안나오게할거에요 */}
            <div className={styles.categories}>
                {categories.map((name, index) => (
                    <div key={index} className={styles.categoryBox}>
                        {/* 첫 번째 항목에만 이미지 표시하겠다.. */}
                        {index === 0 && (
                            <img src="/caretip_first.png" alt={name} />
                        )}

                        {/* 첫 번째 항목은 아이콘 없이, 나머지는 아이콘 표시 */}
                        {index !== 0 && (
                            <div className={styles.iconArea}>
                                {categoryIcons[name] || <FaDog />} {/* 기본 아이콘 */}
                            </div>
                        )}

                        <p className={styles.categoryName}>{name}</p>

                        <div className={styles.indexArea}>
                            <span>{index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Caretip;