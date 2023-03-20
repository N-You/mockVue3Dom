<template>
  <div class="contain">
    <div class="contain-one">
      <div class="contain-one-content">
        <div class="contain-one-content-text">
          <div>
            <el-row>
              <el-col :span="24">
                <div class="contain-one-content-text-title1">269+ 岗位需求</div>
              </el-col>
              <el-col :span="24">
                <div class="contain-one-content-text-title2">
                  预祝你在创思信息找到心仪工作
                </div>
              </el-col>
              <el-col :span="24">
                <div class="contain-one-content-text-text">
                  创思信息以“工匠精神”推动产业互联网升级，推动政府事务单位业务处理自动化，助力工业4.0转型升级！
                </div>
              </el-col>
              <el-col :span="24">
                <div class="searchWork">查看岗位</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="contain-two">
      <div class="contain-two-button">
        <div class="FormSearch">
          <input placeholder="输入岗位关键字"/>
        </div>
        <div class="FormLocation">
          <div>位置</div>
        </div>
        <div class="FormCatagory">
          <div>分类</div>
        </div>
        <div class="FormSelect">
          <div>选择岗位信息</div>
        </div>
        <div class="FormJob">
          <div>找工作</div>
        </div>
      </div>
      <div class="contain-two-example">
        <div class="FormHot">最近搜索热词:</div>
        <div class="FormJava">
          <div>JAVA工程师</div>
        </div>
        <div class="FormWeb">
          <div>web后端工程师</div>
        </div>
        <div class="FormUI">
          <div>UI/UX</div>
        </div>
        <div class="FormProgran">
          <div>行政管理</div>
        </div>
      </div>
    </div>
    <div class="contain-three">
      <div class="contain-three-left">
        <div class="contain-three-left-left">
          <img src="../../../assets/img/Home/Writer1.png" alt="">
          <img src="../../../assets/img/Home/Writer2.png" alt="">
        </div>
        <div class="contain-three-left-right">
          <img src="../../../assets/img/Home/Writer3.png" alt="">
          <img src="../../../assets/img/Home/Writer4.png" alt="">
        </div>
      </div>
      <div class="contain-three-right">
        <div class="title">创思竞争优势</div>
        <div class="content">创思信息科技发展有限公司成立于2000年，是国内智慧政务、智慧企业、智慧社区及智慧生活领域的信息化综合服务提供商，主要致力于为政企客户、社会团体和个人提供集软件开发、系统集成、IT运维、平台建设等于一体的信息化综合解决方案。 创思信息注重跟踪最新技术发展趋势，在大数据、云计算、移动互联网、人工智能、云移动设备等领域都已创建了多个具有自主知识产权且处于国内领先地位的核心技术平台。</div>
      </div>
    </div>
    <div class="contain-four">
      <div class="contain-four-left">
        <div class="title">创思团队建设</div>
        <div class="content">获得工信部计算机系统集成壹级资质，通过ISO020000 IT服务管理体系认证，通过软件能力成熟度模型CMMI 5级认证，通过ISO27001信息安全管理系统认证，通过ISO14001国际环境管理系统认证，通过ITSS信息技术服务运行维护标准认证，获得专利技术1200余项，自有知识产权框架平台8个，获得软件著作权2500多个。创思信息现有员工530余人，其中：博士生100余人，研究生200余人，专业技术人才230余人。公司总部位于湖南长沙，下设杭州分公司、北京分公司、广州分公司、海口分公司、西安分公司、湘潭分公司及办事处。</div>
      </div>
      <div class="contain-four-right">
        <div class="contain-four-right-left">
          <img src="../../../assets/img/Home/Card1.png" alt="">
          <img src="../../../assets/img/Home/Card2.png" alt="">
        </div>
        <div class="contain-four-right-right">
          <img src="../../../assets/img/Home/Card3.png" alt="">
          <img src="../../../assets/img/Home/Card4.png" alt="">
        </div>
      </div>
    </div>
    <div class="contain-five">
      <div class="contain-five-left">
        <div class="title">你是不是想在创思找工作?</div>
        <div class="content">我们在线上为您安排了200多个工作岗位，欢迎你咨询！您可查询本网，可快速了解现有岗位情况。</div>
        <div>
          <div class="button">岗位展示</div>
        </div>
      </div>
      <div class="contain-five-right">
        <div class="title">你是不是想在平台发布工作？</div>
        <div class="content">人力资源部、部门经理、项目经理，都可以在此平台发布工作了哦，欢迎试用！</div>
        <div>
          <div class="button">发布工作</div>
        </div>
      </div>
    </div>
    <div class="contain-six">
      <div class="contain-six-left"></div>
      <div class="contain-six-right">
        <div class="title">用户评价</div>
        <div class="content">“UI小姐姐在此提示现在正在制作这个页面的各位前端朋友，希望你能顺利通过测试，取得较好的成绩，不要忘记哦，这个页面需要做自适应，请按f12进入开发者模式，适配不同的屏幕大小。这个千万不要忘记哦。另外按钮动作，浮动动画也可以有哦。相信你，加油！”</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
