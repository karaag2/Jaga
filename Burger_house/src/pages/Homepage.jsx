import HeroTop from "../components/marketing/Pagesection/HeroTop.jsx";
import LastProducts from "../components/marketing/Pagesection/lastproducts.jsx";
import Foot from "../components/marketing/Pagesection/Foot.jsx";
import Product from "../components/marketing/Pagesection/Product.jsx";
import Event from "../components/marketing/Pagesection/Event.jsx";
import Formular from "../components/marketing/Pagesection/Formulaire.jsx"
function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
        <Product></Product>
      <Event></Event>
      <Formular></Formular>
      <Foot></Foot>
    </>
  );
}
export default HomePage;
