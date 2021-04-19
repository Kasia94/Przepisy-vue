<template>
  <div id="app">
    <Header />
    <ListOfrecipes
      v-if="!activeRecipeId"
      :recipes="recipes"
      @clicked="setActiveRecipe"
    />
    <div v-else>
      {{ recipes.find(recipe => recipe.id === activeRecipeId)}}
      <button @click="setActiveRecipe()">close</button>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ListOfrecipes from './components/ListOfrecipes.vue';

export default {
  name: 'App',
  components: {
    Header,
    ListOfrecipes,
  },
  data() {
    return {
      activeRecipeId: null,
      recipes: [
        {
          id: 1,
          title: 'Sernik Bomba Kalorii',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: ['Nagrzać piekarnik do 170℃', 'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki', 'piec 15min w 170℃'],
        },
        {
          id: 2,
          title: 'Strogonow',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: ['Nagrzać piekarnik do 170℃', 'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki', 'piec 15min w 170℃'],
        },
        {
          id: 3,
          title: 'Stripsy',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: ['Nagrzać piekarnik do 170℃', 'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki', 'piec 15min w 170℃'],
        },
        {
          id: 4,
          title: 'Faworki',
          ingredients: [
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
            { name: 'Herbatniki Maślane', quantity: '200g', isReady: false },
          ],
          preparationSteps: ['Nagrzać piekarnik do 170℃', 'Herbatniki pokruszyć na blachę',
            'Masło rozpuścić i wylać na pokruszone herbatniki', 'piec 15min w 170℃'],
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
