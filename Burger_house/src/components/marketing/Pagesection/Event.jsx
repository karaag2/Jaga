import Container from "./elements/container";
import Headings from "./elements/DisplayTitles/Headings";
// import HeadingTitles from "./elements/DisplayTitles/headingtitles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import thEvents from "/Burger-House-By-Remote-Monkey-ressources/Events/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image1 from "/Burger-House-By-Remote-Monkey-ressources/Burgers/Product-1.jpg";
import Image2 from "/Burger-House-By-Remote-Monkey-ressources/Burgers/Product-2.jpg";

import "../../../css/carousel.css";

// const items = [
//   <img src={thEvents} onDragStart={handleDragStart} role="presentation" />,
//   <img src={thEvents} onDragStart={handleDragStart} role="presentation" />,
// ];
const Slide = ({ children, category, title, image }) => {
  return (
    <div className="bg-primar h-96 grid grid-cols-2 grid-rows-1 gap-x-4 p-6 relative">
      <div className="flex flex-col items-start p-10 mb-10 w-full h-64 justify-start overflow-clip">
        <Headings variant="h2" ui="mt-0 mb-0 font-bold">
          {category}
        </Headings>
        <Headings variant="h3" theme="secondary" ui="mt-0 mb-5">
          {title}
        </Headings>
        <p
          className="text-left text-lg
        
        
        "
        >
          {children}
        </p>
      </div>

      <img
        src={image}
        // onDragStart={handleDragStart}
        alt={title}
        className="w-full object-cover bg-primary h-full"
      />
    </div>
  );
};
const run = `        Lorem ipsum dolor sit amet, consectetur adipisc-ing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.fhhhhhfbsdvbeqv dsbvruuenfuhelklo i am youtr freind this is a completer for the text because i nee       sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.fhhhhhfbsdvbeqv dsbvruuenfuhelklo i am youtr freind this is a completer for the text because i nee 
          `;

const items = [
  <Slide
    category=" Evenement à venir"
    title="vivez la demi-finale"
    image={thEvents}
  >
    {run}
  </Slide>,
  <Slide category="New burger" title={"New Burger"} image={Image1}>
    {run}
  </Slide>,
  <Slide
    category="Nouveau hamburger"
    title={"Nouveau Hamburger"}
    image={Image2}
  >
    {run}
  </Slide>,
];
function Event() {
  return (
    <Container>
      <div className="shadow-2xl mb-20 ">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          disableButtonsControls
          autoPlayInterval={4000}
        />
      </div>
    </Container>
  );
}
export default Event;
