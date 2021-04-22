<template>
  <div class="Ingredients" >
    <div class="Ingredient" v-for="(item, index) in recipe.ingredients" :key="index">
      <input type="checkbox" >{{ item.name }} {{item.quantity}}
      <!-- <p class="Ingredient__quantity"></p> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recipe: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.Ingredients{
    display: flex;
    flex-direction: column;
    order: 2;

}
.Ingredient{
   display: flex;
    flex-direction: row;
    padding: 5%;
    margin-left:10%
}

</style>
