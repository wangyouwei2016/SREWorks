import icon from './icon.svg'
export default {
  id: 'HoverableCard',
  type: 'HoverableCard',
  name: 'HoverableCard',
  title: '简版图片卡片',
  info: {
    author: {
      name: '',
      url: '',
    },
    description: '简版图片卡片，用于页面中部描述性说明',
    links: [],
    logos: {
      large: '',
      small: icon,
      fontClass: 'HoverableCard',
    },
    build: {
      time: '',
      repo: '',
      branch: '',
      hash: '',
    },
    screenshots: [],
    updated: '',
    version: '',
    docs: "<a target='_blank' href='https://3x.ant.design/components/alert-cn/'>组件文档地址</a>",
  },
  state: '',
  latestVersion: '1.0',
  configSchema: {
    defaults: {
      type: 'HoverableCard',
      config: {
        message: '动态专题介绍组件',
        showIcon: false,
        alertType: 'success',
        closable: false,
        closeText: '关闭',
        icon: '',
        description: '动态专题介绍组件',
      },
    },
    schema: {
      type: 'object',
      properties: {
        backgroundImg: {
          description: '背景图片',
          title: '背景图片',
          required: false,
          type: 'string',
          'x-component': 'ImageUpload',
          initValue: '',
        },
        cardTitle: {
          description: '栏目标题',
          title: '标题',
          required: false,
          type: 'string',
          'x-component': 'Input',
        },
        cardContent: {
          description: '栏目正文描述内容',
          title: '描述',
          required: true,
          'x-component': 'Text',
          type: 'string',
        },
        cardWidth: {
          description: '卡片宽度',
          title: '卡片宽度',
          required: false,
          type: 'string',
          initValue: '240',
          'x-component': 'Input',
        },
        cardHeight: {
          description: '卡片高度',
          title: '卡片高度',
          required: false,
          type: 'string',
          'x-component': 'Input',
        },
        bordered: {
          description: '默认有边框，选择否则隐藏',
          title: '是否展示边框',
          required: false,
          'x-component': 'Switch',
          initValue: false,
          type: 'string',
        },
        cardActions: {
          description: 'JSXrender，此处可以填写一个或一组超链接',
          title: '更多操作',
          required: true,
          'x-component': 'Text',
          initValue: '<a href="#">详情</a>',
          type: 'string',
        },
      },
    },
    dataMock: {},
  },
  category: 'staticComp',
}
