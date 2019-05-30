import Vue from 'vue'

/** VueCreekUI component common definition */
export declare class VueCreekUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type VueCreekUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type VueCreekUIHorizontalAlignment = 'left' | 'center' | 'right'