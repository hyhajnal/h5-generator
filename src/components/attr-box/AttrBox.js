import React from 'react';
import {
  Row, Col,
} from 'antd';

import { getEleByType } from '../../utils/rightHelper';
import dataSource from '../../utils/tableData';
import styles from './AttrBox.css';

const AttrBox = () => (<div className={styles.wrap}>
  {dataSource.map(row =>
    <Row className={styles.row} type="flex" align="middle" key={row.key}>
      <Col span={8} className={styles.title}>{row.title}</Col>
      <Col span={16}>{getEleByType(row)}</Col>
    </Row>,
  )}
</div>);

export default AttrBox;
