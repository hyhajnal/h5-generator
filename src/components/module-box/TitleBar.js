import React from 'react';
import { Row, Col, Icon } from 'antd';
import styles from './TitleBar.css';

export const TitleBar = () => (
  <Row className={styles.wrap} type="flex" justify="center" align="middle">
    <Col span={4}><Icon type="rocket" /></Col>
    <Col span={8}>测试页面</Col>
  </Row>
);

