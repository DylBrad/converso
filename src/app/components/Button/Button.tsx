interface ButtonProps {
  children: any;
  fontSize: string;
  bg: string;
  txtColor: string;
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({
  children,
  fontSize,
  bg,
  txtColor,
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg mr-2 mt-2 font-${fontSize} ${txtColor} ${bg}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
