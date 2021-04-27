<template>
  <div class="Recipe">
    <div>
      <h2 class="Recipe__title">{{ recipe.title }}</h2>
    </div>
    <div class="Recipe__container">
      <button
        class="button button--ingredients"
        @click="showIngredients = !showIngredients"
      >
        {{ !showIngredients ? "Pokaż składniki" : "Ukryj" }}
      </button>
      <Ingredients
        v-show="showIngredients"
        class="Recipe__ingredients"
        :recipe="recipe"
      />
      <img
        class="Recipe__image"
        :src="`./images/${recipe.imageSource}.jpg`"
        :alt="`${recipe.title}`"
      />
      <button
        class="button button--preparation"
        @click="showPreparation = !showPreparation"
      >
        {{ !showPreparation ? "Pokaż Wykonanie" : "Ukryj" }}
      </button>
      <Preparation
        v-show="showPreparation"
        class="Recipe__preparation"
        :recipe="recipe"
      />
      <button class="button button--timer" @click="showTimer = !showTimer">
        {{ !showTimer ? "Pokaż Licznik" : "Ukryj" }}
      </button>
      <Timer
        class="Recipe__timer"
        v-if="showTimer"
        :preparation="recipe.preparationSteps"
      />
    </div>
  </div>
</template>
<script>
import Ingredients from './Ingredients.vue';
import Preparation from './Preparation.vue';
import Timer from './Timer.vue';

export default {
  components: {
    Ingredients,
    Preparation,
    Timer,
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
      showTimer: false,
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
.button--ingredients {
  order: 2;
}

.button--preparation {
  order: 4;
}
.button--timer {
  order: 6;
}
.Recipe__image {
  width: 90%;
  margin: auto;
  order: 1;
}
.Recipe__ingredients {
  flex-basis: 35%;
  order: 3;
}

.Recipe__preparation {
  flex-basis: 35%;
  order: 5;
}
.Recipe__timer {
  order: 7;
}
@include breakpointUp("sm") {
  .Recipe__title {
    margin-right: 125px;
    margin-top: 0;
  }
  .Recipe__container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .Recipe__image {
    width: auto;
    max-width: 70%;
    order: 3;
  }
  .Recipe__ingredients {
    order: 1;
    max-width: 160px;
    padding-inline-start: 10px;
    margin: auto;
  }
  .Recipe__preparation {
    order: 2;
    padding-left: 30px;
    margin: auto;
  }
  .button--ingredients {
    order: 4;
    margin-left: 20% !important;
  }
  .button--preparation {
    order: 5;
    max-height: 36, 7px;
  }
  button {
    width: 20%;
    height: 36, 7px;
  }
  .Recipe__timer {
  margin: auto;
}
}
@include breakpointUp("md") {
  .Recipe__image {
    max-width: 40%;
    margin: auto;
    margin-left: 230px;
    padding-right: 200px;
  }
    button {
    width: 20%;
    align-self: flex-end;

  }
  .button--ingredients {
    margin-left: 120px !important;
  }
    .Recipe__container {
  align-content: flex-end;
  }
  @include breakpointUp("lg") {
  .button--ingredients {
    margin-left: 20% !important;
  }
  .Recipe__image {
    margin-left: 32%
  }
  button {
    width: 20%;
  }
  }
}
</style>
