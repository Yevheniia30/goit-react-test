import React, { Component } from "react";
import s from "./ColorPicker.module.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    return (
      <div className={s.ColorPicker}>
        <h2 className={s.title}>Color Picker</h2>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            // const optionClasses = ["{s.button}"];
            // if (index === this.state.activeOptionIdx) {
            // optionClasses.push("{s.active}");
            // }

            return (
              <button
                key={label}
                className={
                  s.button +
                  " " +
                  (index === this.state.activeOptionIdx && s.active)
                }
                style={{ backgroundColor: color }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
