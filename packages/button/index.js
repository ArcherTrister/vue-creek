import VcButton from './src/button';

/* istanbul ignore next */
VcButton.install = function(Vue) {
  Vue.component(VcButton.name, VcButton);
};

export default VcButton;
