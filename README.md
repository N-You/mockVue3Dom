## 技能测试
主要使用了 Typescript,sass,element plus，Vue3全家桶-pinia，Mock service worker，axios，canvas
 > 页面做了 720px 1296px 1152px 1008px 864px屏幕宽度的适配
 > 大概时间为：2天左右

 > gitee地址：https://gitee.com/lqy757628817/ChuangS-test.git

  打包后的文件可通过 
 > node server.js 启动

## Mock接口
### 用户登录接口
 > '/api/user/login'
- method:'post'
- params:'email,passWord,isCheck'
 > isCheck 记住我，这个选中只能搞将密码保存到了cookie中

### 用户注册接口
 > '/api/user/register'
- method:'post'
- params:'name,email,passWord'
### 用户信息注册
 > '/api/user/personInfo'
- method:'post'
- params:'id,avatarUrl,name,email,birth,phone,sex'
### 重置用户密码
 > '/api/user/rpassword'
- method:'post'
- params:'id,passWord'
### 获取用户账号信息
 > '/api/user/getUserInfo' 由于email使用get会转换，直接使用了“post方式”
- method:'post'
