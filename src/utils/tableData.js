const tableData = {
  title: {
    name: '标题',
    type: 'string',
    value: '一行两列',
  },
  column: {
    name: '列数',
    type: 'number',
    value: 3,
  },
  bgImg: {
    name: '背景图片',
    type: 'image',
    value: '',
  },
  select: {
    name: '下拉框',
    type: 'select',
    value: '1',
    option: [{ 1: '1' }, { 2: '2' }, { 3: '3' }],
  },
  switch: {
    name: '开启',
    type: 'switch',
    value: false,
  },
  padding: {
    name: '内边距',
    type: 'padding',
    value: [1, 2, 3, 4],
  },
  margin: {
    name: '外边距',
    type: 'margin',
    value: [1, 2, 3, 4],
  },
  bgColor: {
    name: '背景色',
    type: 'color',
    value: '',
  },
  widthHeight: {
    name: '宽高',
    type: 'width-height',
    value: [300, 200],
  },
  border: {
    name: '边框',
    type: 'border',
    value: '',
  },
};

const dataSource = [];
Object.keys(tableData).forEach((key) => {
  const obj = tableData[key];
  dataSource.push({
    key,
    title: obj.name,
    type: obj.type,
    value: obj.value,
    option: obj.option || null,
  });
});

export default dataSource;
