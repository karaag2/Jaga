import HeadingTitles from "./elements/DisplayTitles/headingtitles";
import Headings from "./elements/DisplayTitles/Headings";
import Container from "./elements/container";
import Image1 from "../../../Burger-House-By-Remote-Monkey-ressources/Burgers/Product-1.jpg";
import Image2 from "../../../Burger-House-By-Remote-Monkey-ressources/Burgers/Product-2.jpg";
import Image3 from "../../../Burger-House-By-Remote-Monkey-ressources/Burgers/Product-3.jpg";
import Burgers from "./elements/Burgers";
function Products() {
  return (
    <Container>
      <HeadingTitles variant="h3">Toujours des delicieux burgers</HeadingTitles>
      <Headings theme="secondary">Choisisez et Savourez</Headings>

      <p className="text-center">
        Burgers are a classic American meal that consists of a grilled or fried
        beef patty sandwiched between two buns, along with various toppings such
        as lettuce, tomato, onion, cheese, pickles, and condiments like ketchup,
        mustard, and mayonnaise.
      </p>
      <div className="grid grid-cols-3  gap-x-1 mt-10 mb-20 h-72">
        <Burgers img={Image1}></Burgers>
        <Burgers img={Image2}></Burgers>
        <Burgers img={Image3}></Burgers>
      </div>
    </Container>
  );
}
export default Products;
