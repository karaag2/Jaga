import Illustration from "../../../Burger-House-By-Remote-Monkey-ressources/Background/bg-food.jpg";
import Container from "./elements/container";
import Header from "./Headers";
import Product from "./../../../Burger-House-By-Remote-Monkey-ressources/HeroTop/burger-hero-top.png";
import Button from "./elements/Button";

function HeroTop() {
  return (
    <div className="bg-primary  h-screen w-full  ">
      <div
        style={{ backgroundImage: `url(${Illustration})` }}
        className="w-full h-full bg-repeat"
      >
        <Container>
          <Header />
          <div className=" w-full relative mt-28">
            <img
              src={Product}
              className="absolute -top-64 right-0 w-6/12 z-0"
              alt="Un menu hamburgr avec coca-cola"
            />
            <div className="bg-red_primary h-40 w-40 absolute p-3 top-40 right-80 rounded-full">
              <div className="border-dashed border-2 h-full w-full rounded-full flex justify-center items-center uppercase text-white">
                <div className="text-center">
                  <span className="block font-extrabold ">
                    <span className="text-5xl ">5</span>.49$
                  </span>
                  <span className="text-sm">seulement</span>
                </div>
              </div>
            </div>

            <div className=" relative text-secondary uppercase bg-prary z-10">
              <h1 className="mb-4 font-semibold">
                C'est le moment de gouter au meilleur gout des hamburgers
              </h1>
              <h2 className="font-secondary shadowTitlesecondary">
                <span className="text-8xl block">Burger</span>
                <span className="text-6xl">House</span>
                <span className="text-4xl ml-3">
                  click <span className="text-red_primary">&</span> collect
                </span>
              </h2>
            </div>
          </div>
          <Button className={"mt-5"} theme={"big"} color={"secondary"}>
            Cree mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
export default HeroTop;
