interface InputProps {
  fieldName: string;
  children: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ fieldName, children, register }) => {
  return (
    <div className="form-input">
      <input {...register(fieldName)} className="my-1 w-full rounded border" />
      <label htmlFor={fieldName} className="text-xs mt-0 mb-6">
        {children}
      </label>
    </div>
  );
};

export default Input;
