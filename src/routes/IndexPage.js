import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './IndexPage.less';

import ModuleBox from '../components/module-box/ModuleBox';
import EditBox from '../components/edit-box/Editbox';
import OperatorBar from '../components/operator-bar/OperatorBar';
import AttrBox from '../components/attr-box/AttrBox';

function IndexPage() {
  return (
    <div className={styles.contaner}>
      <Row>
        <Col span={6} className={styles.module_box}><ModuleBox /></Col>
        <Col span={18}>
          <Row className={styles.operator_bar}><OperatorBar /></Row>
          <Row>
            <Col span={16} className={styles.edit_box}><EditBox /></Col>
            <Col span={8} className={styles.attr_box}><AttrBox /></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
