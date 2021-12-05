<template>
  <div class="sk-three-bounce" id="sk-three-bounce">
    <div
      :class="['sk-child',`sk-bounce${item}`]"
      :style="delay(item)"
      v-for="item in count"
      :key="item"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ball",
  props: {
    count: {
      type: Number,
      default: 3,
    },
    color: {
      type: String,
      default: "#4a90e2",
    },
  },
  methods: {
    delay(item) {
      return `animation-delay: ${
        -this.count * 0.16 + item * 0.16
      }s;background-color: ${this.color};`;
    },
  },
};
</script>

<style lang="css" scoped>
.sk-three-bounce {
  /*使用弹性布局让加载动画持续会于页面中央，不随滚动条变化*/
  position: fixed;
  top: 50%;
  left: 50%;
}

.sk-three-bounce .sk-child {
  /*在这里设置加载球的大小*/
  width: 30px;
  height: 30px;
  /*加载求的颜色在这里修改*/
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}

@-webkit-keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>