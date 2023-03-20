import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

export function LogError(msg:string) {
  ElMessage({
    showClose: true,
    message: msg,
    type: 'error',
  })
}