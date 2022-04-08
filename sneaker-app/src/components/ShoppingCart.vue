<template>
  <div class="shopping-cart">
  <div class="item-cart" v-for="sneaker in $store.state.cart" v-bind:key="sneaker.subname">
     <h2>{{sneaker.name}}</h2>
        <h3>{{sneaker.subname}}</h3>
        <img v-on:click="cyclePic(sneaker)" id= "sneakerPic" v-bind:src=
        "sneaker.images" alt="">
        <h4>{{sneaker.price}}</h4>
  </div>
      
  </div>
</template>

<script>
export default {
  name: "shopping-cart" 

}
</script>

<style>



</style>