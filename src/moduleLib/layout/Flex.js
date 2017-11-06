import React, { Component } from 'react';
import { Flex } from 'antd-mobile';

class LayoutFlex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Flex>
        {
          children.length > 0 && children.map((child, i) =>
            <Flex.Item key={i}>{child}</Flex.Item>)
        }
      </Flex>
    );
  }
}

class FlexWrap extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

export { LayoutFlex, FlexWrap };
