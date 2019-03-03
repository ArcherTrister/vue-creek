import VcTag from './src/tag';

/* istanbul ignore next */
VcTag.install = function(Vue) {
  Vue.component(VcTag.name, VcTag);
};

export default VcTag;
