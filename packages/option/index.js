import VcOption from '../select/src/option';

/* istanbul ignore next */
VcOption.install = function(Vue) {
  Vue.component(VcOption.name, VcOption);
};

export default VcOption;
