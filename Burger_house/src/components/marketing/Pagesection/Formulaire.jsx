import Container from "./elements/container";
import Headings from "./elements/DisplayTitles/Headings";
// import Button from "./elements/Button";
import Assiete from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Assiette-burger-frites.png";
import Burger from "../../../Burger-House-By-Remote-Monkey-ressources/Background/Burger.png";
import ketchup from "../../../Burger-House-By-Remote-Monkey-ressources/Background/sauce-pimente.png";

function Champ(props) {
  return (
    <div>
      <label htmlFor="{props.holder}" className="font-secondary">
        {props.holder}
      </label>
      <input
        name={props.holder ==="Nombre de Personnes" ? "personnes" : props.holder}
        type={props.type}
        id={props.holder}
        className="p-5 leading-tight block w-full focus:border-primary focus:ring-primary focus:outline-none border-2 border-secondary rounded-md text-lg "
        placeholder={props.holder}
      />
    </div>
  );
}
function Formulaire() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(e.target.elements[0].value);
    console.log('====================================');
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const personnes = e.target.elements[4].value;
    const date = e.target.elements[2].value;
    const heure = e.target.elements[3].value;

    alert( `Table au nom de ${name.toUpperCase()} pour ${personnes} personnes \nPour le ${date} a ${heure}\n${email}` );
  };
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

          <form
            action=""
            className="grid grid-rows-2 grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <Champ holder="Nom" type="text" />
            <Champ holder="Email" type="email" />
            <Champ holder="Date" type="date" />
            <Champ holder="Heure" type="time" />
            <Champ holder="Nombre de Personnes" type="number" />
            <div>
              <label htmlFor="" className="invisible">
                Trouvez votre table
              </label>
              <input
                type="submit"
                value={"Trouvez votre table"}
                className="bg-red_primary hover:bg_red-primary-hover w-full text-white font-secondary tracking-widest uppercase py-5 rounded-md animate cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Formulaire;
