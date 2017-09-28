import React from 'react';
import { Button, Icon, Row, Col, Dropdown, Menu } from 'antd';

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
        <Col span={4}>
          <Button type="primary" onClick={() => {}}>
            <Icon type={1 > 0 ? 'menu-unfold' : 'menu-fold'} />
          </Button>
        </Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <Button>
              100% <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col span={16}>
          <Button.Group>
            <Button type="primary">
              新建页面
            </Button>
            <Button type="primary">
              预览
            </Button>
            <Button type="primary">
              发布
            </Button>
          </Button.Group>
        </Col>
      </Row>
    </div>
  );
};

export default OperatorBar;
