<template>
  <div class="logo">
    <img src="../../assets/img/Login/undraw_forgot_password.png" />
  </div>
  <div class="content">
    <div class="content-items">
      <div class="title">
        <div class="title-text">欢迎登录创思设备管理系统</div>
      </div>
      <div>
        <el-form
          ref="FormDataRef"
          :rules="rules"
          :model="formData"
        >
          <el-form-item prop="name">
            <label for="name">姓名</label>
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <label for="email">邮箱</label>
            <el-input id="email" v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <label for="pass">密码</label>
            <el-input
              :show-password="true"
              type="password"
              id="pass"
              v-model="formData.passWord"
            ></el-input>
            <span>密码强度</span
            ><span v-show="formData.passWord.length !== 0"
              >:<span :style="{ color: passColor }">{{ passText }}</span></span
            >
          </el-form-item>
          <el-form-item>
            <input v-model="checkRef" type="checkbox" id="remmber" />
            <label for="remmber">我已阅读用户协议并同意</label>
          </el-form-item>
          <el-form-item>
            <el-button
              class="form-button"
              type="primary"
              @click="onSubmit(FormDataRef)"
              >发送</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="foot-navigation">
        <span
          >你已有平台账号?<span class="foot-navigation-blue" @click="Login"
            >用户登录</span
          ></span
        >
        <span class="navigation-underline" @click="ForgetPassword"
          >忘记密码</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { FormInstance } from 'element-plus/es/components/form'
import { reactive, watch, toRef, ref } from 'vue'
import RequestApi from '~/Api'
import router from '~/router'
import { LogError } from '~/utils/LogError'

import { useUserStore } from '~/store/user'
const userStore = useUserStore()

const formData = reactive({
  name: '',
  email: '',
  passWord: '',
})

//密码强度变化
let passWordRef = toRef(formData, 'passWord')

//密码强度变化
let passText = ref<string>('')
let passColor = ref<string>('')

//用户密码强度监听
watch(passWordRef, (value) => {
  let modes = 0
  let sValue = value
  //正则表达式验证符合要求的
  if (sValue.length < 1) return modes
  if (/\d/.test(sValue)) modes++ //数字
  if (/[a-z]/.test(sValue)) modes++ //小写
  if (/[A-Z]/.test(sValue)) modes++ //大写
  if (/\W/.test(sValue)) modes++ //特殊字符

  //逻辑处理
  switch (modes) {
    case 1:
      passText.value = '弱'
      passColor.value = 'red'
      break
    case 2:
      passText.value = '较弱'
      passColor.value = 'orange'
      break
    case 3:
      passText.value = '中'
      passColor.value = 'yello'
      break
    case 4:
      passText.value = '强'
      passColor.value = 'green'
      break
  }
})

//表单验证
const FormDataRef = ref<FormInstance>()
const checkRef = ref<boolean>(false)

const validatename = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else if (value !== formData.name) {
    callback(new Error('请输入正确信息'))
  } else {
    callback()
  }
}

const validateEmail = (rule: any, value: any, callback: any) => {
  const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  const emailRegValue = emailReg.test(formData.email)
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } else if (!emailRegValue) {
    callback(new Error('请输入正确信息'))
  } else {
    callback()
  }
}

const validatepassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (formData.passWord.length < 12) {
    callback(new Error('密码长度最少12位'))
  } else {
    callback()
  }
}

const rules = reactive({
  name: [{ validator: validatename, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  passWord: [{ validator: validatepassWord, trigger: 'blur' }],
})

function onSubmit(formEl: FormInstance | undefined) {
  // console.log(checkRef.value);
  if (!formEl) return
  if (!checkRef.value) {
    return LogError('请阅读用户协议')
  }
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        let res = await RequestApi.Register({
          email: formData.email,
          passWord: formData.passWord,
          name: formData.name,
        })
        if (res.code === 200) {
          userStore.setUserInfo(res.result)
          ElMessage({
            showClose: true,
            message: '注册成功',
            type: 'success',
          })
          formEl.resetFields()
          router.push({ path: '/home' })
        }
      } catch (e: any) {
        LogError('用户注册失败或邮箱已存在')
      }
    } else {
      LogError('注册失败')
      return false
    }
  })
}

function ForgetPassword() {
  router.push({ path: '/fpassword' })
}

function Login() {
  router.push({ path: '/login' })
}
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
  justify-content: center
  align-items: center
  &-items
    width: 223rem
    display: flex
    flex-flow: column
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
.form-button
  width: 223rem
  height: 27.5rem
  border-radius: 4rem
  background-color: #000000
  color: white

label
  display: inline-block
  height: 14.065rem
  font-family: RobotoRoman-Regular
  font-size: 12rem
  font-weight: normal
  line-height: 14.065rem
  letter-spacing: 0em
  color: #000000

.foot-navigation
  display: flex
  width: 100%
  justify-content: space-between
  &-blue
    color: blue
  &-blue:hover
    text-decoration: underline

.navigation-underline:hover
  text-decoration: underline

:deep(.el-input)
  height: 27.5rem
  border-radius: 2rem
  border: 0.5rem solid #4D4DDB
  margin-top: 6rem
.form-button:active
  transform: scale(0.98, 0.98)

:deep(.el-button)
  border:0
</style>

//750
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
    justify-content: center
    align-items: center
    &-items
      width: 446rem
      display: flex
      flex-flow: column
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
  .form-button
    width: 446rem
    height: 55rem
    border-radius: 8rem
    background-color: #000000
    color: white
  
  label
    display: inline-block
    height: 28.13rem
    font-family: RobotoRoman-Regular
    font-size: 24rem
    font-weight: normal
    line-height: 28.13rem
    letter-spacing: 0em
    color: #000000
  
  .foot-navigation
    display: flex
    width: 100%
    justify-content: space-between
    &-blue
      color: blue
    &-blue:hover
      text-decoration: underline
  
  .navigation-underline:hover
    text-decoration: underline
  
  :deep(.el-input)
    height: 55rem
    border-radius: 4rem
    border: 1rem solid #4D4DDB
    margin-top: 12rem
  .form-button:active
    transform: scale(0.98, 0.98)
  
  :deep(.el-button)
    border:0
  </style>
