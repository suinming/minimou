<template>
  <header v-if="atTop" class="header">
        <div class="navbarflexWrapper">
            <ul class="navbarLeft">
                <li ><a href="#">首頁</a></li>
                <li ><a href="#">門市資訊</a></li>
                <li ><a href="#">最新消息</a></li>
                <li ><a href="#">餐點介紹</a></li>
            </ul>
            <img src="@/assets/img/minimouBlackLogo.png" alt="minimouLogo" />
            <ul class="navbarRight">
                <li ><a href="#">品牌介紹</a></li>
                <li ><a href="#" >加入我們</a></li>
                <li ><a href="#" >加盟專區</a></li>
                <li ><a href="#" >線上購物</a></li>
            </ul>
        </div>
    </header>
    <header v-else class="headerOnscroll">
      <img src="@/assets/img/minimouWhiteLogo.png" alt="minimouLogo" />
        <ul class="navbarOnscroll">
            <li ><a href="#">首頁</a></li>
            <li ><a href="#">門市資訊</a></li>
            <li ><a href="#">最新消息</a></li>
            <li ><a href="#">餐點介紹</a></li>
            <li ><a href="#">品牌介紹</a></li>
            <li ><a href="#" >加入我們</a></li>
            <li ><a href="#" >加盟專區</a></li>
            <li ><a href="#" >線上購物</a></li>
        </ul>
    </header>
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      atTop: true
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      window.scrollY < 5 ? this.atTop = true : this.atTop = false
    }
  }
}
</script>

<style>
#app {
  max-width: 1360px;
  margin: 0 auto;
}

.container{
  width: 100%;
}

/* section*/
section{
  font-size: 25px;
}

</style>

<style>
/* top navbar */
header{
  max-height: 160px;
  font-size: 14px;
  color:var(--black);
  background: var(--black);
  padding-left:76px;
  padding-right: 76px;
}

.onScroll{
  max-height: 64px;
}

.navbarflexWrapper{
  display: flex;
  justify-content: space-between;
}

.navbarLeft, .navbarRight{
  display: flex;
  max-width: 398px;
  max-height: 27px;
  width: 100%;
  justify-content: space-between;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 109px;
  margin-bottom: 24px;
}

.navbarLeft li a, .navbarRight li a{
  color: white;
  font-weight: 700;
}

.navbarLeft li a:hover, .navbarRight li a:hover, .navbarOnscroll li a:hover{
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 4px;
}

header img{
  max-width: 112px;
  max-height: 112px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

/* onscroll navbar*/
.headerOnscroll{
  display: flex;
  justify-content: space-between;
  position: sticky;
  top:0;
  max-height: 64px;
  background: white;
  padding-right: 76px;
  padding-left: 76px;
}

.headerOnscroll img{
  max-width: 147px;
  max-height: 42px;
  margin: 0;
}

.navbarOnscroll{
  display: flex;
  justify-content: space-between;
  max-width: 588px;
  width: 100%;
  max-height: 27px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.navbarOnscroll li a{
  color: var(--black);
}

.navbarOnscroll li a:hover{
  text-decoration-color: var(--red);
}

</style>
