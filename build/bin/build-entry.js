var Components = require('../../components.json');
var Prototypes = require('../../prototypes.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');
var endOfLine = require('os').EOL;

var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
var COMMONS_TEMPLATE = "import {{name}} from '../commons/{{common}}/index.js';";
var IMPORT_TEMPLATE =
  "import {{name}} from '../packages/{{package}}/index.js';";
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
import locale from 'vue-creek/src/locale';
import CollapseTransition from 'vue-creek/src/transitions/collapse-transition';

{{prototypeInclude}}

const components = [
{{install}},
  CollapseTransition
];

const prototypes = [
{{prototypeInstall}}
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  prototypes.forEach(prototype => {
    Object.defineProperty(Vue.prototype, prototype.name(), { value: prototype });
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
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
{{list}}
};
`;

delete Components.font;
delete Prototypes.font;

var ComponentNames = Object.keys(Components);
var PrototypeNames = Object.keys(Prototypes);

var includeComponentTemplate = [];
var includePrototypeTemplate = [];
var installTemplate = [];
var prototypeinstallTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(
    render(IMPORT_TEMPLATE, {
      name: componentName,
      package: name
    })
  );

  if (
    ['Loading', 'MessageBox', 'Notification', 'Message'].indexOf(
      componentName
    ) === -1
  ) {
    installTemplate.push(
      render(INSTALL_COMPONENT_TEMPLATE, {
        name: componentName,
        component: name
      })
    );
  }

  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

PrototypeNames.forEach(name => {
  var prototypeName = uppercamelcase(name);
  includePrototypeTemplate.push(
    render(COMMONS_TEMPLATE, {
      name: prototypeName,
      common: name
    })
  );

  prototypeinstallTemplate.push(
    render(INSTALL_COMPONENT_TEMPLATE, {
      name: prototypeName,
      prototype: name
    })
  );
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  version: process.env.VERSION || require('../../package.json').version,
  list: listTemplate.join(',' + endOfLine),
  prototypeInclude: includePrototypeTemplate.join(',' + endOfLine),
  prototypeInstall: prototypeinstallTemplate.join(',' + endOfLine)
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);
