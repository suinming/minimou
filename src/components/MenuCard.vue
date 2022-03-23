<template>
  <div class="item" :style="blockWidth">
    <img :src="require(`@/assets/img/pageOneMenu/${imgSrc}`)" alt="menuImg" :style="imgSizeObj">
    <h4>{{ title }}</h4>
    <table>
      <tr v-for="row of ingredients" :key="row.key">
        <td :class="{isRed: row.isRed}">{{ row.key }}</td>
        <td :class="{isRed: row.isRed}">{{ row.val }}{{ row.unit }}</td>
      </tr>
    </table>
    <!-- <span :class="{isRed: ingredients[0].isRed}">{{ ingredients[0].key }}</span> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      /* destructure */
      imgSizeObj: this.item.imgSizeObj,
      imgSrc: this.item.imgSrc,
      blockWidth: this.item.blockWidth,
      title: this.item.title,
      ingredients: this.item.ingredients
    }
  }
}
</script>

<style scoped>
.isRed{
  color: var(--red);
}

.item{
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 24px;
}

table{
  font-size: 16px;
  width: 100%;
  border-top: 1px dotted black ;
  margin-top: 16px;
}

table tr{
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

</style>
