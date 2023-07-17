interface InputTypeProps {
  type: string;
  label: string;
  name: string;
  id?: string;
  placeholder?: string;
  labelClassName?: string;
  // additional props if needed
}

const InputType = ({
  type,
  label,
  name,
  id,
  placeholder,
  labelClassName,
  ...rest
}: InputTypeProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default InputType;
