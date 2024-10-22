import Container from "./elements/container";
import Headings from "./elements/DisplayTitles/Headings";
import Assiete from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Assiette-burger-frites.png";
import Burger from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Burger.png";
import ketchup from "../../../Burger-House-By-Remote-Monkey-ressources/Background/sauce-pimente.png";

function Formulaire() {
  return (
    <Container>
      <div className="relative mb-20 py-6  bg-primary">
        <img
          src={Burger}
          alt="un burger apetissant"
          className="absolute -left-36 -top-20 z-10"
        />
        <img
          src={ketchup}
          alt="une sauce Delicieuse"
          className="absolute bottom-0 LEFT-0"
        />

        <img
          src={Assiete}
          alt="une magnifique assiette"
          className="absolute -right-96 -bottom-52"
        />
        <div className="max-w-3xl py-72 m-auto bg-slate-500">
          <Headings> Reservation</Headings>
        </div>
      </div>
    </Container>
  );
}

export default Formulaire;
