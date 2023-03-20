import Request from "~/netWork";

 interface Rsponse{
  code:number,
  msg:string,
  result:any | null 
}

class RequestApi {
  static async Login(data:any):Promise<Rsponse>{
    try {
      let res = await Request({
        url: '/user/login',
        method: 'post',
        data,
      })
      return res as unknown as Rsponse
    } catch (e:any) {
      return Promise.reject('获取失败')
    }
  }

  static async Register(data:any):Promise<Rsponse>{
    try {
      let res = await Request({
        url: '/user/register',
        method: 'post',
        data,
      })
      return res as unknown as Rsponse
    } catch (e:any) {
      return Promise.reject('获取失败')
    }
  }

  static async UserInfo(data:any):Promise<Rsponse>{
    console.log("🚀 ~ file: index.ts ~ line 37 ~ RequestApi ~ UserInfo ~ data", data)
    try {
      let res = await Request({
        url: '/user/personInfo',
        method: 'post',
        data,
      })
      return res as unknown as Rsponse
    } catch (e:any) {
      return Promise.reject('获取失败')
    }
  }

  static async Rpassword(data:any):Promise<Rsponse>{
    // console.log("🚀 ~ file: index.ts ~ line 50 ~ RequestApi ~ Rpassword ~ data", data)
    try {
      let res = await Request({
        url: '/user/rpassword',
        method: 'post',
        data,
      })
      return res as unknown as Rsponse
    } catch (e:any) {
      return Promise.reject('获取失败')
    }
  }

  static async getUserInfo(data:any):Promise<Rsponse>{
    try {
      let res = await Request({
        url: '/user/getUserInfo',
        method: 'post',
        data,
      })
      return res as unknown as Rsponse
    } catch (e:any) {
      return Promise.reject('获取失败')
    }
  }
}

export default RequestApi