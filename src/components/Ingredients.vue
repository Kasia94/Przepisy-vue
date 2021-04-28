<template>
  <ul class="Ingredients">
    <li
      class="Ingredient"
      v-for="(item, index) in recipe.ingredients"
      :key="index"
    >
      <label>
        <input class="input" type="checkbox" v-model="item.isReady" />{{ item.name }}
        {{ item.quantity }}
      </label>
    </li>
  </ul>
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
@import "@/assets/style/media.scss";
.Ingredients {
  display: flex;
  flex-direction: column;
  order: 2;
  text-align: justify;
}
.Ingredient {
  list-style: none;
  padding-right: 10%;
  margin: 3%;
  text-indent: -1.8em;
}
@include breakpointUp("sm") {
  .Ingredient {
    padding-bottom: 10%;
    margin: auto;
    min-width: 200px;
    margin-right: 10px;
  }
}
</style>
