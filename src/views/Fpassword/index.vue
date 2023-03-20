<template>
  <div class="logo">
    <img src="../../assets/img/Login/undraw_forgot_password.png" />
  </div>
  <div class="content">
    <div class="content-items">
      <div class="title">
        <div class="title-text">重置密码</div>
      </div>
      <div>
        <el-form  ref="FormDataRef" :model="formData" :rules="rules">
          <el-form-item prop="email">
            <label for="email">邮箱</label>
            <el-input v-model="formData.email" id="email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="form-button" type="primary" @click="onSubmit(FormDataRef)">发送</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div class="foot-navigation"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus/es/components/form';
import ElMessage from 'element-plus/es/components/message';
import { reactive, ref } from 'vue'
import RequestApi from '~/Api'
import router from '~/router'
import { LogError } from '~/utils/LogError';

import { useUserStore } from '~/store/user'
const userStore = useUserStore()

//表单验证
let FormDataRef = ref<FormInstance>()
let formData = reactive({
  email:''
})

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

const rules = reactive({
  email: [{ validator: validateEmail, trigger: 'blur' }],
})

function onSubmit(formEl: FormInstance | undefined){
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        let res = await RequestApi.getUserInfo({
          email: formData.email
        })
        console.log("🚀 ~ file: index.vue ~ line 64 ~ formEl.validate ~ res", res)
        if (res.code === 200) {        
          userStore.setUserId(res.result)
          formEl.resetFields()
          router.push({ path: '/rpassword' })
        }
      } catch (e: any) {
        LogError('没有该用户')
      }
    } else {
      LogError('信息有误')
      return false
    }
  })
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
    width: 336.5rem
    height: 223.5rem
.content
  width:50%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  &-items
    display: flex
    justify-content: center
    flex-flow: column
    width: 223rem
    .title
      width: 192rem
      margin-bottom: 19.75rem
      &-text
        text-align: center
        font-family: RobotoRoman-Medium
        font-size: 16rem
        font-weight: normal
        line-height:19.75rem
        letter-spacing: 0em
        color: #000000
.form-button
  width: 223rem
  height: 27.5rem
  border-radius: 4rem
  margin: 12rem 0
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
