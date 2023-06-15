<template>
  <div class="container">
    <RouterView></RouterView>
    <div class="footer">
      <a class="footer-text">© 2023 上海芯联芯智能科技有限公司</a>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fff;
  display: flex;
  line-height: 1.3;
  font-family: "Noto Sans CJK SC", Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-rendering: optimizeLegibility;
  /* max-width: 54rem; */
  width: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* max-width: 1280px; */
  width: 800px;
  min-height: 480px;
}

.footer {
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  margin-top: 30px;
}

.footer-text {
  float: right;
}

.container {
  display: flex;
  flex-flow: column;
  margin: 32px;
  row-gap: 32px;
}

</style>

<script>
export default {}
</script>
