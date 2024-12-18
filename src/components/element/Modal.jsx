const Modal = ({ isOpen, content, onClose }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center animate-scale-in">
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-5 rounded-lg shadow-2xl max-w-md w-full text-center transform transition-all duration-300">
        <h2 className="text-2xl font-poppins font-bold mb-4 text-gray-800">
          {content.title}
        </h2>
        <img
          src={content.image || "https://via.placeholder.com/150"}
          alt={content.title}
          className="mb-4 rounded-lg mx-auto shadow-md"
        />
        <p className="mb-6 text-gray-700">{content.description}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 shadow-md"
            onClick={onClose}
          >
            Tutup
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 shadow-md"
            onClick={() => window.open(content.url, "_blank")}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
