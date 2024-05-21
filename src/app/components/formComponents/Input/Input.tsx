interface InputProps {
  fieldName: string;
  children: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ fieldName, children, register }) => {
  return (
    <div className="form-input">
      <label htmlFor={fieldName}>{children}</label>
      <input {...register(fieldName)} />
    </div>
  );
};

export default Input;
