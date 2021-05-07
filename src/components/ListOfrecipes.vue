<template>
<div>
  <Header />
  <ul class="List" v-for= "item in recipes" :key="item.id">
    <li class="List__item" @click="$emit('clicked', item.id)">
      {{ item.title}}
      <!-- <router-link to="`./${item.title}`">{{item.title}}</router-link> -->
    </li>
  </ul>
</div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  props: {
    recipes: {
      type: Array,
    },
  },
  components: {
    Header,
  },
};
</script>
<style lang='scss'>
@import '@/assets/style/media.scss';
.List{
    display: block;
    background: rgb(0, 0, 99);
    color: white;
    margin: auto;
    margin-top: 50px;
    margin-left: 5%;
    list-style: none;
}
.List__item{
    height: 30px;
    text-align: center;
    padding-right: 15%;
  padding-top: 5px;
  cursor: pointer;
}
@include breakpoint('md') {
  .List {
    width: 400px;
    margin-left: 20%;
  }
}
@include breakpoint('lg') {
  .List {
    width: 600px;
    margin-left: 25%;
  }
}
</style>
