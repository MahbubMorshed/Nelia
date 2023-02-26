import { Route, Routes } from "react-router-dom";
import Container from "./Container";
import BallContainer from "./BallContainer";

import Home from "./Home";
import Sidebar from "./Sidebar";
import "./style.css";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/cube" element={<Container />} />
        <Route path="/ball" element={<BallContainer />} />
      </Routes>
    </>
  );
}

export default App;
