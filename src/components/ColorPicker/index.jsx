import "./styles.css";

const ColorPicker = ({ options }) => {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {options.map((option, index) => (
          // инлайн стили
          <span
            key={index}
            className="ColorPicker__option"
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
      <button onClick={(event) => console.log(event)}>Click me!</button>
    </div>
  );
};

export default ColorPicker;
