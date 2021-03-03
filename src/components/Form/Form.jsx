import React, { Component } from "react";
import shortid from "shortid";

// import s from "./Form.module.css";

class Form extends Component {
  state = {
    // стейты инпута  в компоненте формы, потому что в АПП они не нужні до ее сабмита
    name: "",
    number: "",
    experience: "Junior",
    licence: false,
    // nameInputId: shortid.generate(),
    // numberInputId: shortid.generate(),
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  // функция для изменения инпутов в компоненете формы
  handleChange = (event) => {
    // паттерн для применения одного обработчика на несколько инпутов
    // в форме stete всегда от предідущего поэтому пишем объект setState
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  // ф-ция сабмита в компонете формы
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
    // console.log(this.state);
  };

  // очистка формы после сабмита
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  // ф-ция для чекбокса
  handleChacked = (event) => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <p>Your level:</p>
        <label htmlFor="">
          Junior
          <input
            type="radio"
            name="experience"
            value="Junior"
            onChange={this.handleChange}
            checked={this.state.experience === "Junior"}
          />
        </label>
        <label htmlFor="">
          Middle
          <input
            type="radio"
            name="experience"
            value="Middle"
            onChange={this.handleChange}
            checked={this.state.experience === "Middle"}
          />
        </label>
        <label htmlFor="">
          Senior
          <input
            type="radio"
            name="experience"
            value="Senior"
            onChange={this.handleChange}
            checked={this.state.experience === "Senior"}
          />
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleChacked}
          />{" "}
          Agree
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
