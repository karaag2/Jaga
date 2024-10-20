import Button from "./Button.jsx";
import Headings from "./DisplayTitles/Headings";

function Burgers(props) {
  return (
    <div className="bg-primry">
      <img
        src={props.img}
        alt="burger appetissant"
        className="w-full h-72 bg-primary"
      />

      <div className="flex flex-col items-center justify-center px-5 py-5">
        <Headings variant="h3">Lorem ipesum dolor</Headings>

        <p className="text-center">
          Lorem ipesum dolor si amet,consectetur, adipiscing elit,sed do
        </p>
        <Button className="font-secondary" theme="big" color="danger">
          Commandez
        </Button>
      </div>
    </div>
  );
}
export default Burgers;
