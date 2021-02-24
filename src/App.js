// import Navigation from "./components/Navigation";
import "./components/app.style.css";
// import Content from "./components/Content";
import ColorPicker from "./components/ColorPicker";
// import Counter from "./components/Counter/Counter";
// import DropDown from "./components/DropDown/DropDown";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF58" },
  { label: "blue", color: "#2196F3" },
  { label: "gray", color: "#60708B" },
  { label: "pink", color: "#E91E63" },
];

const App = () => {
  return (
    <div className="app">
      {/* <h1>Состояние компонента</h1> */}
      {/* <Navigation />
      <Content /> */}
      <ColorPicker options={colorPickerOptions} />
      {/* <Counter initialValue={10} /> */}
      {/* <DropDown /> */}
    </div>
  );
};

export default App;
