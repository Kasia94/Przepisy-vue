<template>
<div>
<div v-for="(item, index) in recipe.preparationSteps" :key="index">
  <input type="checkbox">{{item}}
</div>
</div>
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
