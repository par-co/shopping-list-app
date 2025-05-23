import "./Input.css";
import { v4 as uuidv4 } from "uuid";

export default function Input({
  labelText,
  placeholder,
  inputValue,
  handleChange,
  handleEnter,
  handleClickAddBtn,
}) {
  const labelAndInputId = uuidv4();

  return (
    <div className="input-component">
      <label className="adding-item-label" htmlFor={labelAndInputId}>
        {labelText}
      </label>
      <div className="input-and-btn">
        <input
          className="adding-item-text"
          id={labelAndInputId}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleEnter}
        />
        <button className="adding-item-btn" onClick={handleClickAddBtn}>
          Add
        </button>
      </div>
    </div>
  );
}
