<template>
  <HeaderComponent title="新建项目向导" subtitle="请选择您的项目针对的设备，如果您的设备未在下述列表中，请选择“自定义...”。" cn=true />
  <div class="main">
    <div class="device">
      <a class="main-subtitle">设备类型</a>
      <ul>
        <li v-for="d in deviceList.entries()" :key="d[0]">
          <ListButton v-model:title="d[1].name" v-model:selected="selection" v-model:subtitle="d[1].desc" v-model:index="d[0]" />
        </li>
      </ul>
    </div>
    <div class="config">
      <a class="main-subtitle">配置概要</a>
        <div class="desc">
          <div class="desc-container">
            <a class="desctitle">处理器核心</a>
            <a>{{ deviceList[selection].name }}</a>
          </div>
          <a class="desctitle">指令集架构</a>
          <a class="desctitle">指令集位宽</a>
          <a class="desctitle">内存容量</a>
          <a class="desctitle">工具链类型</a>
          <a class="desctitle">项目模板</a>
        </div>
        <a class="adjust-arg">调整参数</a>
    </div>
  </div>
  <div class="project-path">
    <a class="main-subtitle">项目路径</a>
    <div class="bar">
      <div class="bar-folder">
        <input type="text" id="directory" class="directory">
        <img class="open-folder" src="@/assets/Folder_32x.svg">
      </div>
      <button class="bar-button-continue">创建项目</button>
      <button class="bar-button-cancel">取消</button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListButton from '@/components/ListButton.vue';

export default {
  components: { HeaderComponent, ListButton },
  data() {
    return {
      selection: 0,
      deviceList: [
        { name: "MIPS Creator CI20", desc: "123"},
        { name: "aaa", desc: "456" },
        { name: "自定义", desc: "自定义" }
      ]
    }
  }
}
</script>

<style scoped>
  .device {
    display: flex;
    flex-flow: column;
    row-gap: 10px;
  }
  .main-subtitle {
    display: flex;
    flex-flow: column;
  }

  .main {
    display: flex;
    column-gap: 105px;
    column-count: 2;
  }

  .config {
    display: flex;
    flex-flow: column;
    row-gap: 10px;
    min-width: 310px;
  }
  .config .desc {
    display: flex;
    flex-flow: column;
    row-gap: 10px;
  }

  .desc .desctitle {
    font-weight: bold;
  }

  .desc-container {
    display: flex;
    column-gap: 15px;
  }

  ul {
    padding: 0;
    display: flex;
    flex-flow: column;
    row-gap: 10px;
    margin: 0;
  }

  li {
    list-style: none;
  }

  .adjust-arg {
    color: #705697;
  }

  .directory {
    width: 514px;
    height: 36px;
    background-color: #D6CFE2;
    border: none;
  }

  .bar {
    display: flex;
    flex-flow: row;
    column-gap: 12px;
  }

  .bar-folder {
    display: flex;
    flex-flow: row;
  }

  .bar-button-continue {
    width: 96px; 
    height: 36px;
    background: #D1B6DB;
    border: none;
  }

  .bar-button-cancel {
    width: 96px; 
    height: 36px;
    background: #D6CFE2;
    border: none;
  }

  .open-folder {
    width: 21px;
    height: 21px;
  }

  button:hover {
    background: #E0C5EA;
  }

</style>