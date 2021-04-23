<template>
  <div id="app">
    <Header />
    <ListOfrecipes
      v-if="!activeRecipeId"
      :recipes="recipes"
      @clicked="setActiveRecipe"
    />
    <Recipe
      v-else
      :recipe="recipes.find((recipe) => recipe.id === activeRecipeId)"
    />

    <button class="button" v-if="activeRecipeId" @click="setActiveRecipe()">Menu</button>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ListOfrecipes from './components/ListOfrecipes.vue';
import Recipe from './components/Recipe.vue';

export default {
  name: 'App',
  components: {
    Header,
    ListOfrecipes,
    Recipe,
  },
  data() {
    return {
      activeRecipeId: null,
      recipes: [
        {
          id: 1,
          title: 'Sernik Bomba Kalorii',
          imageSource: 'sernik',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: [
            { step: 'Nagrzać piekarnik do 170℃', isReady: false },
            { step: 'Herbatniki pokruszyć na blachę', isReady: false },
            { step: 'Masło rozpuścić i wylać na pokruszone herbatniki', isReady: false },
            { step: 'piec 15min w 170℃', isReady: false },
          ],
        },
        {
          id: 2,
          title: 'Strogonow',
          imageSource: '',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: [
            { step: 'Nagrzać piekarnik do 170℃', isReady: false },
            { step: 'Herbatniki pokruszyć na blachę', isReady: false },
            { step: 'Masło rozpuścić i wylać na pokruszone herbatniki', isReady: false },
            { step: 'piec 15min w 170℃', isReady: false },
          ],
        },
        {
          id: 3,
          title: 'Stripsy',
          imageSource: '',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: [
            { step: 'Nagrzać piekarnik do 170℃', isReady: false },
            { step: 'Herbatniki pokruszyć na blachę', isReady: false },
            { step: 'Masło rozpuścić i wylać na pokruszone herbatniki', isReady: false },
            { step: 'piec 15min w 170℃', isReady: false },
          ],
        },
        {
          id: 4,
          title: 'Faworki',
          imageSource: '',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: [
            { step: 'Nagrzać piekarnik do 170℃', isReady: false },
            { step: 'Herbatniki pokruszyć na blachę', isReady: false },
            { step: 'Masło rozpuścić i wylać na pokruszone herbatniki', isReady: false },
            { step: 'piec 15min w 170℃', isReady: false },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveRecipe(id) {
      this.activeRecipeId = id;
    },
  },
};
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
