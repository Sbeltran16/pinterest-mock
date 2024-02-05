import Navbar from "./components/navigations/navbar";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
