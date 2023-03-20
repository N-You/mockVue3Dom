<template>
  <div class="footer">
    <div class="text">
      <div class="text-logo">
        <img src="../../../assets/img/Home/Logo.png" alt="">
      </div>
      <div class="text-info">
        <div class="text-info-one">祝你的工作能被项目组认同</div>
        <div class="text-info-two">chances@gmail.com</div>
        <div class="text-info-three">400-669-0559</div>
        <div class="text-info-four">欢迎来电咨询</div>
      </div>
    </div>
    <div class="content">
      <div class="nav">
      <div class="nav-one">
        <div class="nav-one-one">站内导航</div>
        <div class="nav-one-two">关于创思</div>
        <div class="nav-one-three">常见问题</div>
        <div class="nav-one-four">岗位展示</div>
        <div class="nav-one-five">薪资说明</div>
      </div>
      <div class="nav-two">
        <div class="nav-two-one">工作分类</div>
        <div class="nav-two-two">java工程师</div>
        <div class="nav-two-three">UI/UX工程师</div>
        <div class="nav-two-four">UI/UX工程师</div>
        <div class="nav-two-five">行政管理</div>
      </div>
    </div>
    <div class="text-button">
      <div class="text-button-text">信息提交</div>
      <div class="text-button-input">
        <input class="text-button-input-input" placeholder="邮箱" type="text">
        <div class="text-button-input-button">提交</div>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
$paddingSize:0 73rem 0 65rem
.footer
  height: 904rem
  width: 100%
  background: url("../../../assets/img/Home/Footer.png") no-repeat
  background-size: 100% 100%
  box-sizing: border-box
  padding-top: 241rem
  padding-bottom: 350.88rem
  padding: $paddingSize
  display: flex
  flex-flow: wrap
  align-items: center
  font-family: RobotoRoman-Regular
  font-size: 24rem
  font-weight: normal
  line-height: 28.13rem
  letter-spacing: 0em
  color: #FFFFFF
  @media screen and (max-width: 1286px)
        padding-right: 0
  .text
    width: 288rem
    height: 143.88rem
    margin-bottom: 350.88rem
    @media screen and (max-width: 1286px)
        margin-top: 241rem
        margin-bottom: 0
    &-logo
      width: 270rem
      height: 95rem
      img
        width: 100%
        height: 100%
    &-info
      display: flex
      flex-flow: column
      &-one
        margin: 17rem 0
      &-two
        margin: 31.8rem 0
      &-three
        margin: 23.8rem 0
      &-four
        margin: 31.88rem 0
  .content
    width: 791rem
    height: 256.12rem
    margin-left: 290rem
    display: flex
    flex-flow: warp
    @media screen and (max-width: 1286px)
        margin-bottom: 350.88rem
        margin-left: 390rem
    .nav
      display: flex
      flex-flow: wrap
      &-one
        margin-right: 66rem
        display: flex
        flex-flow: column
        &-one
          font-size: 32rem
        &-two
          margin: 34.5rem 0
        &-three
          margin: 23.88rem 0
        &-four
          margin: 23.88rem 0
      &-two
        display: flex
        flex-flow: column
        &-one
          font-size: 32rem
        &-two
          margin: 34.5rem 0
        &-three
          margin: 23.88rem 0
        &-four
          margin: 23.88rem 0
    .text-button
      margin-left: 39rem
      &-text
        font-family: RobotoRoman-Medium
        font-size: 32rem
        font-weight: normal
        line-height: 37.5rem
        letter-spacing: 0em
        color: #FFFFFF
        margin-bottom: 34.5rem
      &-input
        display: flex
        width: 348rem
        height: 55rem
        border: 1rem solid #FFFFFF
        margin-left: 33rem
        border-radius: 7rem
        box-sizing: border-box
        border: 1rem solid #FFFFFF
        &-input
          width: 220rem
          height: 100%
          border:0
        &-button
          width: 122rem
          height: 55rem
          display: flex
          justify-content: center
          align-items: center
          border-radius: 4rem
          background: #4D4DDB
</style>