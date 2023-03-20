<template>
  <div class="logo">
    <img src="../../assets/img/Login/undraw_my_password.png" />
  </div>
  <div class="content">
    <div class="content-items">
      <div class="title">
        <div class="title-text">重置密码</div>
      </div>
      <div>
        <el-form ref="FormDataRef"
          :rules="rules"
          :model="formData">
          <el-form-item prop="passWord">
            <label for="email">密码</label>
            <el-input :show-password="true" v-model="formData.passWord" id="email"></el-input>
          </el-form-item>
          <el-form-item prop="rpassWord">
            <label for="email">重复密码</label>
            <el-input :show-password="true" v-model="formData.rpassWord" id="email"></el-input>
          </el-form-item>
          <el-form-itme>
            <span>密码强度</span
            ><span v-show="formData.passWord.length !== 0"
              >:<span :style="{ color: passColor }">{{ passText }}</span></span
            >
          </el-form-itme>
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
import { reactive, ref, toRef, watch } from 'vue'
import RequestApi from '~/Api'
import router from '~/router'
import { LogError } from '~/utils/LogError';
import { ElMessage } from 'element-plus';
import { useUserStore } from '~/store/user'

const userStore = useUserStore()

const formData = reactive({
  passWord: '',
  rpassWord:''
})

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

const validatepassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (formData.passWord.length < 12) {
    callback(new Error('密码长度最少12位'))
  } else {
    callback()
  }
}

const validateRpassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== formData.passWord) {
    callback(new Error("密码不同"))
  } else {
    callback()
  }
}

const rules = reactive({
  rpassWord: [{ validator: validateRpassWord, trigger: 'blur' }],
  passWord: [{ validator: validatepassWord, trigger: 'blur' }],
})

function onSubmit(formEl: FormInstance | undefined){
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      console.log(userStore.getUserId());
      try {
        let res = await RequestApi.Rpassword({
          id:userStore.getUserId(),
          passWord: formData.passWord,
        })
        // console.log("🚀 ~ file: index.vue ~ line 124 ~ formEl.validate ~ res", res)
        if (res.code === 200) {
          ElMessage({
            showClose: true,
            message: '重置密码成功',
            type: 'success',
          })
          formEl.resetFields()
          router.push({ path: '/login' })
        }
      } catch (e: any) {
        LogError('修改密码失败')
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
    width: 246.73rem
    height: 240.425rem
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
        line-height: 18.75rem
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
      width: 493.46rem
      height: 480.85rem
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
      width: 446rem
      .title
        width: 384rem
        margin-bottom: 39.5rem
        &-text
          text-align: center
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
    margin: 24rem 0
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

