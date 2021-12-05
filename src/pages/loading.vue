<template>
  <div>
    <div class="mask" style="display: block"></div>
    <component :is="type" class="com"></component>
  </div>
</template>

<script>
import Wifi from "@/components/wifi.vue";
import ball from "@/components/ball.vue";
export default {
  name: "loading",
  components: {
    Wifi,
    ball,
  },
  props: {
    type: {
      type: String,
      default: "wifi",
    },
  },
};
</script>

<style lang="css" scoped>
.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 98;
}
.com {
  z-index: 99;
}
</style>