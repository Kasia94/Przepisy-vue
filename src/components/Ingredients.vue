<template>
  <ul class="Ingredients">
    <li
      class="Ingredient"
      v-for="(item, index) in recipe.ingredients"
      :key="index"
    >
      <label>
        <input type="checkbox" v-model="item.isReady" />{{ item.name }}
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
.Ingredients {
  display: flex;
  flex-direction: column;
  order: 2;
}
.Ingredient {
  list-style: none;
  padding-right: 10%;
  margin: 3%;
}
</style>
