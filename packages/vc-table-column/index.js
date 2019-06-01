import VcTableColumn from '../big-data-table/src/vc-table-column';

/* istanbul ignore next */
VcTableColumn.install = function(Vue) {
  Vue.component(VcTableColumn.name, VcTableColumn);
};

export default VcTableColumn;
