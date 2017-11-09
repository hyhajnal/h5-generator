import React from 'react';
import { Row } from 'antd';
import styles from './Layout.css';
import FLEX_IMG from '../../../image/flex.png';
import GRID_IMG from '../../../image/grid.png';
import LIST_IMG from '../../../image/list.png';

const onDrag = ev =>
  ev.dataTransfer.setData('Flex', 'flex');

const Layout = () => (
  <div className={styles.wrap}>
    <Row className={styles.title}>等分排列</Row>
    <div onDragStart={onDrag} draggable="true">
      <img src={FLEX_IMG} alt="flex" width="100%" />
    </div>
    <Row className={styles.title}>网格排列</Row>
    <Row>
      <img src={GRID_IMG} alt="flex" width="100%" />
    </Row>

    <Row className={styles.title}>列表布局</Row>
    <Row>
      <img src={LIST_IMG} alt="flex" width="100%" />
    </Row>
  </div>
);

export default Layout;

