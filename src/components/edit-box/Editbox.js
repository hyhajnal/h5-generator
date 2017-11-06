import React, { Component } from 'react';
import { Button, Popover } from 'antd';
import Sortable from 'sortablejs';
import { WhiteSpace } from 'antd-mobile';
import { LayoutFlex, FlexWrap } from '../../moduleLib/layout/Flex';
import styles from './Editbox.css';

const PlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: '1rem',
      lineHeight: '1rem',
      width: '100%',
    }}
    {...props}
  >Item</div>
);

const actionBar = (
  <div className={styles.action_bar}>
    <Button type="primary" shape="circle" icon="appstore-o" size="small" />
    <Button type="primary" shape="circle" icon="close" size="small" />
  </div>
);

const wrapStyle = {
  width: `${375 * 0.8}px`,
  height: `${667 * 0.8}px`,
};

class Editbox extends Component {

  componentDidMount() {
    Sortable.create(document.getElementById('receive-box'), {
      group: {
        name: 'receive-box',
        put: ['mod0', 'mod1'],
      },
    });
  }

  render() {
    return (
      <div className={styles.page_wrap} id="receive-box" style={wrapStyle}>
        <div className={styles.page}>
          <LayoutFlex key="2">
            <FlexWrap key="21">
              <PlaceHolder />
            </FlexWrap>
            <FlexWrap key="22">
              <PlaceHolder />
            </FlexWrap>
          </LayoutFlex>
          <WhiteSpace size="lg" />
          <LayoutFlex key="3">
            <FlexWrap key="31">
              <PlaceHolder />
            </FlexWrap>
            <FlexWrap key="32">
              <PlaceHolder />
            </FlexWrap>
            <FlexWrap key="22">
              <PlaceHolder />
            </FlexWrap>
          </LayoutFlex>
          <WhiteSpace size="lg" />
          <Popover content={actionBar}>
            <Button type="primary" className="btn">按钮</Button>
          </Popover>
        </div>
      </div>
    );
  }
}

export default Editbox;
