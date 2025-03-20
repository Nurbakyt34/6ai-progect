import React, { useState } from "react";
import Star from '../../assets/star.png'
import ReviewCard from "../../components/review/ReviewCard";
import { useTranslation } from "react-i18next";
import { useGetReviewsQuery } from "../../components/redux/service/reviewApi";

const reviewsData = [
    { id: 1, name: "Leslie Alexander", date: "2 месяца назад", rating: 5, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.Lorem ipsum dolor sit amet consectetur.", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Ronald Richards", date: "2 недели назад", rating: 3, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Darlene Robertson", date: "2 месяца назад", rating: 5, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.Molestie nibh rhoncus ac malesuada massa.", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 4, name: "Darrell Steward", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Eleanor Pena", date: "2 месяца назад", rating: 5, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus..", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 6, name: "Annette Black", date: "2 недели назад", rating: 4, text: "Lorem ipsum dolor sit amet consectetur. Sit viverra cras adipiscing habitant turpis. Nec iaculis orci porttitor faucibus nibh pellentesque egestas urna. Molestie nibh rhoncus ac malesuada massa orci nibh. Tristique euismod risus.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const pageSize = 4;
const ReviewsPage = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;
    const [page, setPage] = useState(1);
    const { data: cards = [], isLoading } = useGetReviewsQuery({ limit: pageSize, offset: (page - 1) * pageSize });

    // Индексы для пагинации
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);
    const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    console.log(cards);



    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">
                {t("reviews")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((review) => (
                    <ReviewCard key={review.id} review={review} /> // push
                ))}
            </div>

            {/* Пагинация */}
            <div className="mt-6 flex justify-center space-x-2">
                <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1  ${currentPage === 1 ? "bg-gray-300" : "bg-[#3E6AE1] text-white"}`}
                >
                    {t("button_start")}
                </button>
                {/* <span className="px-4 py-2">Page {page}</span> */}


                <div className="flex gap-2 mt-4">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setPage(index + 1)}
                            className={`px-3 py-1 rounded ${page === index + 1 ? "bg-[#3E6AE1] text-white" : "bg-gray-300"}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1  ${currentPage === totalPages ? "bg-gray-300" : "bg-[#3E6AE1] text-white"}`}
                >
                    {t("button_end")}

                </button>
            </div>
        </div>
    );
};

export default ReviewsPage;


