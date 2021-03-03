// import Navigation from "./components/Navigation";
import React, { Component } from "react";
import "./components/app.style.css";
import Form from "./components/Form";
// import Content from "./components/Content";

// import ColorPicker from "./components/ColorPicker";
// import Counter from "./components/Counter/Counter";
// import DropDown from "./components/DropDown/DropDown";
// import Todolist from "./components/TodoList";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF58" },
//   { label: "blue", color: "#2196F3" },
//   { label: "gray", color: "#60708B" },
//   { label: "pink", color: "#E91E63" },
// ];

class App extends Component {
  // -------------- TODOLIST----------------
  state = {
    contacts: [],

    // todos: [
    //   { id: "id-1", text: "Todo 1", completed: false },
    //   { id: "id-2", text: "Todo 2", completed: true },
    //   { id: "id-3", text: "Todo 3", completed: false },
    //   { id: "id-4", text: "Todo 4", completed: true },
    // ],
  };

  // ф-ция для получения данных введенных в форму
  formOnSubmitHandler = (data) => {
    console.log(data);
  };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  render() {
    // ----------------TODOLIST----------------
    // const { todos } = this.state;

    // const completedTodos = todos.filter((todo) => todo.completed);

    return (
      <div className="app">
        <Form onSubmit={this.formOnSubmitHandler} />

        {/* <h1>Состояние компонента</h1> */}
        {/* <Navigation /> */}
        {/* <Content /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <DropDown /> */}

        {/* <div>
          <span>Quantity: {todos.length}</span>
          <br />
          <span>Quantity of completed: {completedTodos.length}</span>
        </div>

        <Todolist todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </div>
    );
  }
}

export default App;
