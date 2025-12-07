function Button({ children, className, theme, color, handleClick }) {
  let background = "";
  switch (color) {
    case "secondary":
      background = "bg-secondary hover:bg-primary-hover";
      break;
    case "danger":
      background = " bg-red_primary hover:bg-red_primary-hover";
      break;
    default:
      background = "bg-primary hover:bg-red_primary-hover";
  }

  return (
    <>
      {theme && theme == "small" && (
        <button
          onClick={handleClick}
          className={`${background} ${className} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}
        >
          {children}
        </button>
      )}
      {(!theme || theme == "medium") && (
        <button
          onClick={handleClick}
          className={`${background} ${className} px-4 py-3 uppercase shadow-xl text-white text-sm font-medium animate`}
        >
          {children}
        </button>
      )}
      {theme && theme == "big" && (
        <button
          onClick={handleClick}
          className={`${background} ${className} px-8 py-4 uppercase shadow-xl text-white text-base font-medium animate`}
        >
          {children}
        </button>
      )}
    </>
  );
}
export default Button;
