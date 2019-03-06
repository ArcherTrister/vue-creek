import VcForm from './src/form';

/* istanbul ignore next */
VcForm.install = function(Vue) {
  Vue.component(VcForm.name, VcForm);
};

export default VcForm;
