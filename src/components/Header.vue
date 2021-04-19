<template>
  <div class="Header">
    <h1 class="Header__slogan">Z Kasią Ci się upiecze...</h1>
    <img class="Header__image" src="@/assets/headerImage.png" />
  </div>
</template>
<style lang="scss">
@import '@/assets/style/media.scss';

.Header {
  background: radial-gradient(
    ellipse,
    rgba(11, 32, 60, 1) 45%,
    rgba(237, 235, 235, 0) 60%
  );

  width: auto;
  height: 200px;
  padding: 20px;
  margin: auto;

}

@include breakpoint('sm') {
  .Header {
    // background: red;
    color: yellow;
  }
}

@include breakpointUp('md') {
  .Header {
    width: 670px;
  }
}
@include breakpoint('lg') {
  .Header {
    margin-left: 20%;
  }
}

.Header__slogan {
  color: white;
  margin: 65px auto auto auto;
  text-align: center;
}
.Header__image {
  width: 140px;
  height: 150px ;
  position: absolute;
  top: 31%;
  left: 60%;
}
</style>
