import DefaultVideo from './src/default-video';

/* istanbul ignore next */
DefaultVideo.install = function(Vue) {
  Vue.component(DefaultVideo.name, DefaultVideo);
};

export default DefaultVideo;
