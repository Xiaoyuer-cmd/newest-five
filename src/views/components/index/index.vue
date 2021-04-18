<template>
  <div>
    <h1>项目介绍</h1>
  </div>
</template>

<script>
import index from './index.json'
export default {
  data() {
    return {
      index: index,
    }
  },
}
</script>

<style scoped>
@import './index.css';
</style>