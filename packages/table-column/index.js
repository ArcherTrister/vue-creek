import VcTableColumn from '../bigdata-table/src/table-column';

/* istanbul ignore next */
VcTableColumn.install = function(Vue) {
  Vue.component(VcTableColumn.name, VcTableColumn);
};

export default VcTableColumn;
