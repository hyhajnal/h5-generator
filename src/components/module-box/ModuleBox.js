import React, { Component } from 'react';
import { Tabs } from 'antd';
// import Sortable from 'sortablejs';
import { TitleBar } from './TitleBar';
import MLayout from './Layout';
import MComponent from './Component';

const TabPane = Tabs.TabPane;

class ModuleBox extends Component {
  state = {
    collapsed: false,
  }

  // componentDidMount() {
  //   const doms = document.getElementsByClassName('ant-menu-sub');
  //   for (let i = 0; i < 3; i += 1) {
  //     Sortable.create(doms[i], {
  //       group: {
  //         name: `mod${i}`,
  //         pull: 'clone',
  //         revertClone: true,
  //       },
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        <TitleBar />
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="布局" key="1"><MLayout /></TabPane>
          <TabPane tab="组件" key="2"><MComponent /></TabPane>
          <TabPane tab="模块" key="3">模块</TabPane>
          <TabPane tab="自定义模块" key="4">自定义模块</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ModuleBox;
