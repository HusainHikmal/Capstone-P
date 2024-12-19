import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Nav = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm(""); // Reset input setelah pencarian
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    // <nav className="shadow-lg bg-lime-200 text-neutral-800 p-4 fixed top-0 left-0 w-full z-10 ">
    <nav className="h-16 fixed top-0 left-0 w-full z-10 shadow-lg bg-navy-600 text-yellow-300 p-3  ">

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <NavLink to="/">
          <img src="/src/assets/newspaper.png" alt="Logo" className="w-10 h-10" />
        </NavLink>
        <div className="font-playfair text-2xl font-bold">
          <NavLink to="/">News App</NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-inter text-sm font-medium  ">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/category/cnn&bbc" className="hover:text-gray-400">
            CNN
          </NavLink>
          <NavLink to="/category/sports" className="hover:text-gray-400">
            Sports
          </NavLink>
          <NavLink to="/category/kesehatan" className="hover:text-gray-400">
            Kesehatan
          </NavLink>
          <NavLink to="/category/makanan" className="hover:text-gray-400">
            Makanan
          </NavLink>
          <NavLink to="/category/programming" className="hover:text-gray-400">
            Programming
          </NavLink>
        </div>

        {/* Search & Save Button */}
        <div className="flex items-center space-x-3">
          {/* Search Form for Desktop  */}
          <form className="hidden lg:flex" onSubmit={handleSearch}>
            <input
              className="px-3 py-2 w-48 lg:w-64 rounded-l-md text-neutral-800 font-mono border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="p-2 rounded-r-md bg-blue-500 hover:bg-blue-700 text-white"
              type="submit"
            >
              Search
            </button>
          </form>


          {/* Save Icon */}
          <Link to="/saved">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 h-9 hover:text-gray-500 hover:scale-105 transition duration-300"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-700 p-4 space-y-4 mt-5 rounded-md transition-all duration-300">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            Home
          </NavLink>
          <NavLink
            to="/category/cnn&bbc"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            CNN
          </NavLink>
          <NavLink
            to="/category/sports"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            Olahraga
          </NavLink>
          <NavLink
            to="/category/kesehatan"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            kesehatan
          </NavLink>
          <NavLink
            to="/category/makanan"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            Makanan
          </NavLink>
          <NavLink
            to="/category/programming"
            onClick={handleLinkClick}
            className="block text-white hover:bg-gray-600 px-4 py-2 rounded"
          >
            Programming
          </NavLink>

          {/* Search Form for Mobile */}
          <form className="flex mt-4" onSubmit={handleSearch}>
            <input
              className="px-3 py-2 w-full rounded-l-md text-neutral-800 font-mono border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
            <button
              className="p-2 rounded-r-md bg-blue-500 hover:bg-blue-700 text-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};
