// /**
//  * 右边侧栏帮助方法
//  */

import React from 'react';
import {
  Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Input,
  Row, Col,
} from 'antd';
import ColorPicker from '../components/color-picker/ColorPicker';

const Option = Select.Option;
const RadioGroup = Radio.Group;
// 图片上传
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      // message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      // message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const getEleByType = ({ type, value, key, index, onChange, option }) => {
  let ele = null;
  switch (type) {
    case 'string':
      ele = (
        <Input
          value={value}
          onChange={e => onChange({ key, index, value: e.target.value })}
        />
      );
      break;
    case 'number':
      ele = (
        <InputNumber
          min={1}
          max={10}
          defaultValue={3}
          onChange={number => onChange({ key, index, value: number })}
        />
      );
      break;
    case 'select':
      // console.log(option);
      ele = (
        <div>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={select => onChange({ key, index, value: select })}
          >
            {
              option.map(item => <Option value={item.value}>{item.key}</Option>)
            }
          </Select>
        </div>
      );
      break;
    case 'image':
      ele = (
        <Upload {...props}>
          <Button>
            <Icon type="upload" />点击上传图片
          </Button>
        </Upload>
      );
      break;
    case 'radio':
      ele = (
        <RadioGroup
          onChange={e => onChange({ key, index, value: e.target.value })}
          value={value}
        >
          { option.map(item => <Radio value={item.value}>{item.key}</Radio>) }
        </RadioGroup>
      );
      break;
    case 'switch':
      ele = (
        <Switch
          defaultChecked={value}
          onChange={checked => onChange({ key, index, value: checked })}
        />
      );
      break;
    case 'slider':
      ele = (
        <Slider
          defaultChecked={value}
          onChange={slider => onChange({ key, index, value: slider })}
        />
      );
      break;
    case 'padding':
      ele = (
        <Row gutter={16}>
          {[0, 1, 2, 3].map(i =>
            <Col className="gutter-row" span={6} key={i}>
              <Input
                value={value[i]}
                onChange={() => {}}
              />
            </Col>)
          }
        </Row>
      );
      break;
    case 'margin':
      ele = (
        <Row gutter={16}>
          {[0, 1, 2, 3].map(i =>
            <Col className="gutter-row" span={6}>
              <Input
                value={value[i]}
                key={i}
                onChange={() => {}}
              />
            </Col>)
          }
        </Row>
      );
      break;
    case 'width-height':
      ele = (
        <Row gutter={16}>
          {[0, 1].map(i =>
            <Col className="gutter-row" span={6} key={i}>
              <Input
                value={value[i]}
                onChange={() => {}}
              />
            </Col>)
          }
        </Row>
      );
      break;
    case 'color':
      ele = (<ColorPicker />);
      break;
    case 'border':
      ele = (
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Input
              value={value[0]}
              onChange={() => {}}
            />
          </Col>
          <Col className="gutter-row" span={8}>
            <ColorPicker />
          </Col>
          <Col className="gutter-row" span={8}>
            <Select
              defaultValue="solid"
              onChange={select => onChange({ key, index, value: select })}
            >
              <Option value="solid">实线</Option>
              <Option value="dash">虚线</Option>
            </Select>
          </Col>
        </Row>
      );
      break;
    default:
      ele = (
        <Input
          value={value}
          onChange={e => onChange({ key, index, value: e.target.value })}
        />
      );
      break;

  }
  return ele;
};
