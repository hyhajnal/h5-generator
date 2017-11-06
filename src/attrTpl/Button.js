export const tableData = {
  data: [{
    key: 'title',
    title: {
      value: '标题',
    },
    value: {
      type: 'string',
      editable: true,
      value: '按钮',
    },
  },
  {
    key: 'text',
    title: {
      value: '按钮文案',
    },
    value: {
      type: 'string',
      editable: true,
      value: '测试按钮',
    },
  },
  {
    key: 'size',
    title: {
      value: '按钮大小',
      data: ['large', 'small'],
    },
    value: {
      type: 'select',
      editable: true,
      value: 'large',
    },
  },
  {
    key: 'disabled',
    title: {
      value: '设置禁用',
    },
    value: {
      type: 'switch',
      editable: true,
      value: false,
    },
  },
  {
    key: '5',
    title: {
      value: 'padding',
    },
    value: {
      type: 'slider',
      editable: true,
      value: 5,
    },
  }],
};
