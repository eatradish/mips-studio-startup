<template>
  <HeaderComponent title="自定义参数" subtitle="请根据您的需要调整下列参数。" cn=true />
  <div class="main">
    <div>
      <a class="main-subtitle">工具链</a>
      <SelectLayout name="toolchain" v-model:opts="toolchains" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import SelectLayout from '@/components/SelectLayout.vue';
export default {
  components: { HeaderComponent, SelectLayout },
  data() {
    return {
      toolchains: ["MTI GCC (11.2.0)"]
    }
  }
}
</script>
