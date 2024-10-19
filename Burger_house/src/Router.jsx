import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";

export default function Routeur() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
