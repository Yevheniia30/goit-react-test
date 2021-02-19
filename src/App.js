import Navigation from "./components/Navigation";
import "./components/app.style.css";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Content />
    </div>
  );
};

export default App;
