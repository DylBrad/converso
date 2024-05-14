const Button = ({ children, bg, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg mr-2 mt-2 font-medium text-offwhite ${bg}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
