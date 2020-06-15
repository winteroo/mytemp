const adminMenuConfig = [{
  label: '数据统计',
  index: '1',
  routerName: 'StatisticsView',
  className: 'auto-icon icon-statistics'
},
{
  label: '日志审计',
  index: '4',
  className: 'auto-icon icon-log-audit',
  childNodes: [{
    routerName: 'BusinessLog',
    label: '业务日志'
  }, {
    routerName: 'OperationLog',
    label: '操作日志'
  }]
}];

export {
  adminMenuConfig
};
