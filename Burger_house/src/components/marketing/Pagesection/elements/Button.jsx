function Button({ children, className, type }) {
  {
    type ? 1 : 0;
  }

  return (
    <button
      className={`${className}  px-5 py-2 uppercase shadow-xl tracking-widest text-sm text-white font-medium animate mx-2"`}
    >
      {children}
    </button>
  );
}
export default Button;
