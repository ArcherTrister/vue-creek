<template>
  <ul class="vc-select-group__wrap"
      v-show="visible">
    <li class="vc-select-group__title">{{ label }}</li>
    <li>
      <ul class="vc-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
import Emitter from 'vue-creek/src/mixins/emitter';

export default {
  mixins: [Emitter],

  name: 'VcOptionGroup',

  componentName: 'VcOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: true
    };
  },

  watch: {
    disabled(val) {
      this.broadcast('VcOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange() {
      this.visible = this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some(option => option.visible === true);
    }
  },

  created() {
    this.$on('queryChange', this.queryChange);
  },

  mounted() {
    if (this.disabled) {
      this.broadcast('VcOption', 'handleGroupDisabled', this.disabled);
    }
  }
};
</script>
