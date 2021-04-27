<template>
  <div>
    <ul class="Preparations">
      <li
        class="Preparations__item"
        v-for="(item, index) in recipe.preparationSteps"
        :key="index"
        :class="{ currencyItem: index === nextAddStyle }"
      >
        <label>
          <input class="input" type="checkbox" v-model="item.isReady" />
          {{ item.step }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    recipe: {
      type: Object,
    },
  },
  computed: {
    nextAddStyle() {
      return this.recipe.preparationSteps.findIndex(
        (item) => item.isReady === false,
      );
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/style/media.scss";
.Preparations {
  text-align: justify;
}
.Preparations__item {
  list-style: none;
  text-indent: -1.5em;
  margin-bottom: 10px;
}
.currencyItem {
  font-size: large;
  font-weight: bold;
}
@include breakpointUp("sm") {
  .Preparations {
    padding-bottom: 10%;
    margin: auto;
    width: auto;
    min-width: 200px;
     margin-right: 20px;
     border-left: solid  black 1px;
  }
}
</style>
