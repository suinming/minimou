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
  </div>
</template>

<script>

import CarouselSlide from '@/components/CarouselSlide.vue'
import TitleBlock from '@/components/TitleBlock.vue'

export default {
  name: 'HomeView',
  components: {
    CarouselSlide,
    TitleBlock
  },
  data () {
    return {
      titleBlock: {
        brand: { title: '品牌介紹', englishTitle: 'BRAND' }
      }
    }
  }
}
</script>

<style scoped>

/* brand intro*/
.brandIntro{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 596px;
  height: 100%;
}

.minimouSectionLogoContainer{
  max-width: 204px;
  max-height: 204px;
  margin-top: 24px;
}

.brandIntro .content{
  display: flex;
}

/*-- brand intro left*/

.left .title span{
  font-weight: 700;
  font-size: 16px;
  margin-bottom:16px;
}

.left .title h3{
  margin-bottom: 27px;
}

.left article{
  max-width: 426px;
  border-top: 1px solid black;
  padding-top: 24px;
}

/*-- brand intro right*/

.right{
  position: relative;
  max-width: 370px;
  width: 100%;
  margin-left: 200px;
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
