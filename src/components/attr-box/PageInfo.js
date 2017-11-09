import React, { Component } from 'react';
import { Row, Col, Input, Cascader } from 'antd';
import styles from './AttrBox.css';
import ColorPicker from '../color-picker/ColorPicker';

const options = [{
  value: '项目一',
  label: '项目一',
  children: [{
    value: '分支一',
    label: '分支一',
  }],
}, {
  value: '项目二',
  label: '项目二',
  children: [{
    value: '分支一',
    label: '分支一',
  }, {
    value: '分支二',
    label: '分支二',
  }],
}];

class PageInfo extends Component {
  render() {
    return (
      <div>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>页面标题</Col>
          <Col span={16}><Input /></Col>
        </Row>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>页面背景色</Col>
          <Col span={16}><ColorPicker /></Col>
        </Row>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>所属项目</Col>
          <Col span={16}>
            <Cascader options={options} onChange={() => {}} placeholder="选择所属分类" />
          </Col>
        </Row>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>创建者</Col>
          <Col span={16}><Input /></Col>
        </Row>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>参与的小伙伴</Col>
          <Col span={16}><Input /></Col>
        </Row>
        <Row className={styles.row} type="flex" align="middle">
          <Col span={8} className={styles.title}>创建时间</Col>
          <Col span={16}>2017-11-06</Col>
        </Row>
      </div>
    );
  }
}

export default PageInfo;
