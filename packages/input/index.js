import VcInput from './src/input';

/* istanbul ignore next */
VcInput.install = function(Vue) {
  Vue.component(VcInput.name, VcInput);
};

export default VcInput;
