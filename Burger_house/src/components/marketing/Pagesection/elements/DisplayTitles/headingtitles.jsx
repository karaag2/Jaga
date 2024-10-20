import React from "react";

function HeadingTitles(props) {
  const { children, variant } = props;

  const classDefault =
    "px-7 py-3 bg-primary text-secondary uppercase font-bold inline-block";

  switch (variant) {
    case "h3":
      return (
        <div className="flex items-center justify-center">
          <h3 className={`${classDefault} text-sm`}>{children}</h3>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center">
          <h2 className={`${classDefault} `}>{children}</h2>
        </div>
      );
      break;
  }
}
export default HeadingTitles;
