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