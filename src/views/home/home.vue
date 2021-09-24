<template>
  <div class="home">
    <home-header class="home_header">首页头部内容</home-header>
    <div class="home_body">
      <el-carousel :interval="5000" class="home_body_carousel">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <img :src="item" class="home_body_slider" />
        </el-carousel-item>
      </el-carousel>
      <div class="home_body_show fl-r">
        <img src="../../assets/images/show_1.jpg" class="home_body_show_img" />
        <div class="home_body_show_describe">
          <div class="home_body_show_describe_title">安全第一</div>
          <div class="home_body_show_describe_subtitle">SAFETY FIRST</div>
          <div class="home_body_show_describe_line" />
          <div class="home_body_show_describe_word">
            芒果电单车采用新日国标车车型，车身自重不大于40千克，最高速度不
            超过15km/h，为行驶安全提供保障；车辆配置了缓加速装置，
            有效避免您误操作出现“飞车”现象；设置用户筛选机制，不支持16岁
            以下低龄和65岁以上高龄老人用车，降低用车风险。提高你的骑行安全，
            是芒果电单车不断为之努力的重要课题。
          </div>
        </div>
      </div>
      <div class="home_body_show fl-r">
        <div class="home_body_show_describe">
          <div class="home_body_show_describe_title">骑乐无穷</div>
          <div class="home_body_show_describe_subtitle">JOY RIDING</div>
          <div class="home_body_show_describe_line" />
          <div class="home_body_show_describe_word">
            芒果电单车的车身主色调，鹅黄与绿相映成辉，在色彩心理学上代表清新、有活力和快乐的感觉，
            骑着芒果电单车穿梭在城市的大街小巷，伴随着的是年轻的活力与现代科技的光彩。
            （涂装方面采用国际标准的3A环保漆，对人体无害且高温照射下无挥发气体泄出，放心骑行无需有负担）
          </div>
        </div>
        <img src="../../assets/images/show_2.jpg" class="home_body_show_img" />
      </div>
      <div class="home_body_show fl-r">
        <img src="../../assets/images/show_3.jpg" class="home_body_show_img" />
        <div class="home_body_show_describe">
          <div class="home_body_show_describe_title">质量可靠</div>
          <div class="home_body_show_describe_subtitle">
            QUALITY AND RELIABILITY
          </div>
          <div class="home_body_show_describe_line" />
          <div class="home_body_show_describe_word">
            皮面采用一体成型技术，不用担心雨天鞍座进水的烦恼，使用高于行业标准的高弹0.7mm精细皮革，
            使用寿命更长。16寸2.125实心轮胎，具体耐磨、免充气、免维护的特点。前后双鼓刹制动器最高车速下前后同时刹车，普通水泥路面上，
            刹车距离在2米以内，有效保障驾驶安全。加装后反射器，增加夜间行驶安全性。
          </div>
        </div>
      </div>
    </div>
    <div class="home_footer">
      <div>
        010-83424366（工作日 09:00-18:00）
        北京市海淀区北四环西路58号理想国际大厦11层
      </div>
      <div>
        Copyright © 2017 ofo Inc. 保留所有权利。京公网安备 11010802022978号 |
        公共事务邮箱 gr@ofo.so 商务合作邮箱 partner@ofo.com | 证照信息
      </div>
    </div>
  </div>
</template>

<script>
import homeHeader from "../../components/home/header.vue";
export default {
  components: {
    homeHeader,
  },
  data() {
    return {
      images: [
        require("../../assets/images/slider_01.jpg"),
        require("../../assets/images/slider_02.jpg"),
        require("../../assets/images/slider_03.jpg"),
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}

.home_header {
  width: 100%;
  height: 80px;
}

.home_body {
  width: 100%;
}

.home_body_carousel {
  height: 400px;
  margin-bottom: 30px;
}
.home_body_slider {
  width: 100%;
  height: 100%;
}

.home_body_show {
  height: 360px;
}

.home_body_show_img {
  width: 50%;
  height: 360px;
}

.home_body_show_describe {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 20px 80px;
  box-sizing: border-box;
}

.home_body_show_describe_title {
  font-size: 25px;
  font-weight: bold;
  color: #222;
}

.home_body_show_describe_subtitle {
  font-size: 18px;
  color: #222;
  font-weight: lighter;
  margin: 20px 0;
}
.home_body_show_describe_line {
  width: 50px;
  height: 3px;
  margin-bottom: 20px;
  background: #fdd42e;
}

.home_body_show_describe_word {
  color: #666;
  font-size: 14px;
}

.home_footer {
  width: 100%;
  height: 100px;
  line-height: 50px;
  text-align: center;
  color: #999;
  background-color: #3d3d42;
}
</style>

<style >
.el-carousel__item {
  width: 100%;
  height: 400px !important;
}
</style>
