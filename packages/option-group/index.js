import VcOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
VcOptionGroup.install = function(Vue) {
  Vue.component(VcOptionGroup.name, VcOptionGroup);
};

export default VcOptionGroup;
