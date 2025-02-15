/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : helloqian12138 (johnhello12138@163.com)
 * @modifier : helloqian12138 (johnhello12138@163.com)
 * @copyright: Copyright (c) 2020 JD Network Technology Co., Ltd.
 */
import { StyleAttrConfigs } from '@/table-components/configs';
import { DTGComponentPropertySchema } from '@/typing';

const AlignConfigs = {
  'ui:type': 'select',
  'ui:props': {
    options: [
      { label: '左对齐', value: 'flex-start' },
      { label: '右对齐', value: 'flex-end' },
      { label: '居中对齐', value: 'center' },
      { label: '两端对齐', value: 'space-between' },
      { label: '等间对齐', value: 'space-around' },
    ],
  },
};

const SlotItemConfigs = [
  {
    name: 'type',
    'ui:title': '类型',
    'ui:type': 'select',
    'ui:props': {
      style: { width: 160 },
      options: [
        { label: '列展示筛选器', value: 'display-column-selector' },
        { label: '空白栏', value: 'spacer' },
        { label: '文本框', value: 'text' },
        { label: '自定义插槽', value: 'slot' },
        { label: '搜索框', value: 'search' },
        { label: '添加按钮', value: 'insert-button' },
        { label: '布局模式', value: 'layout-selector' },
      ],
    },
  },
  {
    name: 'selectorButtonType',
    'ui:title': '列选择器按钮类型',
    'ui:type': 'radio',
    'ui:props': {
      mode: 'button',
      buttonStyle: 'solid',
      options: [
        { label: '主按钮', value: 'primary' },
        { label: '虚线按钮', value: 'dashed' },
      ],
    },
    'ui:layout': { labelCol: 8, wrapperCol: 14 },
    type: 'string',
    default: 'primary',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'display-column-selector',
  },
  {
    name: 'selectorButtonText',
    'ui:title': '列选择器按钮名称',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入按钮名称',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 14 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'display-column-selector',
  },
  {
    name: 'style.width',
    'ui:title': '宽度',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入宽度',
    },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'spacer',
  },
  {
    name: 'slot',
    'ui:title': '插槽名称',
    'ui:type': 'select',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请选择插槽名称',
      optionsParam: '$$SLOT_NAME_OPTIONS$$',
    },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'slot',
  },
  {
    name: 'text',
    'ui:title': '标题名称',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入标题名称',
    },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'text',
  },
  {
    name: 'align',
    'ui:title': '对齐方式',
    ...AlignConfigs,
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
  },
  {
    name: 'span',
    'ui:title': '跨度',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入"1-24", 或者"flex-auto"',
    },
    type: 'string',
  },
  {
    name: 'visible',
    'ui:title': '是否可见',
    'ui:type': 'switch',
    'ui:props': {
      checkedChildren: '是',
      unCheckedChildren: '否',
    },
    type: 'boolean',
  },
  {
    name: 'wrapperStyle.width',
    'ui:title': '搜索框宽度',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入宽度',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'placeholder',
    'ui:title': '搜索框提示语',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入提示语',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'allowClear',
    'ui:title': '支持清空',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'searchButtonText',
    'ui:title': '搜索按钮文本',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'searchKeys',
    'ui:title': '搜索分类过滤',
    'ui:type': 'array-list',
    'ui:props': {
      mode: 'narrow',
      items: [
        {
          name: 'label',
          'ui:layout': { labelCol: 6, wrapperCol: 18 },
          'ui:title': '文案',
          'ui:type': 'input',
          default: '',
        },
        {
          name: 'value',
          'ui:layout': { labelCol: 6, wrapperCol: 18 },
          'ui:title': '值',
          'ui:type': 'input',
          default: '',
        },
      ],
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'array',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'searchKeyDefaultValue',
    'ui:title': '默认搜索维度',
    'ui:type': 'input',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请输入搜索维度',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'search',
  },
  {
    name: 'insertButtonText',
    'ui:title': '添加按钮文案',
    'ui:type': 'input',
    'ui:props': {
      placeholder: '请输入',
    },
    'ui:layout': { labelCol: 8, wrapperCol: 16 },
    type: 'string',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'insert-button',
  },
  {
    name: 'showIcon',
    'ui:title': '展示图标',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    visible: (value: string, formData?: Record<string, unknown>) => formData?.type === 'insert-button',
  },
];

