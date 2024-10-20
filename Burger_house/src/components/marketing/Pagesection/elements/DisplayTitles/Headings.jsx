export default function Headings(props) {
  const {
    variant,
    children,
    theme, //style
    display, //colors
  } = props;
  const classDefault = "my-5 text-secondary uppercase";
  let font, color;
  switch (theme) {
    case "secondary":
      font = "font-secondary";

      break;
    default:
      font = "tracking-tighter";

      break;
  }
  switch (display) {
    case "gray":
      color = "text-gray-500";
      break;
    default:
      color = "text-secondary";
      break;
  }
  switch (variant) {
    case "h3":
      return (
        <div className="flex items-center justify-center">
          <h3 className={`${classDefault} ${font} ${color} text-2xl`}>
            {children}
          </h3>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center">
          <h2
            className={`${
              theme === "secondary" ? "text-5xl" : "text-3xl"
            } ${classDefault} ${font}  ${color}`}
          >
            {children}
          </h2>
        </div>
      );
  }
}
