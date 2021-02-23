import React, { Component } from "react";
import Controls from "./Controls";
// import PropTypes from "prop-types";
class Counter extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  // дефолтные значения (если не передали) и проптайпы
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  // публичное свойство state вместо конструктора
  state = {
    value: this.props.initialValue,
    a: 1,
    b: 2,
  };

  // публичное свойство класса чтобы привязать контекст
  handleIncrement = () => {
    //   перезаписать state поверх начального пишем обїект
    // this.setState({
    //   value: 10,
    // });

    // обновить от предыдущего пишем функцию
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  // console.log(event.target);

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
