import React, { Component } from "react";
import UserData from "./UserData";

class UserDetailPage extends Component {
  state = {
    firstName: "Yevheniia",
    lastName: "Suska",
    age: 25,
    email: "susskaya86@gmail.com",
    hello: 0,
    inputValue: "1234567",
  };

  handleBtnClick = () => {
    // перезаписіваем
    // this.setState({
    //   lastName: "Baz",
    // });
    // console.log(this.state);
    // добавляем к текущему
    // this.setState((prevState) => {
    //   return {
    //     age: prevState.age + 1,
    //   };
    // });

    //добавляем к hello
    this.setState((prevState) => {
      return {
        hello: prevState.hello + 1,
      };
    });
  };

  // ф-ция записывает значение инпута
  handleInputChange = (event) => {
    console.log(event.target.value);

    this.setState((prevState) => {
      return {
        inputValue: event.target.value,
      };
    });
  };

  render() {
    const { firstName, lastName, age, email, inputValue } = this.state;

    return (
      <div className="user__details">
        <h1 className="user__title">User Details</h1>
        <UserData user={{ firstName, lastName, age, email }} />
        <input
          type="text"
          onChange={this.handleInputChange}
          value={inputValue}
        />
        {/* <p>Hello: {}</p> */}
        <button
          type="button"
          className="user__btn"
          onClick={this.handleBtnClick}
        >
          Load User Data
        </button>
        <p>Hello: {inputValue}</p>
      </div>
    );
  }
}

export default UserDetailPage;
