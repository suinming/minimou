<template>
  <div class="container">
    <CarouselSlide />
    <!--brand intro -->
    <section class="brandIntro">
      <TitleBlock :title='titleBlock.brand.title' :englishTitle='titleBlock.brand.englishTitle'/>
      <div class="minimouSectionLogoContainer">
        <img src="@/assets/img/minimouSectionLogo.png" alt="minimouLogo" >
      </div>
      <div class="content">
        <div class="left">
          <div class="title">
            <span>FRESH IS BEST !</span>
            <h3>新鮮就是美味</h3>
          </div>
          <article>
            MINIMOU 以極簡主義為發音諧音命名，少就是多的精神，精簡好的食材，取其精華透過手工式餐點、備料至餐點，不添加食物合成劑，來區別代工食品所帶來的飲食文化，打造健康飲食、創意生活。
          </article>
        </div>
        <div class="right">
          <div class="circleGroup">
            <div class="circle">極簡 <br> 主義</div>
            <div class="circle">食用 <br> 時間</div>
            <div class="circle">溫度  <br>  服務</div>
          </div>
          <a href="">更多品牌介紹 →</a>
        </div>
      </div>
    </section>
    <!--nutrient -->
    <section class="nutrient">
      <TitleBlock :title='titleBlock.nutrient.title' :englishTitle='titleBlock.nutrient.englishTitle'/>
      <!--nutritionist -->
      <div class="nutritionist">
        <img class="nutritionistImg" src="@/assets/img/nutritionist.png" alt="nutritionist">
        <div class="portfolio">
          <div class="title">
            <div class="text">
              <h3>營養師有樺要說</h3>
              <span class="nutritionistName">簡鈺樺</span> <span class="redBlock">營養師</span>
            </div>
            <img class="QRcode" src="@/assets/img/QRcode.png" alt="QRcode">
          </div>
          <div class="portfolioContent">
            <h6>{{ portfolioContent.degree }}</h6>
            <h6>{{ portfolioContent.position }}</h6>
            <h6>{{ portfolioContent.license }}</h6>
            <h6>{{ portfolioContent.title1 }}</h6>
            <h6>{{ portfolioContent.title2 }}</h6>
            <h6>{{ portfolioContent.title3 }}</h6>
            <h6>{{ portfolioContent.title4 }}</h6>
          </div>
        </div>
      </div>
      <!--menu -->
      <div class="menu">
        <MenuCard :item='menuItems[0]'/>
      </div>
    </section>
  </div>
</template>

<script>

import CarouselSlide from '@/components/CarouselSlide.vue'
import TitleBlock from '@/components/TitleBlock.vue'
import MenuCard from '@/components/MenuCard.vue'
import { titleBlock, menuItems, portfolioContent } from '@/data.js'

export default {
  name: 'HomeView',
  components: {
    CarouselSlide,
    TitleBlock,
    MenuCard
  },
  data () {
    return {
      titleBlock: titleBlock,
      portfolioContent: portfolioContent,
      menuItems: menuItems
    }
  }
}
</script>

/* brand intro*/
<style scoped>
.brandIntro{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
}

.minimouSectionLogoContainer{
  max-width: 204px;
  max-height: 204px;
  margin-top: 24px;
}

.content{
  display: flex;
  width: 100%;
  justify-content: space-between;
}

/*-- brand intro left*/

.left{
  max-width: 426px;
  width: 100%;
  margin-left: 168px;
}

.left .title span{
  font-weight: 700;
  font-size: 16px;
  margin-bottom:16px;
}

.left .title h3{
  margin-bottom: 27px;
}

.left article{
  border-top: 1px solid black;
  padding-top: 24px;
}

/*-- brand intro right*/

.right{
  position: relative;
  max-width: 370px;
  width: 100%;
  margin-right: 189px;
}

.circleGroup{
  display: flex;
  justify-content: space-between;
}

.circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: var(--green);
  font-weight: 700;
  font-size: 24px;
  color: white;
}

.right a{
  position: absolute;
  right: 5px;
  bottom: 2px;
  font-weight: 700;
  font-size: 18px;
  color: var(--blue);
}
</style>

/* nutrient*/
<style scoped>
.nutrient{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--lightGrey);
}

.nutritionist{
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 24px;
  padding-bottom: 25px;
}

.portfolio{
  max-width: 427px;
  width: 100%;
}

/* portfolio title*/

.portfolio .title{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  max-height: 129px;
  height: 100%;
  margin-bottom: 24px;
}

.nutritionistName{
  font-size: 24px;
}

.redBlock{
  font-weight: 700;
  font-size: 16px;
  display: inline-block;
  background-color: var(--red);
  color: white;
  padding: 4px;
}

.nutritionistImg{
  max-width: 266px;
  max-height: 335px;
}

.QRcode{
  max-width: 92px;
  max-height: 92px;
}

/* portfolio content*/

.portfolioContent{
  line-height: 22px;
}
</style>

/* menu*/
<style scoped>

</style>
