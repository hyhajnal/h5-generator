
export default {

  namespace: 'page',

  state: {
    id: 'PAGE1', // 页面id
    name: '测试页面',

    pageContent: ['MOD0', 'MOD1', 'MOD2'],
    modList: {
      MOD0: {
        type: 'Flex',
        attr: [],
        parent: null,
        childs: ['MOD1', 'MOD3'],
      },
      MOD1: {
        type: 'Button',
        attr: [],
        parent: null,
        childs: null,
      },
      MOD2: {
        type: 'Grid',
        attr: [],
        parent: null,
        childs: [],
      },
      MOD3: {
        type: 'Button',
        attr: [],
        parent: null,
        childs: null,
      },
    },
    editNow: 'MOD0', // 当前编辑的模块
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
