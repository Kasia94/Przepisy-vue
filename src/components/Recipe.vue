<template>
  <div class="Recipe">
    <div>
      <h2 class="Recipe__title">{{ recipe.title }}</h2>
    </div>
    <div class="Recipe__container">
      <button
        class="Recipe__btn Recipe__btn--ingredients"
        @click="showIngredients = !showIngredients"
      >
        Pokaż składniki
      </button>
      <Ingredients
        v-if="showIngredients"
        class="Recipe__ingredients"
        :recipe="recipe"
      />
      <img
        class="Recipe__image"
        :src="`./images/${recipe.imageSource}.jpg`"
        :alt="`${recipe.title}`"
      />
      <button
        class="Recipe__btn Recipe__btn--preparation"
        @click="showPreparation = !showPreparation"
      >
        Pokaż wykonanie
      </button>
      <Preparation
        v-if="showPreparation"
        class="Recipe__preparation"
        :recipe="recipe"
      />
    </div>
    <Timer />
  </div>
</template>
<script>
import Ingredients from './Ingredients.vue';
import Preparation from './Preparation.vue';

export default {
  components: {
    Ingredients,
    Preparation,
  },
  props: {
    recipe: {
      type: Object,
    },
  },
  data() {
    return {
      showIngredients: false,
      showPreparation: false,
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/style/media.scss";
@import "@/assets/style/colors.scss";
.Recipe__title {
  margin-right: 150px;
}
@include breakpointUp("sm") {
  .Recipe__title {
    margin-right: 120px;
  }
}
.Recipe__container {
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(45, 193, 253, 1) -200%,
    rgb(238, 245, 245) 100%
  );
  padding: 5px;
}
.Recipe__btn {
  background: rgba(11, 32, 60, 1);
  color: white;
  border-radius: 10%;
  margin: 5px;
}
.Recipe__btn--ingredients {
  order: 2;
}
.Recipe__btn--preparation {
  order: 4;
}
.Recipe__image {
  width: 90%;
  margin: auto;
  order: 1;
}
.Recipe__ingredient {
  flex-basis: 35%;
  order: 3;
}
.Recipe__preparation {
  flex-basis: 35%;
  order: 5;
}
</style>
