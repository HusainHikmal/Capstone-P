import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "../components/element/Nav";
import CardsNews from "../components/Layout/CardsNews";
import SavePage from "./SavePage";

const HomePage = () => {

  return (
    <>

      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CardsNews />} />
        <Route path="/saved" element={<SavePage />} />
        <Route path="/category/:category" element={<CardsNews />} />
        <Route path="/search/:search" element={<CardsNews />} />
      </Routes>
    </Router>


  
    </>
  );
};

export default HomePage;
