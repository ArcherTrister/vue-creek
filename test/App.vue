<template>
  <div id="app">
    <img src="./assets/logo.png">
    <DefaultVideo :sources="defaultSources"
                  :options="defaultOptions"></DefaultVideo>
    <LiveVideo :sources="liveSources"
               :options="liveOptions"></LiveVideo>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultSources: { src: 'http://www.w3school.com.cn/i/movie.ogg', type: 'video/ogg'},
      defaultOptions: { volume: 0.1},
      liveSources: { src: 'http://220.165.9.44:16604/RealplayFlv.do?DevIDNO=016666666666&Channel=0&StreamType=1', type: 'flv' },
      liveOptions: { volume: 0.1, showPlayBtn: true,
        showSlider: true,
        showTime: true,
        showVol: false,
        showFullScreen: true }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
