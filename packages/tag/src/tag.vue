<script>
export default {
  name: 'VcTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit('close', event);
    },
    handleClick(event) {
      event.stopPropagation();
      this.$emit('click', event);
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$CREEK || {}).size;
    }
  },
  render(h) {
    const classes = ['vc-tag', this.type ? `vc-tag--${this.type}` : '',
      this.tagSize ? `vc-tag--${this.tagSize}` : '',
      { 'is-hit': this.hit }
    ];
    const tagVc = (<span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
      {this.$slots.default}
      {
        this.closable && <i class="vc-tag__close vc-icon-close" on-click={this.handleClose}></i>
      }
    </span>);

    return this.disableTransitions ? tagVc : <transition name="vc-zoom-in-center">{tagVc}</transition>;
  }
};
</script>
