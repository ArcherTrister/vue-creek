import BigdataTable from './src/table';

/* istanbul ignore next */
BigdataTable.install = function(Vue) {
  Vue.component(BigdataTable.name, BigdataTable);
};

export default BigdataTable;
