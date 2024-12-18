import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';  // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css';  // Import style Skeleton
import Cards from "../element/Cards";
import Modal from "../element/Modal";
import { ADD_NEWS, REMOVE_NEWS } from "../../redux/BookmarkSlice"; 

const API_KEY = import.meta.env.VITE_ApiKey;
const BASE_URL = import.meta.env.VITE_Default_News;

const SOURCES = `${BASE_URL}${API_KEY}${import.meta.env.VITE_SOURCES}`;
const SPORTS = `${BASE_URL}${API_KEY}${import.meta.env.VITE_SPORT}`;
const HEALTY = `${BASE_URL}${API_KEY}${import.meta.env.VITE_HEALTY}`;
const TECHNOLOGY = `${BASE_URL}${API_KEY}${import.meta.env.VITE_SEARCH}`;
const FOOD = `${BASE_URL}${API_KEY}${import.meta.env.VITE_FOOD}`;


const CardsNews = () => {
  const [news, setNews] = useState([]);
  const { category, search } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const dispatch = useDispatch();
  const savedCards = useSelector((state) => state.Saved);

  const handleToggleBookmark = (card) => {
    const isSaved =
      Array.isArray(savedCards) &&
      savedCards.some((item) => item.title === card.title);
    if (isSaved) {
      dispatch(REMOVE_NEWS(card.title));
    } else {
      dispatch(ADD_NEWS(card));
    }
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setIsLoading(true); // Set loading state to true during delay
      setTimeout(() => {
        setNews(data.data || []); // Simulate delay (1700ms)
        setIsLoading(false); // Stop loading after delay
      }, 1550); // Delay 1550ms before updating state
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let url;
    if (search) {
      url = `${BASE_URL}${API_KEY}&keywords=${search}`;
    } else if (category === "cnn&bbc") {
      url = SOURCES;
    } else if (category === "sports") {
      url = SPORTS;
    } else if (category === "makanan") {
      url = FOOD;
    } else if(category === 'kesehatan'){
      url = HEALTY
    }else if (category === "programming") {
      url = TECHNOLOGY;
    } else {
      url = `${BASE_URL}${API_KEY}&countries=id`;
    }
    setIsLoading(true);
    fetchData(url);
  }, [category, search, location.key]);

  const openModal = (card) => {
    setModalContent(card);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-7 bg-gradient-to-br from-white via-blue-50 to-gray-50 min-h-screen pt-16">

        {Array(news.length).fill().map((_, index) => (
          <div key={index} className="p-4">
            <Skeleton height={240} /> {/* Skeleton untuk gambar */}
            <Skeleton count={2} /> {/* Skeleton untuk teks */}
          </div>
        ))}
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <>
  <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 m-4 bg-gradient-to-br from-white via-blue-50 to-gray-100 min-h-screen">

        {news.map((card) => {
          const isSaved = Array.isArray(savedCards) && savedCards.some((item) => item.title === card.title);

          return (
            <Cards
              key={card.title}
              id={card.id}
              title={card.title}
              img={card.image || "https://via.placeholder.com/150"}
              link={card.url}
              onClick1={() => openModal(card)}
              onClick2={() => handleToggleBookmark(card)}
            >
              <button
                className={`h-6 w-6 duration-150 ${isSaved ? "text-green-600 hover:text-green-800" : "text-gray-500 hover:text-red-800"}`}
                onClick={() => handleToggleBookmark(card)}
              >
                {isSaved ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </Cards>
          );
        })}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        content={modalContent}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CardsNews;
