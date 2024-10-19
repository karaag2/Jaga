import Illustration from "../../../Burger-House-By-Remote-Monkey-ressources/Background/bg-food.jpg";
import Container from "./elements/container";
import Header from "./Headers";

function HeroTop() {
  return (
    <div className="bg-primary  h-screen w-full  ">
      <div
        style={{ backgroundImage: `url(${Illustration})` }}
        className="w-full h-full bg-repeat"
      >
        <Container>
          <Header></Header>
        </Container>
      </div>
      <></>
    </div>
  );
}
export default HeroTop;
