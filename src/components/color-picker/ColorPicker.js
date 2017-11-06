import React from 'react';
import { SketchPicker } from 'react-color';
import styles from './ColorPicker.css';

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  render() {
    const colorStyle = { background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})` };

    return (
      <div>
        <div className={styles.swatch} onClick={this.handleClick}>
          <div style={colorStyle} className={styles.color} />
        </div>
        { this.state.displayColorPicker ? <div className={styles.popover}>
          <div className={styles.cover} onClick={this.handleClose} />
          <SketchPicker color={this.state.color} onChange={this.handleChange} />
        </div> : null }

      </div>
    );
  }
}

export default ColorPicker;
