<template>
  <div class="sk-wave">
    <div
      :class="['sk-rect', `sk-rect${item}`]"
      :style="delay(item)"
      v-for="item in count"
      :key="item"
    ></div>
  </div>
</template>

<script>
export default {
  name: "wifi",
  props: {
    count: {
      type: Number,
      default: 5,
    },
    color: {
      type: String,
      default: "#4a90e2",
    },
  },
  methods: {
    delay(item) {
      return `animation-delay: ${
        -this.count * 0.2 + item * 0.1
      }s;background-color: ${this.color};`;
    },
  },
};
</script>

<style lang="css" scoped>
.sk-wave {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.sk-wave .sk-rect {
  height: 100%;
  width: 6px;
  margin-right: 6px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
  animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-waveStretchDelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes sk-waveStretchDelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>
