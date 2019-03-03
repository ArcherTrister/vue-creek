<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <FlvVideo></FlvVideo> -->
    <DefaultVideo></DefaultVideo>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sources: { src: 'http://220.165.9.44:16604/RealplayFlv.do?DevIDNO=016666666666&Channel=0&StreamType=1', type: 'flv' }
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
