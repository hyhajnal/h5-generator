import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs } from 'antd';
import styles from './IndexPage.less';

import ModuleBox from '../components/module-box/ModuleBox';
import EditBox from '../components/edit-box/Editbox';
import OperatorBar from '../components/operator-bar/OperatorBar';
import AttrBox from '../components/attr-box/AttrBox';
import TreeLine from '../components/attr-box/Tree';
import PageInfo from '../components/attr-box/PageInfo';

const TabPane = Tabs.TabPane;

function IndexPage() {
  return (
    <div className={styles.contaner}>
      <Row>
        <Col span={5} className={styles.module_box}><ModuleBox /></Col>
        <Col span={13}>
          <Row className={styles.operator_bar}><OperatorBar /></Row>
          <Row className={styles.edit_box}><EditBox /></Row>
        </Col>
        <Col span={6}>
          <Row className={styles.attr_box} id="attr_tab">
            <Tabs defaultActiveKey="4" className={styles.attr_tab}>
              <TabPane tab="属性" key="4"><AttrBox /></TabPane>
              <TabPane tab="页面信息" key="5"><PageInfo /></TabPane>
              <TabPane tab="页面结构树" key="6"><TreeLine /></TabPane>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
