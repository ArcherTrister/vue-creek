<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <DefaultVideo :sources="defaultSources"
                  :options="defaultOptions"></DefaultVideo> -->
    <live-video :sources="liveSources"
                :options="liveOptions"></live-video>
    <BigdataTable :data="tableData"
                  :height="258"
                  style="width: 100%">
      <vc-table-column-pro prop="date"
                           :callback="requestTransactionLogs"
                           :startDate.sync="request_params.startDate"
                           :endDate.sync="request_params.endDate"
                           label="日期"
                           renderType="date"
                           :width="180"></vc-table-column-pro>
      <vc-table-column prop="date"
                       label="日期"
                       width="180">
      </vc-table-column>
      <vc-table-column-pro prop="name"
                           label="客户代码 "
                           :width="120"
                           placeholder="请输入客户代码"
                           :callback="requestTransactionLogs"
                           renderType="input"
                           :param.sync="request_params.clientCode"> </vc-table-column-pro>
      <!-- <vc-table-column-pro  prop="address" label="事件 " placeholder="请选择事件"   :selectList="listEventEnum" :callback="requestTransactionLogs"  renderType="select" :param.sync="request_params.event" :width="100">  </vc-table-column-pro> -->
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
  data () {
    return {
      request_params: {
        startDate: '',
        endDate: '',
        clientCode: ''
      },
      defaultSources: { src: 'http://pic.ibaotu.com/00/56/77/28b888piCuvW.mp4', type: 'video/mp4' },
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
  },
  mounted () {
    console.log(this.$Utils);
  },
  methods: {
    requestTransactionLogs (a, b, c, d) {
      console.log(a, b);
    }
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
