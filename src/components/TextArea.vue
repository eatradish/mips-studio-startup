<template>
  <textarea class="textarea" :value="msg" @input="event => event.target.value" />
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped>
.textarea {
  width: 340px;
  height: 60px;
  border: none;
  background: #D6CFE2;
  font-size: 16px;
}
</style>