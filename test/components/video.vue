<template>
  <div>
    <section class="jsmodern-video">
      <video src="http://vjs.zencdn.net/v/oceans.mp4"
             width="800"
             height="450"></video>
      <section class="jsmodern-video-panel">
        <b :class="{'jsmodern-video-play':true, 'jsmodern-video-pause':playState}"
           @click="play"></b>
        <span class="jsmodern-video-start">00:00</span><span>/</span>
        <span class="jsmodern-video-end">00:10</span>
        <div class="jsmodern-video-linebox">
          <div class="jsmodern-video-pass"></div>
          <b class="jsmodern-video-linedot"></b>
        </div>
        <b class="jsmodern-video-volume"></b>
        <div class="jsmodern-video-volumebox">
          <div class="jsmodern-video-volumeline"></div>
          <b class="jsmodern-video-volumedot"></b>
        </div>
        <b class="jsmodern-video-fullin jsmodern-video-fullout"></b>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  props: {

  },
  data() {
    return {
      playState: false// 播放状态，默认暂停
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    play() { },
    pause() { }
  },
  components: {

  }
};
</script>

<style>
.jsmodern-video {
  background: #000;
  position: relative;
  overflow: hidden;
  z-index: 10;
  width: 400px;
  height: 300px;
}

.jsmodern-video-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2147483648;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.jsmodern-video-panel.jsmodern-video-panelFull {
  left: 50%;
  -webkit-transform: translate(-50%, -10px);
  -ms-transform: translate(-50%, -10px);
  transform: translate(-50%, -10px);
  padding: 3px 5px;
  border-radius: 8px;
}

.jsmodern-video-linebox {
  height: 6px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 3px;
  width: 460px;
  width: -webkit-calc(100% - 305px);
  width: -moz-calc(100% - 305px);
  width: calc(100% - 305px);
  float: left;
  margin: 17px 0 0 15px;
  position: relative;
  cursor: pointer;
}

.jsmodern-video-pass {
  position: absolute;
  border-radius: 3px;
  height: 100%;
  background: #f06000;
}

.jsmodern-video-linedot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 3px;
  -webkit-transform: scale(1.8);
  -ms-transform: scale(1.8);
  transform: scale(1.8);
  position: absolute;
}

.jsmodern-video-panel b {
  cursor: pointer;
}

.jsmodern-video-panel b,
.jsmodern-video-panel span {
  display: block;
  float: left;
}

.jsmodern-video-panel span {
  font-size: 12px;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.jsmodern-video-start {
  margin-left: 10px;
}

.jsmodern-video-start + span {
  width: 14px;
  height: 12px;
  text-align: center;
  line-height: 12px;
  font-size: 10px;
  overflow: hidden;
  margin-top: 13px;
  -webkit-transform: scale(1, 0.9) translateY(1px);
  -ms-transform: scale(1, 0.9) translateY(1px);
  transform: scale(1, 0.9) translateY(1px);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
}

.jsmodern-video-start,
.jsmodern-video-end {
  width: 39px;
  text-align: center;
}

.jsmodern-video-volumebox {
  width: 80px;
  height: 6px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 3px;
  float: left;
  margin: 18px 0 0 7px;
  position: relative;
  cursor: pointer;
}

.jsmodern-video-volumeline {
  width: 40px;
  height: 6px;
  background: #f06000;
  border-radius: 3px;
  margin-top: 0;
}

.jsmodern-video-volumedot {
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 3px;
  margin: -6px 0 0 37px;
  -webkit-transform: scale(1.8);
  -ms-transform: scale(1.8);
  transform: scale(1.8);
  position: absolute;
}

.jsmodern-video-play,
.jsmodern-video-volume,
.jsmodern-video-fullin {
  width: 18px;
  height: 18px;
  margin-top: 11px;
  background-position: center;
  background-repeat: no-repeat;
}

.jsmodern-video-play {
  margin-left: 10px;
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAe0lEQVR42q2UQRGAIBREiWAEIhjhRzCKDbCBRjGCDaQBRqDBdzntgRvLm3nXN6sMhIa7G0xBgqHGC1c9RNKcENeZHiInXLQQKdDUUL9OD3GdGOrXaSGSZ4QuddEDo/KPPrgpx1/hwc8YC90wKlckQ1MubYW79IzwOMf4AZCzZlJ6pNv5AAAAAElFTkSuQmCC);
}

.jsmodern-video-pause {
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAANUlEQVR42u3MMQoAAAgCwP4/9aR+VjQINtTcoNBicobkTNiS/vEQvSBBggR9hILOD8h5i74A46kzKYwr0EYAAAAASUVORK5CYII=);
}

.jsmodern-video-volume {
  margin-left: 15px;
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAqklEQVR42tWT0QmDMBCGHcENXMEBhGaL9rEjZATffKwDZJdmgy7QHZo33zz/0AscBmNaCOIPH3Ke+USTq84ZIrqDdnXPgGuuoAVP4KMi0TddSlCDB5BR3GvEcy/wCYUCF8HNNwFtiBwwQco9jSKKBZQQaa4brt+en0W8eAJGiN2/IusRIiouKv9puA5bP7uXhDfsbP8gtn8GOnUgx8wD6XJHxO6NSNGhPT4LSrtjI5LQNtEAAAAASUVORK5CYII=);
}

.jsmodern-video-muted {
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAA00lEQVR42s2UsQ3CMBBFqZAokNLQoozgCWJ3NAxAg5QRGIEFEOkpgBFgAbIKC0AoU5nv6CJ9GQI6lIIvPcXxyd93di4D730v9Gf0Xc1mOTA0pTMKi8EFBDm1EQIJ2AKWldiw64wcsMQC3EGsDEzBhLPAM5XBi0r/XjNwBUfKxMimhcYoAzsZ78mkAkZlJBUc5L1uTbSlWbrJWuZOYU5tFJVzbsvUGs3BDTzEkMtsDnsdsQJVR0YbsOTrlzXJpw+yACwnsfGvLVLqWkTftCM2+r//0RPE3HMNwpwYwQAAAABJRU5ErkJggg==);
}

.jsmodern-video-fullin {
  margin-left: 15px;
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAKlBMVEVMaXH////////////////////////////////////////////////////m1kuZAAAADXRSTlMAYBAw79DwIM9wgG9/QM+KqQAAAF5JREFUeNqNj0sSwCAIQ6Pit+X+1y2GOs7UTbNA8kYjQE05wpTK7LG8EwcdrwZB7hrcBx1FYfcDCY9UEGdbrFbiBIqpFf90PmGo7NDvtwJt1x7slmN0graWEwIny+sDBBUDznqlFGYAAAAASUVORK5CYII=);
}

.jsmodern-video-fullout {
  margin-left: 15px;
  background-image: url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAJ1BMVEVMaXH////////////////////////////////////////////////c+C/6AAAADHRSTlMAgBDQz39QIMBAML9Nf8RqAAAAaElEQVR42r2QQQ7AIAgEV6CIlv+/t3Ap3E2cyyojxIBb7JfqQu/+z+ZCIAU0QtzqEbtMGcCIcCZ0454iIuvFLDHRICkhvUNHsICVqThBnyBHZSqK4+/2Ok9OEdGNOdcSuS1xW2+3jUt8eaUDz3DmFVcAAAAASUVORK5CYII=);
}

b.jsmodern-video-fullFalse {
  opacity: 0.5;
  cursor: default;
}
</style>
