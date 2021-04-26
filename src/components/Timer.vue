<template>
  <div class="Timer">
    <h3 class="Timer__title">Czas pieczenia/gotowania</h3>
    <div v-if="!time">
      <form>
        <label v-for="(item, index) in preparation" :key="index">
          <input
            v-if="item.time"
            type="radio"
            name="minutes"
            :value="item.time"
            v-model="minutes"
          />
          {{ item.time }} </label
        >min
        <button type="button" @click="setTime" :disabled="!minutes">
          Ustaw czas
        </button>
      </form>
    </div>
    <div v-else>
      <div>{{ prettyTime | prettify }}</div>
      <div>
        <button v-if="!isRunning" @click="start">Start</button>
        <button v-if="isRunning" @click="stop">Stop</button>
        <button @click="reset">Reset</button>
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
