import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";
import TreidIn from "./components/TreidIn/TreidIn";
import Basket from "./components/Basket/Basket";
import KatalogsRound from "./components/KatalogsRound/KatalogsRound";


function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/katalogsKiys"
              element={<KatalogsKiys />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/redemtion" element={<TreidIn />} />
            <Route path="/round" element={<KatalogsRound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
