<template>
  <HeaderComponent title="新建项目向导" subtitle="请选择您的项目针对的设备，如果您的设备未在下述列表中，请选择“自定义...”。" cn=true />
  <div class="main">
    <div class="device">
      <a class="main-subtitle">设备类型</a>
        <ul>
          <li v-for="d in deviceList" :key="d.index">
            <ListButton v-model:title="d.name" v-model:selected="selection" v-model:index="d.index" />
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListButton from '@/components/ListButton.vue';

let index = 0;

export default {
  components: { HeaderComponent, ListButton },
  data() {
    return {
      selection: 0,
      deviceList: [
        { index: index++, name: "MIPS Creator CI20", desc: "123"},
        { index: index++, name: "aaa", desc: "456" }
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
</style>