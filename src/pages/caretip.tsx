import React, {useEffect, useState} from 'react';
import MemberMenu from "@/components/MemberMenu";
import styles from "../styles/caretip.module.scss";
import Link from 'next/link';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


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
                    // API에서 한글로 categoryName이 내려온다고 가정
                    setCategories(result.list.map((item: any) => item.categoryName));
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
            {/* 카테고리 리스트 동적 생성 */}
            <div className={styles.categories}>
                {categories.map((name, index) => (
                    <div key={index} className={styles.categoryBox}>
                        {/* 첫 번째 항목에만 이미지 표시 */}
                        {index === 0 && (
                            <img src="/caretip_first.png" alt={name} />
                        )}
                        <p>{name}</p>
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