import "./assets/scss/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//context
import { StateProvider } from "./context/StateProvider";

import { useState } from "react";
//pages
import Home from "./pages/Home";
import CharacterId from "./pages/CharacterId";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favorites from "./pages/Favorites";

//components
import ComicsId from "./pages/ComicsId";
import Signup from "./components/Signup";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <StateProvider>
        <Routes>
          <Route
            path="/"
            element={<MainLayout show={show} setShow={setShow} />}
          >
            {/* Get a list of characters */}
            <Route index element={<Home />} />
            {/* Get a the infos of a specific character */}
            <Route path="/character/:characterId" element={<CharacterId />} />
            {/* Get a list of comics */}
            <Route path="/comics" element={<Comics />} />
            {/* Get a list of comics containing a specific character */}
            <Route path="/comics/:characterId" element={<ComicsId />} />
            {/* Get all informations of specific comic */}
            <Route path="/comic/:comicId" element={<Comic />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
        {show && <Signup />}
      </StateProvider>
    </Router>
  );
}

export default App;
