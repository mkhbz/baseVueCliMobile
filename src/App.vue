<template>
  <div id="app">
    <router-view />
    <div
      v-show="SystemSwitch.ajaxLoading === true && ajaxLength != 0"
      class="LoadingContainer"
    >
      <div class="container">
        <van-loading />
        <span class="ajaxText">{{ ajaxText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import { getWxConfig } from "@/server";

import { SystemSwitch, Dictionaries } from "@/utils/constants";
import { EventBus } from "@/utils/bus.js";
export default {
  name: "App",
  data() {
    return {
      ajaxText: "", //ajax的文字
      SystemSwitch,
      ajaxLength: 0, //当前正在请求的ajax的数量
    };
  },
  async mounted() {
    EventBus.$on("ajaxCount", (count) => {
      switch (count) {
        // ajax增加
        case Dictionaries.increase:
          this.ajaxLength++;
          break;
        // ajax减少
        case Dictionaries.reduce:
          this.ajaxLength === 0 ? null : this.ajaxLength--;
      }
    });
    EventBus.$on("ajaxText", (text) => {
      this.ajaxText = text;
    });
    getWxConfig().then(
      (res) => {
        const {
          data: {
            beta,
            debug,
            appId,
            timestamp,
            nonceStr,
            signature,
            jsApiList,
          },
        } = res;
        wx.config({
          beta,
          debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId, // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr, // 必填，生成签名的随机串
          signature, // 必填，签名，见附录1
          jsApiList,
        });
      },
      (fres) => {
        console.log("拉取微信配置文件信息失败");
      }
    );
  },
};
</script>

<style lang="less" scoped>
#app {
  font-size: 32px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 750px;
  position: relative;
  max-width: 750px;
  margin-left: auto;
  z-index: 1;
  margin-right: auto;
}
.LoadingContainer {
  position: fixed;
  height: 100vh;
  left: 0;
  z-index: 2;
  top: 0;
  font-size: 32px;
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  .container {
    width: 200px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -100px;
    height: 180px;
    background-color: rgba(0, 0, 0, 0.3);
    .ajaxText {
      position: absolute;
      bottom: 10px;
      color: #fff;
      font-size: 28px;
      width: 180px;
      left: 10px;
    }
  }
}
/deep/ .van-loading {
  position: absolute;
  left: 50%;
  margin-left: -40px;
  margin-top: -40px;
  top: 50%;
  display: block;
  color: #fff;
}
/deep/ .van-loading__spinner {
  font-size: 80px;
  width: 80px;
  height: 80px;
}
</style>
<style >
#app {
  text-align: center;
}
</style>
