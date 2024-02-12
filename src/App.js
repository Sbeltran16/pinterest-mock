import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import SearchPage from "./pages/search-page/search-page";
import MainPage from "./pages/main-page/main-page";
import Navbar from "./components/navigations/navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
