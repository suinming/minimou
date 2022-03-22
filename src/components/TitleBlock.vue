<template>
  <div class="titleBlockContainer">
    <span class="title">{{ title}}</span>
    <br>
    <span class="englishTitle">{{ englishTitle}}</span>
  </div>
</template>

<script>
export default {
  props: ['title', 'englishTitle']
}
</script>

<style scoped>
  .titleBlockContainer{
    height: 60px;
    color: white;
    background-color: black;
    text-align: center;
    padding: 16px;
  }
  .title{
    font-size: 24px;
  }
  .englishTitle{
    font-size: 16px;
  }
</style>