$paddingSize:0 73rem 0 65rem
@mixin flex-center 
  display: flex
  justify-content: center
  align-items: center
.contain
  display: flex
  flex-flow: column
  margin-top:100rem
.contain-one
  padding: $paddingSize
  box-sizing: border-box
  width: 100%
  height: 804rem
  background: url("../../../assets/img/Home/Navbar1.png") no-repeat
  background-size: 100% 100%
  &-content
    height: 499rem
    &-text
      font-family: RobotoRoman-Regular
      color: #FFFFFF
      height: 100%
      display: flex
      align-items: center
      &-title1
        margin-top: 100rem
        font-size: 48rem
        font-weight: normal
        line-height: 56.25rem
        letter-spacing: 0em
      &-title2
        margin: 31.75rem 0 32.38rem 0
        font-size: 56rem
        font-weight: normal
        line-height: 65.63rem
        letter-spacing: 0em
      &-text
        margin-top: 37.38rem
        width: 528rem,
        height: 140.62rem
        font-size: 24rem
        font-weight: normal
        line-height: 28.13rem
        letter-spacing: 0em
      .searchWork
        color: white
        width: 144rem
        height: 51rem
        display: flex
        justify-content: center
        align-items: center
        border-radius: 8rem
        background: #000000
        border:0
      .searchWork:active
        transform: scale(0.98, 0.98)
.contain-two
  padding: $paddingSize
  box-sizing: border-box
  width: 1085rem
  height: 118rem
  display: flex
  flex-flow: column
  margin: 0 auto
  margin-bottom: 54rem
  font-family: RobotoRoman-Regular
  font-size: 20rem
  font-weight: normal
  line-height: 23.44rem
  letter-spacing: 0em
  &-button
    width: 100%
    display: flex
    align-items: center
    .FormSearch
      width: 220rem
      height: 55rem
      @include flex-center
      border-radius: 8rem
      box-sizing: border-box
      border: 1rem solid #4D4DDB
      overflow: hidden
      margin-right: 27rem
      input
        text-align: center
        width: 100%
        height: 100%
        border: 0
        font-family: RobotoRoman-Regular
        font-size: 20rem
        font-weight: normal
        line-height: 23.44rem
        letter-spacing: 0em
    .FormLocation
      width: 120rem
      height: 55rem
      @include flex-center
      border-radius: 8rem
      box-sizing: border-box
      border: 1rem solid #4D4DDB
      margin-right: 62rem
    .FormCatagory
      width: 154rem
      height: 55rem
      @include flex-center
      border-radius: 8rem
      box-sizing: border-box
      border: 1rem solid #4D4DDB
      margin-right: 65rem
    .FormSelect
      width: 234rem
      height: 55rem
      @include flex-center
      border-radius: 8rem
      box-sizing: border-box
      border: 1rem solid #4D4DDB
      margin-right: 62rem
    .FormJob
      width: 140rem
      height: 55rem
      @include flex-center
      border-radius: 8rem
      background: #2A2AD1
      color: white
  &-example
    margin-top: 24rem
    width: 100%
    display: flex
    align-items: center
    .FormHot
      color: #000000
      margin-right: 37rem
    .FormJava
      width: 189rem
      height: 39rem
      @include flex-center
      border-radius: 4rem
      background: #4D4DDB
      margin-right: 8rem
      color: white
    .FormWeb
      width: 217rem
      height: 39rem
      display: flex
      @include flex-center
      background: #4D4DDB
      margin-right: 9rem
      color: white
    .FormUI
      width: 133rem
      height: 39rem
      @include flex-center
      border-radius: 4rem
      background: #4D4DDB
      margin-right: 23rem
      color: white
    .FormProgran
      width: 160rem
      height: 39rem
      @include flex-center
      border-radius: 4rem
      background: #4D4DDB
      color: white
