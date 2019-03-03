/* Automatically generated by './build/bin/build-entry.js' */

import BigdataTable from '../packages/bigdata-table/index.js';
import DefaultVideo from '../packages/default-video/index.js';
import FlvVideo from '../packages/flv-video/index.js';
import locale from 'vue-creek/src/locale';
import CollapseTransition from 'vue-creek/src/transitions/collapse-transition';

const components = [
  BigdataTable,
  DefaultVideo,
  FlvVideo,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$CREEK = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.3',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  BigdataTable,
  DefaultVideo,
  FlvVideo
};
