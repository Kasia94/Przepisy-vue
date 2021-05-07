<template>
  <div class="Recipe">
    <Timer
      v-if="showTimer"
      :item="item"
      class="Recipe__timer"
      @close="setShow"
    />
    <div>
      <h2 class="Recipe__title">{{ recipe.title }}</h2>
    </div>
    <div class="Recipe__container">
      <div class="Recipe__flex-container">
        <div class="b1">
          <button
            class="button button--ingredients"
            @click="showIngredients = !showIngredients"
          >
            {{ !showIngredients ? "Pokaż składniki" : "Ukryj" }}
          </button>
        </div>
        <div class="Recipe__ingredients-box">
          <Ingredients
            v-show="showIngredients"
            class="Recipe__ingredients"
            :recipe="recipe"
          />
        </div>
        <div class="b2">
          <button
            class="button button--preparation"
            @click="showPreparation = !showPreparation"
          >
            {{ !showPreparation ? "Pokaż Wykonanie" : "Ukryj" }}
          </button>
        </div>
        <div class="Recipe__preparation-box">
          <Preparation
            v-show="showPreparation"
            class="Recipe__preparation"
            :recipe="recipe"
            @startTimer="startTimer"
          />
        </div>
      </div>

      <img
        class="Recipe__image"
        :src="`../images/${recipe.imageSource}.jpg`"
        :alt="`${recipe.title}`"
      />
    </div>
  </div>
</template>
<script>
import Ingredients from '@/components/Ingredients.vue';
import Preparation from '@/components/Preparation.vue';
import Timer from '@/components/Timer.vue';
import dbObject from '@/db.json';

export default {
  components: {
    Ingredients,
    Preparation,
    Timer,
  },

  data() {
    return {
      showIngredients: false,
      showPreparation: false,
      showTimer: false,
      item: {},
      recipes: dbObject.recipes,
    };
  },
  computed: {
    recipe() {
      return this.$store.getters.choiceRecipe(+this.$route.params.id);
    },
  },
  methods: {
    startTimer(item) {
      this.item = item;
      this.showTimer = true;
    },
    setShow() {
      this.showTimer = false;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/style/media.scss";
@import "@/assets/style/colors.scss";
.Recipe__title {
  margin: 20px auto;
}
.Recipe__container {
  background: linear-gradient(
    0deg,
    rgba(45, 193, 253, 1) -200%,
    rgb(238, 245, 245) 100%
  );
}
.Recipe__flex-container {
  display: flex;
  flex-direction: column;

  padding: 5px;
}

.Recipe__image {
  display: block;
  width: 90%;
  max-width: 370px;
  max-height: 230px;
  margin: auto;
}
.Recipe__ingredients {
  margin: auto;
}

.Recipe__preparation {
  display: inline-block;
  margin: auto;
}
.Recipe__timer {
  display: block;
  margin: auto;
  background-color: white;
  opacity: 80%;
  position: sticky;
  top: 10px;
  left: 10px;
}
@include breakpointUp("sm") {
  .Recipe__flex-container {
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      width: 50%;
    }
    justify-content: center;
    box-sizing: border-box;
  }
  .b1 {
    order: 1;
  }
  .Recipe__ingredients {
    border-right: solid black 1px;
  }
  .Recipe__ingredients-box {
    order: 3;
  }
  .b2 {
    order: 2;
  }
  .button--ingredients {
    margin-left: 55% !important;
  }
  .button--preparation {
    margin-right: 55% !important;
  }
  .Recipe__preparation-box {
    order: 4;
  }
  .Recipe__preparation {
    padding-left: 20px;
    max-width: 200px;
  }
  .Recipe__image {
    width: auto;
    max-width: 70%;
  }

  .button {
    height: 36px;
    width: 90px;
  }
  .Recipe__timer {
    position: sticky;
    right: 10px;
    top: 10px;
    margin-left: 70%;
    background-color: white;
    width: 300px;
  }
}
@include breakpointUp("md") {
  .Recipe__image {
    max-width: 40%;
    margin: auto;
  }
  button {
    width: 20%;
    align-self: flex-end;
  }
  .Recipe__ingredients {
    margin-left: 30%;
  }

  @include breakpointUp("lg") {
    .Recipe__image {
      min-width: 400px;
    }
    button {
      width: 20%;
    }
  }
}
</style>
