<template>
  <button class="button" :class="{ button_active: selected == index }" @click="select(index)" >
    <a class="button-title">{{ title }}</a>
    <a class="button-subtitle" v-if="selected == index">{{ subtitle }}</a>
  </button>
</template>

<style scoped>
.button {
  font-size: 24px;
  line-height: 35px;
  width: 360px;
  height: 48px;
  background: #EDE8EF;
  border: none;
  text-align: justify;
  display: flex;
  flex-flow: column;
}

.button .button-title {
  padding-left: 13px;
  padding-top: 12px;
}

.button-subtitle {
  padding-left: 13px;
  padding-bottom: 12px;
}

.button_active {
  width: 360px;
  height: 80px;
  background: #D1B6DB;
}
</style>

<script>
export default {
  props: {
    title: String,
    selected: Number,
    index: Number,
    subtitle: String,
  },
  methods: {
    select: function (index) {
      this.$emit("update:selected", index);
    },
  },
}
</script>
