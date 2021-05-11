<template>
  <div class="Timer">
    <h3 class="Timer__title">Czas pieczenia/gotowania</h3>

    <div>
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
      time: this.item.time * 60,
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
    item: {
      type: Object,
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
  mounted() {
    this.start();
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
            this.$emit('close');
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
      this.time = this.item.time * 60;
      this.secondes = 0;
      this.minutes = 0;
    },
  },
  computed: {
    prettyTime() {
      const time = this.time / 60;
      const minutes = parseInt(time, 10);
      const secondes = Math.round((time - minutes) * 60);
      return `${minutes}:${secondes}`;
    },
  },
};
</script>
<style lang="scss">
.button--setting {
  margin: 20px !important;
}
.Timer__Form{
&__label {
  margin-right: auto;
}
&__text {
  margin-left: 20px;
}
}
</style>
