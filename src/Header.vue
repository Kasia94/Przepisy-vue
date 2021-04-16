<template>
<div class="Header">
    <h1 class="Header__slogan">Z Kasią Ci się upiecze...</h1> 
    <img class='Header__image' src="./assets/headerImage.png"/>
</div>
</template>
<style>
.Header{
    display: block;
}
.Header__slogan{
    background: radial-gradient(rgb(17 37 90) 55%, white 70%);
    color: white;
    width: 50%;
    height: 40vh;
    margin: auto;
   text-align: center;
   line-height: 250px;
   box-shadow: inset 5px 5px 15px 15px ;
   transform: translateX(25%) translateY(15%);
   
   
}
.Header__image{
    width: 85%;
    height: 80%;
   position: absolute;
   top: 0;
   left:35%;
  
}
</style>