import FlvVideo from './src/flv-video';

/* istanbul ignore next */
FlvVideo.install = function(Vue) {
  Vue.component(FlvVideo.name, FlvVideo);
};

export default FlvVideo;
