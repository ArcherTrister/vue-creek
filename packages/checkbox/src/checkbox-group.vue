<script>
import Emitter from 'vue-creek/src/mixins/emitter';

export default {
  name: 'VcCheckboxGroup',

  componentName: 'VcCheckboxGroup',

  mixins: [Emitter],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value(value) {
      this.dispatch('VcFormItem', 'el.form.change', [value]);
    }
  }
};
</script>

<template>
  <div class="vc-checkbox-group"
       role="group"
       aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