const HeaderAttrConfigs: DTGComponentPropertySchema[] = [
  {
    name: 'header',
    group: '头部设置',
    'ui:title': '展示头部',
    'ui:type': 'switch',
    'ui:layout': {
      labelCol: 6,
      wrapperCol: 18,
    },
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'header.items',
    group: '头部设置',
    'ui:title': '头部插槽配置',
    'ui:type': 'array-list',
    'ui:layout': {
      labelCol: 24,
      wrapperCol: 24,
    },
    'ui:props': {
      mode: 'narrow',
      items: [...SlotItemConfigs],
    },
    type: 'boolean',
    default: false,
    visible: (value: unknown, formData?: Record<string, unknown>) => !!formData?.header,
  },
];

const FooterAttrConfigs: DTGComponentPropertySchema[] = [
  {
    name: 'footer',
    group: '底部设置',
    'ui:title': '展示底部',
    'ui:type': 'switch',
    'ui:layout': {
      labelCol: 6,
      wrapperCol: 18,
    },
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'footer.items',
    group: '底部设置',
    'ui:title': '底部插槽配置',
    'ui:type': 'array-list',
    'ui:layout': {
      labelCol: 24,
      wrapperCol: 24,
    },
    'ui:props': {
      items: [...SlotItemConfigs],
    },
    type: 'boolean',
    default: false,
    visible: (value: unknown, formData?: Record<string, unknown>) => !!formData?.footer,
  },
];

