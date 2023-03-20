<template>
  <div class="header">
    <div class="header-left">
      <img src="../../../assets/img/Home/flat-color-icons_search.png" alt="" />
      <div>创思找工作</div>
    </div>
    <div class="header-right">
      <div class="header-right-nav">
        <div class="header-right-nav-one">首页</div>
        <div class="header-right-nav-tow">岗位展示</div>
        <div class="header-right-nav-three">工作分类</div>
        <div class="header-right-nav-four">关于创思</div>
      </div>
      <div v-if="!isLogin" class="header-right-button">
        <div @click="Login" class="header-right-button-one">登录</div>
        <div class="header-right-button-two">发布岗位</div>
      </div>
      <div v-else class="header-right-button2">
        <div class="header-right-button-one">
          <el-avatar :src="userStore.getUserInfo().avatarUrl ? userStore.getUserInfo().avatarUrl : ''" />  
        <div>{{userStore.getUserInfo().name}}</div></div>
        <div class="header-right-button-two2">
          <div @click="Login">返回登录页</div>
          <div @click="ChangeUserInfo">更改个人资料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,watch } from 'vue';
import router from '~/router';

import { useUserStore } from '~/store/user'
const userStore = useUserStore()

let isLogin = ref<boolean>(false)

watch(()=>userStore.getUserInfo(),value=>{
  if(value) isLogin.value=true
},{
  immediate:true
})


function Login(){
  router.push({path:'/login'})
}

function ChangeUserInfo(){
  router.push({path:'/personinfo'})
}
</script>

<style scoped lang="sass">
$paddingSize2: 10rem 36.5rem 0 32.5rem

@mixin flex-center2 
  display: flex
  justify-content: center
  align-items: center
.header
  z-index: 9999
  padding: $paddingSize2
  box-sizing: border-box
  display: flex
  justify-content: space-between
  height: 100rem
  width: 100%
  background: linear-gradient(244deg, #2A2AD1 -5%,#4D4DDB 108%)
  position: fixed
.header-left
    display: flex
    align-items: center
    height: 95rem
    img
      width: 95rem
    div
      font-family: RobotoRoman-Regular
      font-size: 32rem
      font-weight: normal
      line-height: 37.5rem
      letter-spacing: 0em
      color: #FFFFFF
      margin-left: 15rem
.header-right
    display: flex
    &-nav
      display: flex
      justify-content: space-between
      align-items: center
      width: 492rem
      font-family: RobotoRoman-Regular
      font-size: 24rem
      font-weight: normal
      line-height: 28.13rem
      letter-spacing: 0em
      color: #FFFFFF
    &-button
      display: flex
      align-items: center
      width: 354rem
      font-family: RobotoRoman-Regular
      font-size: 24rem
      font-weight: normal
      letter-spacing: 0em
      color: #FFFFFF
      &-one
        width: 50%
        height: 55rem
        border-radius: 8rem
        text-align: center
        line-height: 56rem
        @include flex-center2
      &-two
        width: 50%
        height: 55rem
        border-radius: 8rem
        @include flex-center2
        background: #000000
    &-button2
      display: flex
      align-items: center
      width: 354rem
      font-family: RobotoRoman-Regular
      font-size: 24rem
      font-weight: normal
      letter-spacing: 0em
      color: #FFFFFF
      &-one
        width: 50%
        height: 55rem
        border-radius: 8rem
        text-align: center
        line-height: 56rem
        @include flex-center2
      &-two2
        width: 50%
        height: 55rem
        border-radius: 8rem
        line-height: 56rem
        display: flex
:deep(.el-avatar)
  width: 56rem
  height: 56rem
</style>
