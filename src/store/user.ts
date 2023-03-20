import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user',()=>{

  function setUserInfo(data:any){
    localStorage.setItem('userInfo',JSON.stringify(data))
  }

  function getUserInfo(){
    return JSON.parse(localStorage.getItem('userInfo')!)
  }

  function setUserId(data:any){
    console.log("🚀 ~ file: user.ts ~ line 15 ~ setUserId ~ data", data)
    localStorage.setItem('userId',JSON.stringify(data?.id))
  }

  function getUserId(){
    return JSON.parse(localStorage.getItem('userId')!)
  }
  return{

    setUserInfo,
    getUserInfo,
    setUserId,
    getUserId
  }
})