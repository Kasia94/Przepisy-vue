<template>
  <div class="Timer">
    <h3 class="Timer__title">Czas pieczenia/gotowania</h3>
    <div v-if="!time">
      <form>
        <label class="Timer__Form__label" v-for="(item, index) in preparation" :key="index">
          <input
            v-if="item.time"
            type="radio"
            name="minutes"
            :value="item.time"
            v-model="minutes"
          />
          {{ item.time }} </label
        ><a class="Timer__Form__text">minut</a>
        <button class="button button--setting" type="button" @click="setTime" :disabled="!minutes">
          Ustaw czas
        </button>
      </form>
    </div>
    <div v-else>
      <div>{{ prettyTime | prettify }}</div>
      <div>
        <button class="button" v-if="!isRunning" @click="start">Start</button>
        <button class="button" v-if="isRunning" @click="stop">Stop</button>
        <button class="button" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 0,
      minutes: null,
      isRunning: false,
      timer: null,
      sound: new Audio('/alarm.mp3'),
    };
  },
  props: {
    preparation: {
      type: Array,
    },
  },
  filters: {
    prettify(value) {
      const data = value.split(':');
      let minutes = data[0];
      let secondes = data[1];
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (secondes < 10) {
        secondes = `0${secondes}`;
      }
      return `${minutes}:${secondes}`;
    },
  },
  methods: {
    setTime() {
      this.time = this.minutes * 60;
    },
    start() {
      this.isRunning = true;
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time -= 1;
          } else {
            clearInterval(this.timer);
            this.sound.play();
            this.reset();
          }
        }, 1000);
      }
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
    },
    reset() {
      this.stop();
      this.time = 0;
      this.secondes = 0;
      this.minutes = 0;
    },
  },
  computed: {
    prettyTime() {
      const time = this.time / 60;
      const minutes = parseInt(time, String);
      const secondes = Math.round((time - minutes) * 60);
      return `${minutes}:${secondes}`;
    },
  },
};
</script>
<style lang="scss">
.button--setting{
  margin: 20px  !important;
}
.Timer__Form__label{
margin-right: auto;
}
.Timer__Form__text{
  margin-left: 20px;
}
</style>
