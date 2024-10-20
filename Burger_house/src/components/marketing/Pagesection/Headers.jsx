import Logo from "../../../Burger-House-By-Remote-Monkey-ressources/Logo/Logo-burger-house.svg";
import Ico from "../../../Burger-House-By-Remote-Monkey-ressources/Icones/ico-bag-clickAndCollect.svg";
import Button from "./elements/Button";

function Header() {
  return (
    <div className="relative z-10 flex items-center justify-around py-10">
      <div className="w-full">
        <img src={Logo} alt="Burger House App" className="w-64" />
      </div>
      <div className="w-full  text-secondary">
        <div className=" flex items-center justify-end">
          <img src={Ico} alt="Burger House App" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex justify-end my-4">
          <Button className={"bg-primary hover:bg-secondary mr-4"}>
            Inscription
          </Button>

          <Button className={"bg-secondary hover:bg-primary"}>connexion</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
