<template>
  <transition-group tag="div">
      <div class="pageContainer" v-for="(img, index) of imgs" :key="img.name" v-show="index === show" :name="transitionName">
        <img :src="img.src" :alt="img.name">
        <i class="left arrow" @click="setShow(show-1)">
        </i>
        <i class="right arrow" @click="setShow(show+1)">
        </i>
      </div>
  </transition-group>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'left-in',
      show: 0,
      imgs: [
        { name: 'meat', src: require('@/assets/img/carousel/meat.png') },
        { name: 'burger', src: require('@/assets/img/carousel/burger.png') }
      ]
    }
  },
  methods: {
    setShow (index) {
      this.show = index
    }
  },
  watch: {
    show (nVal, oVal) {
      if (nVal < 0) {
        this.show = this.imgs.length - 1
      } else if (nVal > this.imgs.length - 1) {
        this.show = 0
      } else {
        if (oVal < 0) {
          this.transitionName = 'left-in'
        } else if (oVal > this.imgs.length - 1) {
          this.transitionName = 'right-in'
        } else {
          this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
        }
      }
    }
  }
}
</script>

<style scoped>
.pageContainer{
  position: relative;
  height: 529px;
  overflow: hidden;
}

img{
  height: 529px;
}

.arrow{
  width: 11px;
  height: 11px;
  border: solid white;
  border-width: 0px 5px 5px 0;
  display: inline-block;
  padding: 3px;
}

.arrow:hover{
  cursor: pointer;
}

.left{
  transform: rotate(135deg);
  position: absolute;
  left: 20px;
  top: 205px;
}

.right{
  transform: rotate(-45deg);
  position: absolute;
  right: 20px;
  top: 205px;
}

.right-in-enter{
  left:100%
}
.right-in-enter-active,.right-in-leave-active{
  transition: left 0.8s;
}
.right-in-enter-to,.right-in-leave{
  left:0%
}
.right-in-leave-to{
  left:-100%
}
.left-in-enter{
  left:-100%
}
.left-in-enter-active,.left-in-leave-active{
  transition: left 0.8s;
}
.left-in-enter-to,.left-in-leave{
  left:0%
}
.left-in-leave-to{
  left:100%
}
</style>
