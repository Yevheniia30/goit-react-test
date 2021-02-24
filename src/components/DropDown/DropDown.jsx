import React, { Component } from "react";
import s from "./DropDown.module.css";

class DropDown extends Component {
  state = {
    visible: false,
  };

  // если менб видимо, скрываем, если нет - открываем
  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  // метод показывающий меню
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  // скрывающий меню
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;

    return (
      <div className={s.DropDown}>
        {/* вместо двух кнопок делаем одну */}
        <button
          type="button"
          className="button"
          onClick={this.toggle}
          onMouseOver={this.toggle}
          onMouseLeave={this.toggle}
        >
          {visible ? "HIDE" : "SHOW"}
        </button>
        {/* <button className={s.button} onClick={this.show}>
          SHOW
        </button>
        <button className={s.button} onClick={this.hide}>
          HIDE
        </button> */}

        {visible && <div className={s.menu}>Menu</div>}
      </div>
    );
  }
}

export default DropDown;
