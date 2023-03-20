import { PathParams, rest } from 'msw'
import { optionsConfig } from '~/netWork'

//接口类型
interface loginBody{
  email:string,
  password:string,
  isCheck:boolean
}

interface registerBody{
  name:string,
  email:string,
  password:string,
  isCheck:boolean
}

interface personInfoBody{
  id:string,
  avatarUrl:string | undefined,
  name:string,
  email:string,
  birth:string,
  phone:string,
  sex:string
}

interface rpasswordBody{
  id:string,
  passWord:string
}

interface Response {
  code:string,
  msg:string,
  result:string
}


//用户数据
interface userListType{
  id:string,
  email:string,
  passWord:string,
  data:any | null
}

const userList:Array<userListType> =[
  {
    id:'0',
    email:'123456@163.com',
    passWord:'123456',
    data:{
      avatarUrl:'',
      name:'admin',
      birth:'1999年8月12日',
      phone:'18645017299',
      sex:'女'
    }
  }
]

export const handlers = [
  //用户登录接口
  rest.post<loginBody, Response>('/api/user/login', async (req, res, ctx) => {
    const { email,passWord,isCheck } = await req.json()
    const data =  userList.find(item=>item.email === email && item.passWord === passWord) || null
    if(data !== null) {
      if(isCheck){
        return res(
          ctx.status(200),
          ctx.cookie('auth-token', JSON.stringify({email,passWord})),
          ctx.json({
            code:200,
            msg:'登录成功',
            result:{id:data.id,data:data.data}
          })
        )
      }else{
        return res(
          ctx.status(200),
          ctx.cookie('auth-token', 'abc-123'),
          ctx.json({
            code:200,
            msg:'登录成功',
            result:{id:data.id,data:data.data}
          })
        )
      }
    }else{
      return res(
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'参数错误',
          result:null
        })
      )
    }
  }),

  //用户注册接口
  rest.post<registerBody, Response>('/api/user/register',async(req,res,ctx)=>{
    const { name,email,passWord } = await req.json()
    let isExist = userList.some(item=>item.email === email)
    console.log("🚀 ~ file: handlers.ts ~ line 99 ~ rest.post<registerBody,Response> ~ isExist", isExist)
    if(isExist){
      return res(
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'邮箱地址已注册',
          result:null
        })
      )
    }else{
      userList.push({
        id:userList[length].id + 1,
        email,
        passWord,
        data:{
          name
        }
      } as userListType)
      const data =  userList.find(item=>item.email === email && item.passWord === passWord) || null
      if(data){
        return res(
          ctx.status(200),
          ctx.json({
            code:200,
            msg:'注册成功',
            result:data.data
          })
        )
      }else{
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'参数错误',
          result:null
        })
      }
    }
  }),

//重置用户密码
rest.post<rpasswordBody, Response>('/api/user/rpassword',async(req,res,ctx)=>{
      const { id,passWord } = await req.json()
      console.log("🚀 ~ file: handlers.ts ~ line 144 ~ rest.post<{id:number,passWord:string},Response> ~ id,passWord", id,passWord)
      const data = userList.find(item => item.id === id)
      console.log("🚀 ~ file: handlers.ts ~ line 151 ~ rest.post<rpasswordBody,Response> ~ data", data)
      if(data){
        data.passWord = passWord
        userList[id] = data
        // console.log("🚀 ~ file: handlers.ts ~ line 153 ~ rest.post<rpasswordBody,Response> ~ userList", userList)
        return res(
          ctx.status(200),
          ctx.json({
            code:200,
            msg:'重置密码成功',
            result:null
          })
        )
      }else{
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'参数错误',
          result:null
        })
      }
    }),

  //用户信息注册
  rest.post<personInfoBody, Response>('/api/user/personInfo',async(req,res,ctx)=>{
    const { id,avatarUrl,name,email,birth,phone,sex } = await req.json()
    let isExist = userList.some(item=>item.email === email)
    if(isExist){
      return res(
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'邮箱地址已注册',
          result:null
        })
      )
    }else{
      const dataIndex =  userList.find(item=>item.id === id)!
      dataIndex.email = email
      dataIndex.data.avatarUrl = avatarUrl
      dataIndex.data.name = name
      dataIndex.data.birth = birth
      dataIndex.data.phone = phone
      dataIndex.data.sex = sex
      userList[id] = dataIndex
      const data =  userList.find(item=>item.id === id) || null
      if(data){
        return res(
          ctx.status(200),
          ctx.json({
            code:200,
            msg:'注册成功',
            result:data.data
          })
        )
      }else{
        ctx.status(300),
        ctx.json({
          code:300,
          msg:'参数错误',
          result:null
        })
      }
    }
  }),

//获取用户账号信息
  rest.post('/api/user/getUserInfo',async (req,res,ctx)=>{
    const { email } = await req.json()
    const data =  userList.find(item=>item.email === email) || null
    if(data){
      return res(
        ctx.status(200),
        ctx.json({
          code:200,
          msg:'获取用户成功',
          result:{
            id:data.id
          }
        })
      )
    }else{
      ctx.status(300),
      ctx.json({
        code:300,
        msg:'参数错误',
        result:null
      })
    }
    })
]