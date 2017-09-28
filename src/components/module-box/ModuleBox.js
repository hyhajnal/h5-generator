import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class ModuleBox extends Component {
  state = {
    collapsed: false,
  }

  render() {
    return (
      <div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>布局</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>组件</span></span>}>
            <Menu.Item key="9">文字</Menu.Item>
            <Menu.Item key="10">图片</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="mail" /><span>模块</span></span>}>
            <Menu.Item key="1">Option 5</Menu.Item>
            <Menu.Item key="2">Option 6</Menu.Item>
            <Menu.Item key="3">Option 7</Menu.Item>
            <Menu.Item key="4">Option 8</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub6">
            <Icon type="pie-chart" />
            <span>模版</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>自定义</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default ModuleBox;
