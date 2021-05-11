<template>
  <div class="Header">
    <h1 class="Header__slogan">Z Kasią Ci się upiecze...</h1>
    <img class="Header__image" src="@/assets/headerImage.png" />
  </div>
</template>
<style lang="scss">
@import "@/assets/style/media.scss";
@import "@/assets/style/colors.scss";

.Header {
  background: $darkGradient;
  width: auto;
  height: 200px;
  padding: 20px;
  margin: auto;
&__slogan {
  color: white;
  margin: 65px auto auto auto;
  text-align: center;
}
&__image {
  width: 140px;
  height: 150px;
  position: absolute;
  top: 25%;
  left: 60%;
}
}
@include breakpointUp("md") {
  .Header {
    width: 670px;
  }
  &__image {
 top:25%
  }
}
@include breakpoint("lg") {
  .Header {
    margin-left: 20%;
  }
}

</style>
