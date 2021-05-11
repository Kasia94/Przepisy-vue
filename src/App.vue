<template>
  <div id="app">
    <header class="Logo" v-if="$route.path !== '/'">
    <router-link  to="/">
      <img class="Logo__image" src="./assets/headerImage.png" alt="logo" />
    </router-link>
    </header>
    <router-view />
    <footer class="Footer">&copy;Copyright 2021</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

      timers: [],
    };
  },
  methods: {
    startTimer(item) {
      const timer = {
        label: item.step,
        timer: item.time,
      };
      this.timers.push(timer);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.Logo {
  display: block;
  position: sticky;
  left: 20px;
  top: 25px;
  width: 10%;
  z-index: 1;

  &__image {
    width: 100px;
    height: 100px;
  }
}
.Footer{
 margin-left: 15px;
 margin-top: 15px;
  text-align: left;
}
</style>
