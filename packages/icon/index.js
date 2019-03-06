import VcIcon from './src/icon.vue';

/* istanbul ignore next */
VcIcon.install = function(Vue) {
  Vue.component(VcIcon.name, VcIcon);
};

export default VcIcon;
