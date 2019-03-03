<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <FlvVideo></FlvVideo> -->
    <!-- <DefaultVideo :sources="sources"
                  :options="options"></DefaultVideo> -->
    <LiveVideo :sources="sources"
               :options="options"></LiveVideo>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sources: { src: 'https://cn-nmghhht-cu-live-04.live-play.acgvideo.com/live-bvc/282029/live_16539048_6881003.flv?expires=1551631345&ssig=HVO8oak55paQYQJ-uPhKBA&oi=3721737304&trid=061fcb85c1d3449c9d0bb13f0366e726', type: 'flv' },
      options: { volume: 0.1, showPlayBtn: true,
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
