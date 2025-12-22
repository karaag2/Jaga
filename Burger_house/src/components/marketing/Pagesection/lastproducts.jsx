import Container from "./elements/container";
import LastProduct1 from "/Burger-House-By-Remote-Monkey-ressources/Burgers/LastProducts-1.jpg";
import LastProduct2 from "/Burger-House-By-Remote-Monkey-ressources/Burgers/LastProducts-2.jpg";
import LastProduct3 from "/Burger-House-By-Remote-Monkey-ressources/Burgers/LastProducts-3.jpg";

function LastProducts() {
  return (
    <Container>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 w-full px-16 h-96 my-20 uppercase text-white">
        <div className="relative bg-primary h-full row-span-2 rounded-md  p-7">
          <img
            src={LastProduct1}
            alt="Un delicieux hamburger"
            className="rounded-md absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10">
            <span className="block font-bold text-lg">Killer burger</span>
            <span className="text-2xl font-black">
              Burger le plus populaire
            </span>
          </div>
        </div>

        <div className="relative bg-primary h-full  rounded-md p-7">
          <img
            src={LastProduct2}
            alt="un delicieux hamburger"
            className="rounded-md absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          <div className="relative z-10">
            <span className="font-bold text-lg block">Orlando's burger</span>
            <span className="block text-2xl font-black"> plus de plaisir</span>
            <span className="text-2xl font-black">plus de gout</span>
          </div>
        </div>
        <div className="relative bg-primary h-full  rounded-md p-7">
          <img
            src={LastProduct3}
            alt="un delicieux hamburger"
            className="rounded-md absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10">
            <span className="font-bold text-lg block">Big Mac's burger </span>
            <span className="text-2xl font-black">epice&sucre</span>
          </div>
        </div>

        <div></div>
      </div>
    </Container>
  );
}
export default LastProducts;
