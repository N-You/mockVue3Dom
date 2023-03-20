<template>
  <div class="box">
    <div class="contain">
      <router-view v-slot="{ Component }">
          <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="sass">
.box
  width:100%
  height: 100vh
  background-color: #F7F7F7
  display: flex
  justify-content: center
  align-items: center
  .contain
    width: 720rem
    height: 512rem
    background-color: white
    display: flex
    @media screen and (max-width: 720px)
        width: 100%
        min-width:570px,
        height: 100vh
        overflow: hidden
</style>

