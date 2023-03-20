<template>
  <div class="logo">
    <img src="../../assets/img/Login/undraw_login.png" />
  </div>
  <div class="content">
    <div class="content-items">
      <div class="title">
        <div class="title-text">欢迎登录创思设备管理系统</div>
      </div>
      <div class="form-content">
        <div class="form-content-box">
          <label for="email">邮箱</label>
          <input v-model="formData.email" type="email" id="email" />
          <div
            v-show="isEmailValid"
            class='warnText'
          ></div>
        </div>
        <div class="form-content-box">
          <img
            v-if="!searValue"
            src="../../assets/img/Login/Group.png"
            class="icon-search"
          />
          <label for="password">密码</label>
          <input
            v-model="formData.Password"
            class="inputPassword"
            type="password"
            id="password"
          />
          <div
            v-show="isPasswordValid"
            class='warnText'
          ></div>
        </div>
      </div>
      <div class="form-check">
        <div class="form-check-items">
          <input v-model="checkRef" type="checkbox" id="remmber" />
          <label for="remmber">记住我</label>
        </div>
        <div>
          <span class="navigation-underline" @click="ForgetPassword">忘记密码</span>
        </div>
      </div>
      <div class="form-button" @click="handleClick">
        <img src="../../assets/img/Login/Button.png" />
      </div>
      <div class="foot-navigation">
        <span>你还没有账号?</span><span class="foot-navigation-blue" @click="RegistUser">注册账号?</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, reactive, ref } from 'vue'
import RequestApi from '~/Api'
import router from '~/router'
import {LogError} from '~/utils/LogError'

import { useUserStore } from '~/store/user'
const userStore = useUserStore()

let formData = reactive<{
  email:string | undefined,
  Password:string | undefined
}>({
  email:'',
  Password:''
})


let searValue = ref<boolean>(false)
let checkRef = ref<boolean>(false)

//输入验证提示
let isEmailValid = ref<boolean>(false)
let isPasswordValid = ref<boolean>(false)

//表单验证
function Formvalidate():boolean{
  const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  const emailRegValue = formData.email !== undefined && emailReg.test(formData.email)
  let PasswordRegValue = formData.Password !== undefined && formData.Password?.length < 13
  if(!emailRegValue) isEmailValid.value = true
  if(!PasswordRegValue) isPasswordValid.value = true
return emailRegValue && PasswordRegValue
}

async function handleClick() {
  const isValid = Formvalidate()
  if (isValid) {
    isEmailValid.value = false
    isPasswordValid.value = false
    try{
      let res = await RequestApi.Login({
      email: formData.email,
      passWord: formData.Password,
      isCheck:checkRef.value
    })
    if(res.code === 200){
      console.log(res.result);
      userStore.setUserId(res.result)
      userStore.setUserInfo(res.result.data)
      router.push({ path: '/home' })
    }
    }catch(e:any){
      LogError("用户未注册或输入错误")
    }
  }else{
      LogError("请输入正确账号或密码")
  }
}

function ForgetPassword(){
  router.push({ path: '/fpassword' })
}

function RegistUser(){
  router.push({ path: '/register' })
}

onUnmounted(()=>{
  formData.Password = ''
  formData.email = ''
})
</script>

<style scoped lang="sass">
.logo
  width:50%
  height: 100%
  background-color: #9A9AEB
  display: flex
  justify-content: center
  align-items: center
  img
    width: 283.5rem
    height: 169.5rem
.content
  width:50%
  height: 100%
  display: flex
  flex-flow: column
  justify-content: center
  align-items: center
  &-items
    width: 223rem
    .title
      width: 192rem
      float: right
      margin-bottom: 19.75rem
      &-text
        text-align: end
        font-family: RobotoRoman-Medium
        font-size: 16rem
        font-weight: normal
        line-height: 18.75rem
        letter-spacing: 0em
        color: #000000
.form-content
  width: 100%
  &-box
    margin: 10rem 0
    display: flex
    flex-flow: column
    align-content: space-between
    width: 223rem
    height: 52.5rem
    position: relative
    input
      height: 27.5rem
      border-radius: 2rem
      border: 0.5rem solid #4D4DDB
      margin-top: 6rem
    label
      display: inline-block
      height: 14.065rem
      font-family: RobotoRoman-Regular
      font-size: 12rem
      font-weight: normal
      line-height: 14.065rem
      letter-spacing: 0em
      color: #000000
    .icon-search
      width: 15rem
      height: 15rem
      position: absolute
      bottom: 0
      right: 10rem
      top:55%
.form-check
  width: 100%
  margin-button: 12rem
  display: flex
  align-items: center
  justify-content: space-between
  &-items
    height: 13.5rem
    display: flex
    justify-content: center
    align-items: center
    input
      width: 13.5rem
      height: 13.5rem
      background-color: #D9D9D9
.form-button
  width: 223rem
  height: 27.5rem
  border-radius: 4rem
  margin: 12rem 0
  img
    width:100%
    height: 100%
    overflow: hidden

.foot-navigation
  text-align: center
  &-blue
    color: blue
  &-blue:hover
    text-decoration: underline

.navigation-underline:hover
  text-decoration: underline
  
.form-button:active
  transform: scale(0.98, 0.98)

.warnText
  top:55%
  right: -7.5rem
  position: absolute
  width: 5rem
  height: 5rem
  border-radius: 50%
  background-color: red
</style>

//750px适应
<style scoped lang="sass">
@media screen and (max-width: 720px)
    .logo
      width:50%
      height: 100%
      background-color: #9A9AEB
      display: flex
      justify-content: center
      align-items: center
      img
        width: 567rem
        height: 339rem
    .content
      width:50%
      height: 100%
      display: flex
      flex-flow: column
      justify-content: center
      align-items: center
      &-items
        width: 446rem
        .title
          width: 384rem
          float: right
          margin-bottom: 39.5rem
          &-text
            text-align: end
            font-family: RobotoRoman-Medium
            font-size: 32rem
            font-weight: normal
            line-height: 37.5rem
            letter-spacing: 0em
            color: #000000
    .form-content
      width: 100%
      &-box
        margin: 20rem 0
        display: flex
        flex-flow: column
        align-content: space-between
        width: 446rem
        height: 105rem
        position: relative
        input
          height: 55rem
          border-radius: 4rem
          border: 1rem solid #4D4DDB
          margin-top: 12rem
        label
          display: inline-block
          height: 28.13rem
          font-family: RobotoRoman-Regular
          font-size: 24rem
          font-weight: normal
          line-height: 28.13rem
          letter-spacing: 0em
          color: #000000
        .icon-search
          width: 30rem
          height: 30rem
          position: absolute
          bottom: 0
          right: 20rem
          top:55%
    .form-check
      width: 100%
      margin-button: 24rem
      display: flex
      align-items: center
      justify-content: space-between
      &-items
        height: 27rem
        display: flex
        justify-content: center
        align-items: center
        input
          width: 27rem
          height: 27rem
          background-color: #D9D9D9
    .form-button
      width: 446rem
      height: 55rem
      border-radius: 8rem
      margin: 24rem 0
      img
        width:100%
        height: 100%
        overflow: hidden
    
    .foot-navigation
      text-align: center
      &-blue
        color: blue
      &-blue:hover
        text-decoration: underline
    
    .navigation-underline:hover
      text-decoration: underline
      
    .form-button:active
      transform: scale(0.98, 0.98)
    
    .warnText
      top:55%
      right: -15rem
      position: absolute
      width: 10rem
      height: 10rem
      border-radius: 50%
      background-color: red
</style>