const PaginationAttrConfigs: DTGComponentPropertySchema[] = [
  {
    name: 'pagination',
    group: '分页配置',
    'ui:title': '展示分页',
    'ui:type': 'switch',
    'ui:layout': {
      labelCol: 6,
      wrapperCol: 18,
    },
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'pagination.position',
    group: '分页配置',
    'ui:title': '分页位置',
    'ui:type': 'radio',
    'ui:props': {
      options: [
        { label: '左上角', value: 'topLeft' },
        { label: '正上方', value: 'topCenter' },
        { label: '右上角', value: 'topRight' },
        { label: '左下角', value: 'bottomLeft' },
        { label: '正下方', value: 'bottomCenter' },
        { label: '右下角', value: 'bottomRight' },
      ],
    },
    type: 'string',
    default: 'bottomRight',
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
  {
    name: 'pagination.size',
    group: '分页配置',
    'ui:title': '分页器尺寸',
    'ui:type': 'radio',
    'ui:props': {
      options: [
        { label: '默认', value: 'default' },
        { label: '小号', value: 'small' },
      ],
    },
    type: 'string',
    default: 'default',
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
  {
    name: 'pagination.pageSize',
    group: '分页配置',
    'ui:title': '每页行数',
    'ui:type': 'number',
    'ui:props': {
      placeholder: '请输入',
    },
    type: 'number',
    minimum: 1,
    default: 10,
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
  {
    name: 'pagination.showTotal',
    group: '分页配置',
    'ui:title': '展示总条目',
    'ui:type': 'input',
    'ui:description': {
      type: 'icon',
      trigger: 'hover',
      title: '输入文本，总条目用 `{{total}}` 替换',
    },
    'ui:props': {
      placeholder: '请输入',
    },
    type: 'string',
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
  {
    name: 'pagination.showQuickJumper',
    group: '分页配置',
    'ui:title': '展示快速跳转',
    'ui:type': 'switch',
    'ui:description': {
      type: 'icon',
      trigger: 'hover',
      title: '是否可以快速跳转至某页',
    },
    'ui:props': {},
    type: 'boolean',
    default: false,
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
  {
    name: 'pagination.showSizeChanger',
    group: '分页配置',
    'ui:title': '展示切换器',
    'ui:description': {
      type: 'text',
      trigger: 'hover',
      title: '是否展示 pageSize 切换器，当 total 大于 50 时默认为 true',
    },
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
    visible: (value: unknown, formData?: Record<string, unknown>) => formData?.pagination === true,
  },
];

export const GlobalAttrFormConfigs: DTGComponentPropertySchema[] = [
  {
    name: 'size',
    group: '全局属性',
    'ui:title': '表格尺寸',
    'ui:type': 'radio',
    'ui:props': {
      mode: 'button',
      buttonStyle: 'solid',
      options: [
        { label: '大号', value: 'large' },
        { label: '中等', value: 'middle' },
        { label: '小号', value: 'small' },
      ],
    },
    type: 'string',
    default: 'middle',
  },
  {
    name: 'bordered',
    group: '全局属性',
    'ui:title': '展示边框',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'sticky',
    group: '全局属性',
    'ui:title': '冻结表头',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'rowSelection',
    group: '全局属性',
    'ui:title': '行是否可选择',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'editable',
    group: '全局属性',
    'ui:title': '允许编辑表格',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'virtual',
    group: '全局属性',
    'ui:title': '进入虚拟列表',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'tableLayout',
    group: '全局属性',
    'ui:title': '表格布局',
    'ui:type': 'radio',
    'ui:props': {
      mode: 'button',
      buttonStyle: 'solid',
      options: [
        { label: '自动布局', value: 'auto' },
        { label: '固定布局', value: 'fixed' },
      ],
    },
    type: 'string',
  },
  {
    name: 'stripe',
    group: '全局属性',
    'ui:title': '间隔斑马纹',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  {
    name: 'rowSlotKey',
    group: '全局属性',
    'ui:title': '行插槽名称',
    'ui:type': 'select',
    'ui:props': {
      style: { width: '100%' },
      placeholder: '请选择行插槽名称',
      optionsParam: '$$SLOT_NAME_OPTIONS$$',
    },
    type: 'string',
  },
  ...HeaderAttrConfigs,
  ...PaginationAttrConfigs,
  ...FooterAttrConfigs,
  {
    name: 'scrollX',
    group: '全局样式',
    'ui:title': '水平滚动宽度限制',
    'ui:type': 'number',
    'ui:props': {
      min: 1,
    },
    'ui:layout': { labelCol: 8, wrapperCol: 14 },
    type: 'number',
  },
  {
    name: 'scrollY',
    group: '全局样式',
    'ui:title': '垂直滚动高度限制',
    'ui:type': 'number',
    'ui:props': {
      min: 1,
    },
    'ui:layout': { labelCol: 8, wrapperCol: 14 },
    type: 'number',
  },
  {
    name: 'rowHeader',
    group: '行头部配置',
    'ui:title': '展示每行头部',
    'ui:type': 'switch',
    'ui:layout': {
      labelCol: 6,
      wrapperCol: 18,
    },
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  ...StyleAttrConfigs('rowHeaderStyle', '行头部配置', {
    visible: (v, formData) => !!formData?.rowHeader,
  }),
  {
    name: 'rowHeader.items',
    group: '行头部配置',
    'ui:title': '行头部插槽',
    'ui:type': 'array-list',
    'ui:layout': {
      labelCol: 24,
      wrapperCol: 24,
    },
    'ui:props': {
      mode: 'narrow',
      items: [...SlotItemConfigs],
    },
    type: 'boolean',
    default: false,
    visible: (v, formData) => !!formData?.rowHeader,
  },
  {
    name: 'innerStyle',
    group: '全局样式',
    'ui:title': '自定义全局样式',
    'ui:type': 'switch',
    'ui:props': {},
    type: 'boolean',
    default: false,
  },
  ...StyleAttrConfigs('innerStyle', '全局样式', {
    visible: (v, formData) => !!formData?.innerStyle,
  }),
];
