const Cards = (props) => {
  const {
    title = "Title",
    img,
    onClick1 = () => {},
    onClick2 = () => {},
    children = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 hover:text-green-800 hover:scale-125 duration-700"
      >
        <path
          fillRule="evenodd"
          d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  } = props;

  return (
    <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105 p-6 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:opacity-20 before:transition before:duration-1000 before:animate-shimmer">
      <div className="flex flex-col justify-between h-full">
        <h2 className="text-lg font-bold text-gray-800 mb-3 font-playfair">
          {title}
        </h2>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={img}
            className="w-full transition duration-200 transform hover:scale-110"
            alt="photo"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-6 sm:justify-start mt-6 mx-auto">
          {/* Explore More Button  */}
          <button
            className="relative bg-gradient-to-br from-white to-blue-100 text-gray-800 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 hover:from-blue-200 hover:to-white active:scale-95 w-full sm:w-auto font-poppins"
            onClick={onClick1}
          >
            <span className="absolute inset-0 bg-gradient-to-tl from-gray-50 to-transparent opacity-20 rounded-full pointer-events-none"></span>
            See
          </button>

          {/* Save Icon */}
          <div
            className="relative bg-transparent p-3 rounded-full shadow-md transition duration-300 hover:bg-blue-50 active:scale-95 mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center cursor-pointer"
            onClick={onClick2}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
