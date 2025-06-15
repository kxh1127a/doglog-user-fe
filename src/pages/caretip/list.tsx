import { useRouter } from 'next/router';

const CaretipList = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div className="main-container">
            <h1>{category} 의 내용 작성예정..</h1>
            {/* 여기에 리스트 작업예정 */}
        </div>
    );
};

export default CaretipList;