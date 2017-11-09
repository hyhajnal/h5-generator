import React, { Component } from 'react';
import styles from './Editbox.css';

const wrapStyle = {
  width: `${375 * 0.8}px`,
  height: `${667 * 0.8}px`,
};

class Editbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dragContent: null,
    };
  }

  onDrop = (e) => {
    e.preventDefault();
    const dragContent = e.dataTransfer.getData('Flex');
    this.setState({ dragContent });
  }

  onDragOver = e =>
    e.preventDefault();

  render() {
    return (
      <div
        className={styles.page_wrap}
        id="receive-box" style={wrapStyle}
        onDrop={this.onDrop}
        onDragOver={this.onDragOver}
      >
        <div className={styles.page}>
          {this.state.dragContent}
        </div>
      </div>
    );
  }
}

export default Editbox;
