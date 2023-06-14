<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  background-color: #fff;
  display: flex;
  /* min-height: 100vh; */
  /* color: var(--color-text); */
  line-height: 1.3;
  font-family: "Noto Sans CJK SC", Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  max-width: 54rem;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* max-width: 1280px; */
  margin: 0 auto;

}
</style>
