<template>
  <ul class="Ingredients">
    <li
      class="Ingredient"
      v-for="(item, index) in recipe.ingredients"
      :key="index"
    >
      <label class="Ingredient__label">
        <input class="input" type="checkbox" v-model="item.isReady" />{{ item.name }}
         <p class="Ingredient__quantity">{{ item.quantity }}</p>
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
  text-align: justify;

}
.Ingredient {
  list-style: none;
  margin-right: 10px;
  margin: 3%;
  text-indent: -1.8em;
&__label{
  max-width: 80%;

}
&__quantity{
  display: inline;
  margin-left: 5px;
}
}
@include breakpointUp("sm") {
  .Ingredient {
    padding-bottom: 10px;
    min-width: 140px;
  }
}
</style>
