import Navigation from "./components/Navigation";
import "./components/app.style.css";
import Content from "./components/Content";
import ColorPicker from "./components/ColorPicker";

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
      <Navigation />
      <Content />
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};

export default App;
