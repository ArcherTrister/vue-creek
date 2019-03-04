const Utils = {
  name() {
    return '$Utils';
  },
  getType(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  },
  isUndefined(e) {
    return void 0 === e;
  },
  isNullOrUndefined(e) {
    return e === null || this.isUndefined(e);
  },
  isEmptyNullOrUndefined(e) {
    return e === null || this.isUndefined(e) || e === '';
  }
};
export default Utils;
