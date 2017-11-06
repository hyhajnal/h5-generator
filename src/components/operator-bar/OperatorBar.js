import React from 'react';
import { Button, Icon, Row, Dropdown, Menu } from 'antd';

const menu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">100%</Menu.Item>
    <Menu.Item key="2">75%</Menu.Item>
    <Menu.Item key="3">50%</Menu.Item>
  </Menu>
);

const OperatorBar = () => {
  return (
    <div>
      <Row type="flex" justify="space-between" align="center">
        <Button type="primary" onClick={() => {}}>
          <Icon type={1 > 0 ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Dropdown overlay={menu}>
          <Button>
            100% <Icon type="down" />
          </Button>
        </Dropdown>
        <Button.Group>
          <Button type="primary">
            锁定
          </Button>
          <Button type="primary">
            预览
          </Button>
        </Button.Group>
      </Row>
    </div>
  );
};

export default OperatorBar;
