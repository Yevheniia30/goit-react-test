import NewComponent from "../components/Text";
import Header from "../components/Header";
import Form from "../components/Form";

const TestPage = () => {
  const x = 1;
  const sayHello = () => console.log("HELLO");
  return (
    <div>
      <h1>TestPage</h1>
      <Header someNumber={x} age={15} userName="Yevheniia" />
      <Form sayHello={sayHello} />
      <NewComponent>
        <h1>Test</h1>
      </NewComponent>
    </div>
  );
};

export default TestPage;
