<template>

    <ul class="Preparations">
      <li
        class="Preparations__item"
        v-for="(item, index) in recipe.preparationSteps"
        :key="index"
        :class="{ currencyItem: index === nextAddStyle }"
      >
        <label class="Preparation__label">
          <input class="input" type="checkbox" v-model="item.isReady" readonly />
          {{ item.step }}
          <template v-if="item.time" >
            <button class="button button--timer" @click="$emit('startTimer', item)">
              Uruchom timer</button>
          </template>
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
  display: inline;
  text-align: justify;
  max-width: 400px;
&__item {
  list-style: none;
  text-indent: -1.5em;
  margin-bottom: 10px;
    height: auto;
}
}
.currencyItem {
  font-size: large;
  font-weight: bold;
}
.Preparation__label{
  max-width: 400px  !important;
}
.button--timer{
  min-width: 60%;
}
@include breakpointUp("sm") {
  .Preparations {
    padding-bottom: 10%;
    margin: auto;
    width: auto;

  }
}

</style>
