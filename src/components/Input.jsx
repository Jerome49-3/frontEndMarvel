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
    <>
      <>
        <label htmlFor={inputId}>{label}</label>
      </>
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
    </>
  );
};

export default Input;
