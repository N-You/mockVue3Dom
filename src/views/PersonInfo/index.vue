<template>
  <div class="logo">
    <img src="../../assets/img/Login/undraw_profile_data.png" />
  </div>
  <div class="content">
    <div class="content-items">
      <div class="title">
        <div class="title-text">用户资料完善</div>
      </div>
      <div>
        <div class="canvasBox">
          <img
            class="canvasBox-icon"
            src="../../assets/img/Login/clarity_note.png"
          />
          <canvas @click="GetImg" id="canvas"></canvas>
        </div>
        <el-form ref="FormDataRef" :rules="rules" :model="formData">
          <el-form-item prop="name">
            <label for="name">姓名</label>
            <el-input id="name" v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <label for="email">邮箱</label>
            <el-input id="email" v-model="formData.email"></el-input>
          </el-form-item>
          <el-form-item prop="birth">
            <label for="birthday">生日</label>
            <el-date-picker
              v-model="formData.birth"
              type="date"
              placeholder=" "
            />
          </el-form-item>
          <el-form-item prop="phone">
            <label for="phone">手机号码</label>
            <el-input id="phone" v-model="formData.phone">
              <template #prefix>
                <div class="cute" :class="isPhone ? 'isgreen' : ''"></div>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="sex">
            <label for="sex">性别</label>
            <el-select v-model="formData.sex" placeholder=" ">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button class="form-button" type="primary" @click="onSubmit(FormDataRef)"
              >发送</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="foot-navigation"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus/es/components/form'
import { ref, onUnmounted, reactive } from 'vue'
import RequestApi from '~/Api'
import router from '~/router'
import { LogError } from '~/utils/LogError';
import { useUserStore } from '~/store/user'
import { ElMessage } from 'element-plus';
import { dateFormat } from '~/plugins/formData'

const userStore = useUserStore()

const isPhone = ref<boolean>(false)

const formData = reactive({
  name: '',
  email: '',
  birth: '',
  avatarUrl: '',
  phone: '',
  sex: '',
})

const options = reactive([
  {
    value: '0',
    label: '男',
  },
  {
    value: '1',
    label: '女',
  },
])

//接收创建的input
let inputElement = ref<HTMLElement>()

//创建input标签实现上传功能
function GetImg() {
  inputElement.value = document.createElement('input')
  inputElement.value.setAttribute('type', 'file')
  inputElement.value.style.display = 'none'
  inputElement.value.addEventListener('change', uploadImage, false)
  inputElement && document.body.appendChild(inputElement.value as any)
  inputElement.value.click()
}

function uploadImage(e: any) {
  const reader = new FileReader()
  reader.readAsDataURL(e.target.files[0])
  reader.onload = function (evt: any) {
    // console.log(evt.target.result)
    let image = new Image()
    image.src = evt.target.result
    let canvas: any = document.querySelector('#canvas')
    let context = canvas.getContext('2d')
    image.onload = function () {
      formData.avatarUrl = evt.target.result
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }
}

//表单验证
const FormDataRef = ref<FormInstance>()

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

const validatePhone = (rule: any, value: any, callback: any) => {
  const PhoneReg =
    /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
  const PhoneRegValue = PhoneReg.test(formData.phone)
  if (PhoneRegValue) isPhone.value = true
  if (value === '') {
    isPhone.value = false
    callback(new Error('请输入手机号'))
  } else if (!PhoneRegValue) {
    isPhone.value = false
    callback(new Error('请输入正确信息'))
  } else {
    callback()
  }
}

const rules = reactive({
  name: [{ validator: validatename, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  phone: [{ validator: validatePhone, trigger: 'blur' }],
})

function onSubmit(formEl: FormInstance | undefined) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        console.log('formData',formData,dateFormat(formData.birth));
        
        let res = await RequestApi.UserInfo({
          id:userStore.getUserId()?.toString(),
          email: formData.email,
          avatarUrl: formData.avatarUrl,
          name: formData.name,
          birth:dateFormat(formData.birth).toString(),
          phone:formData.phone,
          sex:formData.sex
        })
        if (res.code === 200) {
          // console.log('res.result',res.result);
          userStore.setUserInfo(res.result)
          ElMessage({
            showClose: true,
            message: '注册成功',
            type: 'success',
          })
          formEl.resetFields()
          formData.avatarUrl = ''
          router.push({ path: '/home' })
        }
      } catch (e: any) {
        LogError('用户信息注册失败')
      }
    } else {
      LogError('注册失败')
      return false
    }
  })
}

//销毁节点事件，防止泄漏
onUnmounted(() => {
  document.body.removeChild(inputElement.value as any)
  inputElement.value?.removeEventListener('change', uploadImage)
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
      display: flex
      justify-content: center
      &-text
        text-align: center
        font-family: RobotoRoman-Medium
        font-size: 16rem
        font-weight: normal
        line-height: 18.75rem
        letter-spacing: 0em
        color: #000000
.avatar
  width: 100%
  height: 100%
  overflow: hidden
.form-button
  width: 88.5rem
  height: 27.5rem
  border-radius: 4rem
  background-color: #000000
  color: white
  margin-left: 50%
  transform: translateX(-50%)

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

.canvasBox
  width: 100%
  position: relative
  height: 80rem
  &-icon
    position: absolute
    width: 18rem
    height: 18rem
    bottom: 5rem
    right: 35%
    z-index: 999
#canvas
  width: 71rem
  height: 80rem
  margin-button: 30rem
  border-radius:50%
  margin-left: 50%
  transform: translateX(-50%)
  background: url("../../assets/img/Login/ant-design_user-outlined.png") no-repeat
  background-size: 100% 100%
  background-color: #F7F7F7

.cute
  width:10rem
  height:10rem
  border:1px solid
  border-radius:50%
  background-color: red
.isgreen
  background-color: green

:deep(.el-button)
  border:0
:deep(.el-upload)
  width: 77.5rem
  height: 77.5rem
  border-radius: 50%
:deep(.el-select)
  height: 27.5rem
  border-radius: 2rem
</style>

//750px
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
      width: 673rem
      height: 447rem
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
        display: flex
        justify-content: center
        &-text
          text-align: center
          font-family: RobotoRoman-Medium
          font-size: 35rem
          font-weight: normal
          line-height: 37.5rem
          letter-spacing: 0em
          color: #000000
  .avatar
    width: 100%
    height: 100%
    overflow: hidden
  .form-button
    width: 117rem
    height: 55rem
    border-radius: 8rem
    background-color: #000000
    color: white
    margin-left: 50%
    transform: translateX(-50%)
  
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
  
  .canvasBox
    width: 100%
    position: relative
    height: 160rem
    &-icon
      position: absolute
      width: 36rem
      height: 36rem
      bottom: 10rem
      right: 35%
      z-index: 999
  #canvas
    width: 142rem
    height: 160rem
    margin-button: 60rem
    border-radius:50%
    margin-left: 50%
    transform: translateX(-50%)
    background: url("../../assets/img/Login/ant-design_user-outlined.png") no-repeat
    background-size: 100% 100%
    background-color: #F7F7F7
  
  .cute
    width:20rem
    height:20rem
    border:2px solid
    border-radius:50%
    background-color: red
  .isgreen
    background-color: green
  
  :deep(.el-button)
    border:0
  :deep(.el-upload)
    width: 155rem
    height: 155rem
    border-radius: 50%
  :deep(.el-select)
    height: 55rem
    border-radius: 4rem
  </style>