.contain-three
  padding: $paddingSize
  box-sizing: border-box
  height: 946rem
  width: 100%
  padding-top: 292rem
  box-sizing: border-box
  background: url("../../../assets/img/Home/Popular.png") no-repeat
  background-size: 100% 100%
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  &-left
    width:50%
    display: flex
    flex-flow: wrap
    &-left
      display: flex
      flex-flow: column
      margin-right: 15rem
      img
        margin-bottom: 55rem
    &-right
      display: flex
      flex-flow: column
      margin-top: 55rem
      img
        margin-bottom: 55rem
  &-right
    width:50%
    display: flex
    flex-flow: column
    .title
      width: 417rem
      height: 70rem
      font-family: RobotoRoman-Medium
      font-size: 48rem
      font-weight: normal
      line-height: 56.25rem
      letter-spacing: 0em
      color: #FFFFFF
    .content
      width: 575rem
      height: 253rem
      font-family: RobotoRoman-Regular
      font-size: 16rem
      font-weight: normal
      line-height: 28rem
      letter-spacing: 0em
      color: #FFFFFF
.contain-four
  padding: $paddingSize
  box-sizing: border-box
  width:100%
  height: 496rem
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  &-left
    width:50%
    display: flex
    flex-flow: column
    margin-top: 84rem
    .title
      width: 417rem
      height: 70rem
      font-family: RobotoRoman-Medium
      font-size: 48rem
      font-weight: normal
      line-height: 56.25rem
      letter-spacing: 0em
    .content
      width: 575rem
      height: 253rem
      font-family: RobotoRoman-Regular
      font-size: 16rem
      font-weight: normal
      line-height: 28rem
      letter-spacing: 0em
  &-right
    width: 50%
    display: flex
    flex-flow: wrap
    &-left
      display: flex
      flex-flow: column
      margin-right: 15rem
      img
        margin-bottom: 55rem
    &-right
      display: flex
      flex-flow: column
      margin-top: 55rem
      img
        margin-bottom: 55rem
.contain-five
  display: flex
  justify-content: center
  align-items: center
  padding: $paddingSize
  box-sizing: border-box
  height: 1122rem
  background: url("../../../assets/img/Home/Looking.png") no-repeat
  background-size: 100% 100%
  &-left
    display: flex
    align-content: space-between
    flex-flow: column
    width: 558rem
    height: 244rem
    border-radius: 8rem
    margin-right: 81rem
  &-right
    display: flex
    align-content: space-between
    flex-flow: column
    width: 558rem
    height: 244rem
    border-radius: 8rem
  .title
    height: 70rem
    font-family: RobotoRoman-Medium
    font-size: 36rem
    font-weight: normal
    line-height: 42.19rem
    letter-spacing: 0em
    color: #FFFFFF
  .content
    width: 558rem
    height: 70rem
    font-family: RobotoRoman-Regular
    font-size: 20rem
    font-weight: normal
    line-height: 23.44rem
    letter-spacing: 0em
    color: #FFFFFF
  .button 
    width: 144rem
    height: 51rem
    @include flex-center
    padding: 16rem 40rem
    border-radius: 8rem
    background: #000000
    font-family: RobotoRoman-Medium
    font-size: 16rem
    font-weight: normal
    line-height: 18.75rem
    letter-spacing: 0em
    color: #FFFFFF
    z-index: 0
.contain-six
  padding: $paddingSize
  box-sizing: border-box
  width:100%
  margin-top: -30rem
  height: 614rem
  display: flex
  &-left
    width: 50%
    height: 100%
    background: url("../../../assets/img/Home/Image.png") no-repeat
    background-size: 100% 100%
  &-right
    width: 50%
    .title
      width: 290rem
      height: 70rem
      font-family: RobotoRoman-Medium
      font-size: 48rem
      font-weight: normal
      line-height: 56.25rem
      letter-spacing: 0em
      color: #000000
    .content
      margin-top: 32rem
      width: 650rem
      height: 253rem
      font-family: RobotoRoman-Regular
      font-size: 20rem
      font-weight: normal
      line-height: 23.44rem
      letter-spacing: 0em
      color: #000000
img
  width: 305rem
  height:193rem
</style>

