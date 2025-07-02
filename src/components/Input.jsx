const Input = ({
  label,
  value,
  inputId,
  type,
  placeholder,
  setState,
  autocomplete,
}) => {
  return (
    <label htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        type={type}
        name={inputId}
        placeholder={placeholder}
        autoComplete={autocomplete}
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={value}
      />
    </label>
  );
};

export default Input;
