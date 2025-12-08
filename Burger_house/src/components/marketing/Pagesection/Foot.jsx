import Container from "./elements/container";
import facebook from "/Burger-House-By-Remote-Monkey-ressources/Icones/facebook-f-brands.svg";
import Headings from "./elements/DisplayTitles/Headings";
import twitter from "/Burger-House-By-Remote-Monkey-ressources/Icones/twitter-brands.svg";
import whatssap from "/Burger-House-By-Remote-Monkey-ressources/Icones/facebook.png";
import Back from "/Burger-House-By-Remote-Monkey-ressources/Background/bg-footer.jpg";
import instagram from "/Burger-House-By-Remote-Monkey-ressources/Icones/instagram (2).png";
import Burger from "/Burger-House-By-Remote-Monkey-ressources/Logo/picto-burger-house copy.svg";

function Foot() {
  return (
    <Container>
      <div
        className="flex flex-col w-full justify-between px-8 bg-secondry mb-10 text-white bg-priary"
        style={{ background: `url(${Back}) center 100%  no-repeat` }}
      >
        <div className="flex  w-full justify-between pt-8 ">
          <div className=" w-full pt-12  pr-8 ">
            <div className="flex w-full items-center justify-start mb-10">
              <img
                src={Burger}
                alt="Burger House App"
                className="w-16 h-16 top-0 left-0 absolte"
              />
              <h2 className="mx-4  uppercase text-4xl item col-span-2 font-semibold">
                Burger house
              </h2>
            </div>
            <p className="text-sm pb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>@Burger_House 2021. ALL RIGHT RESERVED</p>
          </div>
          <div className=" flex flex-col items-center justify-aroun w-full font-medium relative">
            <div className=" flex flex-col items-center justify-end h-4/5 w-full font-semibold py-12 ">
              <div className="flex flex-col items-start justify-center">
                <p>15place bellecours, 6900 lyon</p>
              </div>
              <div className="flex flex-col items-start justify-center">
                <p>info@Burger_House.com</p>
              </div>
            </div>

            <div
              className="flex absolute bottom-4 right-0 justify-between w-1/3
            "
            >
              <img src={whatssap} alt="" className="h-8 w-8" />
              <img src={instagram} alt="" className="h-8 w-8" />
              <img src={whatssap} alt="" className="h-8 w-8" />
              <img src={instagram} alt="" className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Foot;
