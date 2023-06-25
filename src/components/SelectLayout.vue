<template>
  <select v-bind:name="name" class="select">
    <option v-for="opt in opts" :key="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    name: String,
    opts: Array,
  }
}
</script>

<style scoped>
  .select {
    width: 340px;
    height: 36px;
    background: #D6CFE2;
    border: none;
    font-size: 16px;
  }
</style>