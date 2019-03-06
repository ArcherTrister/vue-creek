<template>
  <i :class="'vc-icon-' + name"></i>
</template>

<script>
export default {
  name: 'VcIcon',

  props: {
    name: String
  }
};
</script>
