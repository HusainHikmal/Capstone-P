import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cards from "../components/element/Cards";
import Modal from "../components/element/Modal"; // Import Modal
import { REMOVE_NEWS } from "../redux/BookmarkSlice";

const SavePage = () => {
  const savedCards = useSelector((state) => state.Saved);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (card) => {
    setModalContent(card);
    setIsModalOpen(true);
  };

  return (
    <>
      <h1>SavePage</h1>
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 m-4 bg-gradient-to-br from-white via-blue-50 to-gray-100 ">
        {savedCards.length > 0 ? (
          savedCards.map((card) => (
            <Cards
              key={card.title}
              id={card.id}
              title={card.title}
              img={card.image || "https://via.placeholder.com/150"}
              link={card.url}
              onClick1={() => openModal(card)}
              onClick2={() => dispatch(REMOVE_NEWS(card.title))}
            />
          ))
        ) : (
          <p>No items saved yet!</p>
        )}
      </div>

      {/* Gunakan Komponen Modal */}
      <Modal
        isOpen={isModalOpen}
        content={modalContent}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SavePage;

