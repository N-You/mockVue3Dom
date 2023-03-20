<template>
  <div class="box">
      <Header></Header>
      <Contain></Contain>
      <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue';
import Contain from './Contain/index.vue';
import Footer from './Footer/index.vue';
</script>

<style scoped lang="sass">
.box
  width: 100%
  display: flex
  flex-flow: column
</style>
