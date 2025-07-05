const Input = ({
  labelTxt,
  value,
  inputId,
  type,
  placeholder,
  setState,
  classLabel,
}) => {
  return (
    <label htmlFor={inputId} className={classLabel}>
      {labelTxt && <p>{labelTxt}</p>}
      <input
        id={inputId}
        type={type}
        name={inputId}
        placeholder={placeholder}
        autoComplete="on"
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={value}
      />
    </label>
  );
};

export default Input;
