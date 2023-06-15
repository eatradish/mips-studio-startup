<template>
    <div class="header">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle']
    }
</script>

<style>
.title {
  font-size: 48px;
  color: #705697;
  margin: 0;
  line-height: 40px;
}

.subtitle {
  font-size: 16px;
  line-height: 23px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
}
</style>