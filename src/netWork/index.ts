import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface optionsConfig{
  url:string,
  method:string,
  data?:object,
  params?:object
  options?:any
}

const service = axios.create({
  baseURL:'/api',
  timeout:5000,
  withCredentials:true
})

service.interceptors.request.use((config:AxiosRequestConfig)=>{
  return config
},(err)=>{
  return Promise.reject(err)
})

service.interceptors.response.use((res:AxiosResponse)=>{
  return res.data;
},(err:any)=>{
  return Promise.reject(err);
}
)

function Request(options:optionsConfig){
  // console.log("🚀 ~ file: index.ts ~ line 31 ~ Request ~ options", options)
  const { method = 'GET' } = options
  if(method === 'GET' || method === 'get'){
    options.params = options.data
  }
  return service.request(options)
}

export default Request


