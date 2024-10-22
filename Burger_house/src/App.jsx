// import {createBrowserRouter, Routes, Route} from "react-router-dom";

import HeroTop from "./components/marketing/Pagesection/HeroTop.jsx";
import LastProducts from "./components/marketing/Pagesection/lastproducts.jsx";
import Product from "./components/marketing/Pagesection/Product.jsx";
import Event from "./components/marketing/Pagesection/Event.jsx";
import Formulaire from "./components/marketing/Pagesection/Formulaire.jsx";

function App() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Product></Product>
      <Event></Event>
      <Formulaire></Formulaire>
    </>
  );
}
export default App;
