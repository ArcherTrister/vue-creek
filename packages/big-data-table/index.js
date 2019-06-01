import BigDataTable from './src/table';

/* istanbul ignore next */
BigDataTable.install = function(Vue) {
  Vue.component(BigDataTable.name, BigDataTable);
};

export default BigDataTable;
