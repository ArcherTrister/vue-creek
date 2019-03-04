<template>
  <div id="app">
    <img src="./assets/logo.png">
    <DefaultVideo :sources="defaultSources"
                  :options="defaultOptions"></DefaultVideo>
    <live-video :sources="liveSources"
               :options="liveOptions"></live-video>
    <BigdataTable :data="tableData"
     :height="258"
                  style="width: 100%">
      <vc-table-column prop="date"
                       label="日期"
                       width="180">
      </vc-table-column>
      <vc-table-column prop="name"
                       label="姓名"
                       width="180">
      </vc-table-column>
      <vc-table-column prop="address"
                       label="地址">
      </vc-table-column>
    </BigdataTable>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultSources: { src: 'http://www.w3school.com.cn/i/movie.ogg', type: 'video/ogg' },
      defaultOptions: { volume: 0.1 },
      liveSources: { src: 'http://220.165.9.44:16604/RealplayFlv.do?DevIDNO=016666666666&Channel=0&StreamType=1', type: 'flv' },
      liveOptions: {
        volume: 0.1,
        showPlayBtn: true,
        showSlider: true,
        showTime: true,
        showVol: false,
        showFullScreen: true
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
