import Container from "./elements/container";
import Headings from "./elements/DisplayTitles/Headings";
import Button from "./elements/Button";
import Assiete from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Assiette-burger-frites.png";
import Burger from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Burger.png";
import ketchup from "../../../Burger-House-By-Remote-Monkey-ressources/Background/sauce-pimente.png";

function Champ(props) {
  return (
    <input
      type={props.type}
      className="p-4 leading-tight focus:outline-none border border-secondary rounded-md text-lg "
      placeholder={props.holder}
    />
  );
}
function Formulaire() {
  return (
    <Container>
      <div className="relative mb-20 py-6  bg-prmary">
        <img
          src={Burger}
          alt="un burger apetissant"
          className="absolute -left-36 -top-20 z-10"
        />
        <img
          src={ketchup}
          alt="une sauce Delicieuse"
          className="absolute -bottom-12 left-12"
        />

        <img
          src={Assiete}
          alt="une magnifique assiette"
          className="absolute -right-96 -bottom-52"
        />
        <div className="max-w-3xl py-14 px-10 m-auto bg-slate500">
          <Headings theme="" ui="mt-5 mb-0">
            Reservation
          </Headings>
          <Headings theme="secondary" ui="mb-12">
            Reservez votre table
          </Headings>
          <div>
            <form action="" className="grid grid-rows-2 grid-cols-2 gap-6">
              <Champ holder="Nom" type="text" />
              <Champ holder="Email" type="email" />
              <Champ holder="Date" type="date" />
              <Champ holder="Heure" />
              <Champ holder="Nombre de Personnes" type="number" />

              <Button
                color="danger"
                className="rounded-md tex font-secondary text-xl"
              >
                Trouvez une table
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Formulaire;
