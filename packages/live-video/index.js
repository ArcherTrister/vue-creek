import LiveVideo from './src/live-video';

/* istanbul ignore next */
LiveVideo.install = function(Vue) {
  Vue.component(LiveVideo.name, LiveVideo);
};

export default LiveVideo;
