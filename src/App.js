import NewComponent from "./components/Text";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const x = 7523015632;

  const sayHello = () => console.log("Hello");
  return (
    //   общий родитель, например div
    <div className="App">
      <Header someNumber={x} userName="Yevheniia" />
      <Form sayHello={sayHello} />
      <NewComponent>
        <h1>Test</h1>
      </NewComponent>
    </div>
  );
}

export default App;
