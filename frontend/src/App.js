import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import KatalogsKiys from "./components/KatalogsKiys/KatalogsKiys";
import Favorites from "./components/Favorites/Favorites";

 

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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
