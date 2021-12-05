<template>
  <div id="app">
    <button @click="loading">loading</button>
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    loading() {
      const loading = this.$loading({type:"ball"});
      setTimeout(()=>{
        loading.remove();
      },2000)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
