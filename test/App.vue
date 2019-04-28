<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click.stop="initData">更新</button>
    <DefaultVideo
      :sources="defaultSources"
      :options="defaultOptions"
    ></DefaultVideo>
    <live-video
      :sources="liveSources"
      :options="liveOptions"
    ></live-video>
    <BigdataTable
      :data="tableData"
      :height="258"
      style="width: 100%"
    >
      <vc-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </vc-table-column>
      <vc-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </vc-table-column>
      <vc-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </vc-table-column>
      <vc-table-column
        prop="address"
        label="地址"
      >
      </vc-table-column>
    </BigdataTable>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultSources: {
        src: 'http://pic.ibaotu.com/00/56/77/28b888piCuvW.mp4',
        type: 'video/mp4'
      },
      defaultOptions: { volume: 0.1 },
      liveSources: {
        src: 'http://pic.ibaotu.com/00/56/77/28b888piCuvW.mp4',
        type: 'flv'
      },
      liveOptions: {
        volume: 0.1,
        showPlayBtn: true,
        showSlider: true,
        showTime: true,
        showVol: false,
        showFullScreen: true
      },
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  mounted() {
    console.log(this.$Utils);
    this.initData();
  },
  methods: {
    initData() {
      let arr = [];
      for (let index = 0; index < 100000; index++) {
        const element = {
          id: index,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        };
        arr.push(element);
      }
      this.tableData = arr;
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
