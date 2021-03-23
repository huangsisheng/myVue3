<!--
 * @Author: your name
 * @Date: 2020-11-13 14:37:27
 * @LastEditTime: 2021-03-23 16:54:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack_vue3\src\views\home\index.vue
-->
<template>
  <div class="" v-if="$route.name === 'home'">
    <div
      id="html2canvas-container"
      style="width: 300px; height: 300px; color: #000"
    >
      <img :src="canvasImageUrl" style="width: 100%; height: 240px" />
      <span>1231232</span>
    </div>
    <div id="show-container"></div>
  </div>
  <router-view v-else></router-view>
</template>

<script>
import html2canvas from "html2canvas";
import { onMounted, reactive } from "vue";
export default {
  name: "home",
  setup(context, props) {
    const state = reactive({
      canvasImageUrl:
        "/dev/clock/recommend1.png",
    });

    const creactImg = async () => {
      const _wrapper = document.getElementById("html2canvas-container");
        await html2canvas(_wrapper, {
          scale: window.devicePixelRatio,
          width: parseInt(_wrapper.style.width),
          height: parseInt(_wrapper.style.height),
          logging: false,
          useCORS: true, //配置跨域
          allowTaint: true,
        //   proxy: "/dev",
        }).then((canvas) => {
          const imgSrc = canvas.toDataURL("image/png");
          console.log(imgSrc)
          let oImg = new Image();
          oImg.src = imgSrc;
          document.getElementById("show-container").appendChild(oImg); // 将生成的图片添加到body
        });
      /* const _canvas = document.createElement("canvas");
      const ctx = _canvas.getContext("2d");
      //   let oImg = new Image();
      //   oImg.src = state.canvasImageUrl;
      //   ctx.drawImage(
      //     oImg,
      //     0,
      //     0,
      //     parseInt(_wrapper.style.width),
      //     parseInt(_wrapper.style.height)
      //   );
      //   console.log(_canvas);

      // 创造svg
      let data = `
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">
       ${_wrapper.innerHTML}
      </div>
    </foreignObject>
  </svg>
`;

      let DOMURL = window.URL || window.webkitURL || window;

      let img = new Image();
      let svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      let url = DOMURL.createObjectURL(svg);
      // 根据svg生产url
      console.log(url);
      img.onload = function () {
        ctx.drawImage(
          img,
          0,
          0,
          parseInt(_wrapper.style.width),
          parseInt(_wrapper.style.height)
        );
        DOMURL.revokeObjectURL(url); // 摧毁刚刚生产的url
      }; // 注册回调函数

      img.src = url;
      document.getElementById("show-container").appendChild(_canvas);*/
    };
    onMounted(() => {
      creactImg();
    }); 
    return {
      creactImg,
      ...state,
    };
  },
};
</script>

<style scoped lang="">
</style>
