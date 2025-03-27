import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import ArtistPage from "./screens/Artist";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artist/:artistSlug" element={<ArtistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
