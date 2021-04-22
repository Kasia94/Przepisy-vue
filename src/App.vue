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

    <button v-if="activeRecipeId" class="Btn" @click="setActiveRecipe()">Menu</button>
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
            'Nagrzać piekarnik do 170℃',
            'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki',
            'Piec 15min w 170℃',
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
            'Nagrzać piekarnik do 170℃',
            'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki',
            'piec 15min w 170℃',
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
            'Nagrzać piekarnik do 170℃',
            'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki',
            'piec 15min w 170℃',
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
            'Nagrzać piekarnik do 170℃',
            'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki',
            'piec 15min w 170℃',
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
.Btn {
  background: rgba(11, 32, 60, 1);
  color: white;
  border-radius: 10%;
  margin: 5px;
}
</style>
